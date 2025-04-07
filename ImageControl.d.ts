import { UploadControl, UploadControlConstructor } from "./UploadControl";

export interface ImageControl extends UploadControl {
	thumbnailSrc(): void;
}

export interface ImageControlConstructor extends UploadControlConstructor {
	new (id?: string, options?: object): ImageControl;
	extend(protoProps: object, classProps?: object): ImageControlConstructor;
}
