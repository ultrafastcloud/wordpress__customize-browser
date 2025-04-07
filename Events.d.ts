export class Events<T extends keyof any> {
    // TODO: class with statics instead?
    topics: Record<T, JQuery.Callbacks>;
    trigger(id: T, ...args: any[]): this;
    bind(id: T, callback: (...args: any[]) => void, context?: any): this;
    unbind(id: T, callback?: (...args: any[]) => void): this;
}
