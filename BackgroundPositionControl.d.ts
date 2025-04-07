import { Control, ControlConstructor } from "./Control";

export interface BackgroundPositionControl extends Control {}

export interface BackgroundPositionControlConstructor extends ControlConstructor {
    new(id?: string, options?: object): BackgroundPositionControl;
    extend(protoProps: object, classProps?: object): BackgroundPositionControlConstructor;
}
