export interface Events<T extends keyof any> {
    topics: Record<T, JQuery.Callbacks>;
    trigger(id: T, ...args: any[]): Events<T>;
    bind(id: T, callback: (...args: any[]) => void, context?: any): Events<T>;
    unbind(id: T, callback?: (...args: any[]) => void): Events<T>;
}
