import { Control, ControlConstructor } from "./Control";

export interface MediaControl extends Control {
    pausePlayer(): void;
    cleanupPlayer(): void;
    openFrame(event: JQuery.Event): void;
    initFrame(): void;
    select(): void;
    restoreDefault(event: JQuery.Event): void;
    removeFile(event: JQuery.Event): void;
}

export interface MediaControlConstructor extends ControlConstructor {
    new(id?: string, options?: object): MediaControl;
    extend(protoProps: object, classProps?: object): MediaControlConstructor;
}
