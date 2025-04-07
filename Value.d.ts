import { Class } from "./Class";

export interface Value<T> extends Class {
	_value: T;
	callbacks: JQuery.Callbacks;
	_dirty: boolean;
	initialize(initial?: T | string, options?: object): void;
	instance(args: T): Value<T> | T;
	get(): T;
	set(to: T): Value<T>;
	_setter(to: T): T;
	setter(callback: (to: T) => T): Value<T>;
	resetSetter(): Value<T>;
	validate(value: T): T;
	bind(...args: Array<JQuery.TypeOrArray<(to: T, from: T) => void>>): Value<T>;
	unbind(
		...args: Array<JQuery.TypeOrArray<(to: T, from: T) => void>>
	): Value<T>;
	link(...args: Array<JQuery.TypeOrArray<(to: T, from: T) => void>>): Value<T>;
	unlink(
		...args: Array<JQuery.TypeOrArray<(to: T, from: T) => void>>
	): Value<T>;
	sync(...args: Array<JQuery.TypeOrArray<(to: T, from: T) => void>>): Value<T>;
	unsync(
		...args: Array<JQuery.TypeOrArray<(to: T, from: T) => void>>
	): Value<T>;

	// Function call signatures
	(): T;
	(args: T): Value<T>;
}

export interface ValueConstructor {
	new <T>(initial?: T | string, options?: object): Value<T>;
	extend<T>(protoProps: object, classProps?: object): ValueConstructor;
}
