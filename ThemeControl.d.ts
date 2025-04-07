import { Control, ControlConstructor } from "./Control";

export interface ThemeControl extends Control {
	touchDrag: boolean;
	screenshotRendered: boolean;
	filter(terms: string | readonly string[]): boolean;
	rerenderAsInstalled(installed: boolean): void;
}

export interface ThemeControlConstructor extends ControlConstructor {
	new (id?: string, options?: object): ThemeControl;
	extend(protoProps: object, classProps?: object): ThemeControlConstructor;
}
