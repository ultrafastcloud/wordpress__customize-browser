import { Messenger, Messenger_Params, MessengerConstructor } from "./Messenger";

export interface PreviewFrame_Params extends Messenger_Params {
	container: any; // TODO
	previewUrl: any; // TODO
	query: any; // TODO
}

export interface PreviewFrame<T> extends Messenger<T> {
	sensitivity: number | null;
	initialize(params: PreviewFrame_Params, options?: object): void;
	run(deferred: JQuery.Deferred<any>): void;
	login(deferred: JQuery.Deferred<any>): void;
}

export interface PreviewFrameConstructor extends MessengerConstructor {
	uuid(): string;
	new <T>(params: PreviewFrame_Params, options?: object): PreviewFrame<T>;
	extend(protoProps: object, classProps?: object): PreviewFrameConstructor;
}
