import { Control, ControlConstructor } from "./Control";

export interface ColorControl extends Control {}

export interface ColorControlConstructor extends ControlConstructor {
	new (id?: string, options?: object): ColorControl;
	extend(protoProps: object, classProps?: object): ColorControlConstructor;
}
