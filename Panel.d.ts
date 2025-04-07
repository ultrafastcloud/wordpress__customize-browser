import {
	Container,
	Container_Arguments,
	Container_Params,
	ContainerConstructor,
} from "./Container";
import { Section } from "./Section";

export interface Panel extends Container {
	embed(): void;
	attachEvents(): void;
	sections(): Section[];
	isContextuallyActive(): boolean;
	onChangeExpanded(expanded: boolean, args: Container_Arguments): void;
	renderContent(): void;
}

export interface PanelConstructor extends ContainerConstructor {
	new (id?: string, options?: Container_Params): Panel;
	extend(protoProps: object, classProps?: object): PanelConstructor;
}
