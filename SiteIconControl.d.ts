import {
	CroppedImageControl,
	CroppedImageControlConstructor,
} from "./CroppedImageControl";

export interface SiteIconControl extends CroppedImageControl {
	removeFile(event: JQuery.Event): void;
}

export interface SiteIconControlConstructor
	extends CroppedImageControlConstructor {
	new (id?: string, options?: object): SiteIconControl;
	extend(protoProps: object, classProps?: object): SiteIconControlConstructor;
}
