import { Control } from "./Control";
import { Previewer } from "./Previewer";
import { Value } from "./Value";

export interface Setting_Options {
	transport: string;
	dirty: boolean;
	previewer: Previewer<string>;
}

export interface Setting<T> extends Value<T> {
	defaults: Setting_Options;
	initialize(
		id?: string,
		value?: any,
		options?: Partial<Setting_Options>,
	): void;
	preview(): void;
	findControls(): Control[];
}

export interface SettingConstructor {
	new <T>(
		id?: string,
		value?: any,
		options?: Partial<Setting_Options>,
	): Setting<T>;
	extend<T>(protoProps: object, classProps?: object): SettingConstructor;
}
