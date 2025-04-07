export interface Class {
    initialize(...args: any[]): void;
    extended(constructor: object): boolean;
}

export interface ClassConstructor {
    applicator: object;
    extend(protoProps: object, classProps: object): ClassConstructor;
    new(applicator: object, argsArray: object, options?: object): Class;
}

export type ClassExtendable = Class & {
    constructor: ClassConstructor;
};
