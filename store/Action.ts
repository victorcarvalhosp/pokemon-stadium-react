export interface Action<T, S> {
    type: T,
    payload?: Partial<S>;
}
