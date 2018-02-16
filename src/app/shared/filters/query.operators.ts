
type Predicate = (p) => boolean;

export function and(left: Predicate, right: Predicate): Predicate {
    return (record: any) => {
        return left(record) && right(record);
    }
}

export function or(left: Predicate, right: Predicate): Predicate {
    return (record: any) => {
        return left(record) || right(record);
    }
}