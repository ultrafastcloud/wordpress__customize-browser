import { Control, ControlConstructor } from "./Control";
import { ImageSelectOptions } from "./CroppedImageControl";
import { Attachment, Cropper, ImageModel } from "./external";

export interface HeaderControl extends Control {
	getInitialHeaderImage(): ImageModel;
	calculateImageSelectOptions(
		attachment: Attachment,
		controller: Cropper,
	): ImageSelectOptions;
	openMedia(event: JQuery.Event): void;
	onSelect(): void;
	onCropped(croppedImage: any): void; // TODO
	onSkippedCrop(selection: any): void; // TODO
	setImageFromURL(
		url: string,
		attachmentId: number,
		width: number,
		height: number,
	): void;
	removeImage(): void;
}

export interface HeaderControlConstructor extends ControlConstructor {
	new (id?: string, options?: object): HeaderControl;
	extend(protoProps: object, classProps?: object): HeaderControlConstructor;
}
