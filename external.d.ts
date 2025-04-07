// TODO: Resolve these, ideally replace with external typings

// wp.media.model.Attachment
export interface Attachment {
	get(_: string): any; // TODO
}

// wp.media.controller.Cropper
export interface Cropper {
	get(_: string): any; // TODO
	set(_1: string, _2: any): void; // TODO
}

// wp.customize.HeaderTool.ImageModel
export interface ImageModel {
	// Properties and methods would go here
}

export interface ImageModelConstructor {
	new (_: { header: any; choice: any }): ImageModel;
}

export interface Theme {
	_canInstall: boolean;
	_filesystemCredentialsNeeded: boolean;
	id: string;
	name: string;
}
