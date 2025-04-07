import { Class } from "./Class";
import { Events } from "./Events";

export interface Values<T> extends Class, Events<string> {
	defaultConstructor: T;
	_value: Record<string, T>;
	_deferreds: Record<string, JQuery.Deferred<any>>;
	initialize(options?: object): void;
	value(id: string): T;
	has(id: string): boolean;
	add(item: string | T, itemObject?: T): T;
	create(id: string, value: object): T;
	each<U>(
		callback: (context: U, obj: T, key: string) => void,
		context?: U,
	): void;
	remove(id: string): void;
	when(
		...args: Array<string | ((...values: T[]) => void)>
	): JQuery.Promise<any>;
	_change(): void;

	// Function call signatures
	(arg: string): T;
	(...args: Array<string | ((...values: T[]) => void)>): JQuery.Promise<any>;
}

export interface ValuesConstructor {
	new <T>(options?: object): Values<T>;
	extend<T>(protoProps: object, classProps?: object): ValuesConstructor;
}
