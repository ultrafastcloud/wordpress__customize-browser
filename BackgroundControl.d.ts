import { UploadControl, UploadControlConstructor } from "./UploadControl";

export interface BackgroundControl extends UploadControl {
    select(): void;
}

export interface BackgroundControlConstructor extends UploadControlConstructor {
    new(id?: string, options?: object): BackgroundControl;
    extend(protoProps: object, classProps?: object): BackgroundControlConstructor;
}
