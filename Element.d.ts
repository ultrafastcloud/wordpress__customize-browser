import { Value } from "./Value";

export interface Element_Synchronizer_Method<T> {
	update(to: T | ((this: HTMLElement, index: number, value: T) => T)): void;
	refresh(): T;
}

export interface Element_Synchronizer {
	html: Element_Synchronizer_Method<string>;
	val: Element_Synchronizer_Method<string>;
	checkbox: Element_Synchronizer_Method<boolean>;
	radio: Element_Synchronizer_Method<boolean>;
}

export interface Element extends Value<string> {
	element: JQuery;
	events: string;
	_value: any;
	initialize(element?: string | JQuery, options?: object): void;
	update(to?: string | JQuery): void;
	refresh(): void;
	find(selector: any): JQuery;
}

export interface ElementConstructor {
	synchronizer: Element_Synchronizer;
	new (element?: string | JQuery, options?: object): Element;
	extend(protoProps: object, classProps?: object): ElementConstructor;
}
