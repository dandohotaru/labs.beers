import { Subscription } from './event.aggregator';

/**
 * Based on https://github.com/aurelia/event-aggregator
 */
class Handler {
    constructor(public messageType, public callback) {
        this.messageType = messageType;
        this.callback = callback;
    }

    public handle(message) {
        if (message instanceof this.messageType) {
            this.callback.call(null, message);
        }
    }
}

/**
* Represents a disposable subsciption to an EventAggregator event.
*/
export interface Subscription {
    channel?: string;
    dispose: () => void;
}

/**
* Enables loosely coupled publish/subscribe messaging.
*/
export class EventAggregator {

    public eventLookup;
    public messageHandlers;
    public subscriptions: Subscription[] = [];

    constructor() {
        this.eventLookup = {};
        this.messageHandlers = [];
    }

    /**
    * Publishes a message.
    * @param event The event or channel to publish to.
    * @param data The data to publish on the channel.
    */
    public publish(event: string | any, data?: any): void {
        let subscribers;
        let i;

        if (!event) {
            throw new Error('Event was invalid.');
        }

        if (typeof event === 'string') {
            subscribers = this.eventLookup[event];
            if (subscribers) {
                subscribers = subscribers.slice();
                i = subscribers.length;

                try {
                    while (i--) {
                        subscribers[i](data, event);
                    }
                } catch (e) {
                    console.error(e);
                }
            }
        } else {
            subscribers = this.messageHandlers.slice();
            i = subscribers.length;

            try {
                while (i--) {
                    subscribers[i].handle(event);
                }
            } catch (e) {
                console.log(e);
            }
        }
    }

    /**
    * Subscribes to a message channel or message type.
    * @param event The event channel or event data type.
    * @param callback The callback to be invoked when when the specified message is published.
    * @param context The optional subscription context.
    */
    public subscribe(event: string | Function, callback: Function, context?: string): Subscription {

        let handler;
        let subscribers;

        if (!event) {
            throw new Error('Event channel/type was invalid.');
        }

        if (typeof event === 'string') {
            handler = callback;
            subscribers = this.eventLookup[event] || (this.eventLookup[event] = []);
        } else {
            handler = new Handler(event, callback);
            subscribers = this.messageHandlers;
        }

        subscribers.push(handler);

        let subscription = {
            context: context,
            dispose: () => {
                let idx = subscribers.indexOf(handler);
                if (idx !== -1) {
                    subscribers.splice(idx, 1);
                }
            }
        };
        this.subscriptions.push(subscription);

        return subscription;
    }

    /**
     * Disposes the subscriptions matching the context
     * @param context The event context to be used as predicate
     */
    public unsubscribe(context: string) {
        var affected = this.subscriptions.filter(p => p.channel == context);
        affected.forEach(p => p.dispose());
    }

    /**
    * Subscribes to a message channel or message type, then disposes the subscription automatically after the first message is received.
    * @param event The event channel or event data type.
    * @param callback The callback to be invoked when when the specified message is published.
    */
    public subscribeOnce(event: string | Function, callback: Function): Subscription {
        let sub = this.subscribe(event, (a, b) => {
            sub.dispose();
            return callback(a, b);
        });

        return sub;
    }
}