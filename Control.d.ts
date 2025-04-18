import { Class } from "./Class";
import { Container_Arguments, Container_Deferred } from "./Container";
import { Notifications } from "./Notifications";
import { Setting } from "./Setting";
import { Value } from "./Value";

export type Control_Settings = (
	| Record<string, Setting<any> | Value<any>>
	| Array<Setting<any> | Value<any>>
) & {
	default?: string | Setting<any> | undefined;
};

export interface Control_Params {
	label: string;
	description: string;
	active: boolean;
	priority: number;
	type: any;
	content?: string | undefined;
	templateId?: string | undefined;
	section: string;
	setting?: string | Setting<any> | undefined;
	settings: Control_Settings;
	instanceNumber?: number | undefined;
	params?: Control_Params | undefined;
}

export interface Control extends Class {
	defaultActiveArguments: Container_Arguments;
	defaults: Control_Params;
	params: Control_Params;
	id: string;
	selector: string;
	container: JQuery;
	templateSelector: string;
	deferred: Container_Deferred;
	section: Value<string>;
	priority: Value<number>;
	active: Value<boolean>;
	activeArgumentsQueue: Container_Arguments[];
	notifications: Notifications;
	elements: Element[];
	settings: Control_Settings;
	initialize(id?: string, options?: Control_Params): void;
	linkElements(): void;
	embed(): void;
	ready(): void;
	getNotificationsContainerElement(): JQuery;
	setupNotifications(): void;
	renderNotifications(): void;
	expand(params: Container_Arguments): void;
	focus(params?: any): void; // TODO
	onChangeActive(active: boolean, args: Container_Arguments): void;
	toggle(active: boolean): void;
	activate(params: Container_Arguments): boolean;
	deactivate(params: Container_Arguments): boolean;
	_toggleActive(active: boolean, params: Container_Arguments): boolean;
	dropdownInit(): void;
	renderContent(): void;
	addNewPage(): void;
}

export interface ControlConstructor {
	instanceCounter?: number | undefined;
	new (id?: string, options?: Control_Params): Control;
	extend(protoProps: object, classProps?: object): ControlConstructor;
}
