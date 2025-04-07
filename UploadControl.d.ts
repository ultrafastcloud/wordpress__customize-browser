import { MediaControl, MediaControlConstructor } from "./MediaControl";

export interface UploadControl extends MediaControl {
	success(): void;
	removerVisibility(): void;
}

export interface UploadControlConstructor extends MediaControlConstructor {
	new (id?: string, options?: object): UploadControl;
	extend(protoProps: object, classProps?: object): UploadControlConstructor;
}
