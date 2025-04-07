import { Section, Section_Params, SectionConstructor } from "./Section";

export interface OuterSection extends Section {
    initialize(id?: string, options?: Section_Params): void;
}

export interface OuterSectionConstructor extends SectionConstructor {
    new(id?: string, options?: Section_Params): OuterSection;
    extend(protoProps: object, classProps?: object): OuterSectionConstructor;
}
