import { Container, Container_Arguments, Container_Params, ContainerConstructor } from "./Container";
import { Control } from "./Control";
import { Value } from "./Value";

export interface Section_Params extends Container_Params {
    panel?: string | null | undefined;
    customizeAction?: string | undefined;
}

export interface Section extends Container {
    containerParent: string;
    containerPaneParent: string;
    id: string;
    panel: Value<string>;
    initialize(id?: string, options?: Section_Params): void;
    embed(): void;
    attachEvents(): void;
    isContextuallyActive(): boolean;
    controls(): Control[];
    onChangeExpanded(expanded: boolean, args: Container_Arguments): void;
}

export interface SectionConstructor extends ContainerConstructor {
    new(id?: string, options?: Section_Params): Section;
    extend(protoProps: object, classProps?: object): SectionConstructor;
}
