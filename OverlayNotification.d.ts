import { Notification, NotificationConstructor } from "./Notification";

export interface OverlayNotification extends Notification {
	loading: boolean;
	handleEscape(event: JQuery.Event): void;
}

export interface OverlayNotificationConstructor
	extends NotificationConstructor {
	new (code?: string, params?: object): OverlayNotification;
	extend(
		protoProps: object,
		classProps?: object,
	): OverlayNotificationConstructor;
}
