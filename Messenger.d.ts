import { Class } from "./Class";
import { Events } from "./Events";
import { Value } from "./Value";

export interface Messenger_Params {
	url: string;
	targetWindow: Window;
	channel: string;
}

export interface Messenger<T> extends Class, Events<string> {
	channel: Value<string>;
	url: Value<string>;
	origin: Value<string>;
	targetWidow: Value<Window | null>;
	add(key: string, initial: T, options?: object): Value<T>;
	initialize(params: Messenger_Params, options?: object): void;
	destroy(): void;
	receive(event?: JQuery.Event): void;
	send(id: string, data: object | undefined): void;
}

export interface MessengerConstructor {
	new <T>(params: Messenger_Params, options?: object): Messenger<T>;
	extend<T>(protoProps: object, classProps?: object): MessengerConstructor;
}
