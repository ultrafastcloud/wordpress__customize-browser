import { Class, ClassConstructor } from "./Class";

export interface Notification_Params {
	message: string;
	type?: string | undefined;
	setting?: string | undefined;
	template?: ((data: Notification) => void) | undefined;
	templateId?: string | undefined;
	containerClasses?: string | undefined;
	dismissible?: boolean | undefined;
}

export interface Notification extends Class {
	code: string;
	template: null | ((data: Notification) => void);
	templateId: string;
	containerClasses: string;
	initialize(code?: string, params?: Notification_Params): void;
	render(): JQuery;
}

export interface NotificationConstructor extends ClassConstructor {
	new (code?: string, params?: Notification_Params): Notification;
	extend(protoProps: object, classProps?: object): NotificationConstructor;
}
