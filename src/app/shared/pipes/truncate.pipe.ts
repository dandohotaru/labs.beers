import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncate'
})
export class TruncateCharsPipe implements PipeTransform {
    transform(value: string, limit: number = 40, trail: string = '…'): string {
        if (limit < 0) {
            limit *= -1;
            return value.length > limit
                ? trail + value.substring(value.length - limit, value.length)
                : value;
        } else {
            return value.length > limit
                ? value.substring(0, limit) + trail
                : value;
        }
    }
}

@Pipe({
    name: 'words'
})
export class TruncateWordsPipe implements PipeTransform {
    transform(value: string, limit: number = 40, trail: string = '…'): string {
        let result = value;

        if (value) {
            let words = value.split(/\s+/);
            if (words.length > Math.abs(limit)) {
                if (limit < 0) {
                    limit *= -1;
                    result = trail + words.slice(words.length - limit, words.length).join(' ');
                } else {
                    result = words.slice(0, limit).join(' ') + trail;
                }
            }
        }

        return result;
    }
}

