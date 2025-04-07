import { Control, ControlConstructor } from "./Control";

export interface PreviewLinkControl extends Control {
	updatePreviewLink(): void;
	toggleSaveNotification(notify: boolean): void;
}

export interface PreviewLinkControlConstructor extends ControlConstructor {
	new (id?: string, options?: object): PreviewLinkControl;
	extend(
		protoProps: object,
		classProps?: object,
	): PreviewLinkControlConstructor;
}
