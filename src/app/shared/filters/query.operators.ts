
export function and(first, second) {
    return (p: any) => {
        return first(p) && second(p);
    }
}

export function or(first, second) {
    return (p: any) => {
        return first(p) || second(p);
    }
}