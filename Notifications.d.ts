import { Notification } from "./Notification";
import { Values, ValuesConstructor } from "./Values";

export interface Notifications_Options {
    container?: JQuery | undefined;
    alt?: boolean | undefined;
}

export interface Notifications_Get_Options {
    sort?: boolean | undefined;
}

export interface Notifications extends Values<Notification> {
    alt: boolean;
    defaultConstructor: Notification;
    initialize(options: Notifications_Options): void;
    count(): number;
    add(notification: string | Notification, notificationObject?: Notification): Notification;
    remove(code: string): Notification;
    get(args: Notifications_Get_Options): Notification[];
    render(): void;
    constrainFocus(event: JQuery.Event): void;
}

export interface NotificationsConstructor extends ValuesConstructor {
    new(options: Notifications_Options): Notifications;
    extend(protoProps: object, classProps?: object): NotificationsConstructor;
}
