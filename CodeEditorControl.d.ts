import { Control, ControlConstructor } from "./Control";

export interface CodeEditorControl extends Control {
    initEditor(): void;
    focus(params: any): void; // TODO
    initSyntaxHighlightingEditor(codeEditorSettings: any): void; // TODO
    onTabNext(): void;
    onTabPrevious(): void;
    onUpdateErrorNotice(errorAnnotations: readonly any[]): void; // TODO
    initPlainTextareaEditor(): void;
}

export interface CodeEditorControlConstructor extends ControlConstructor {
    new(id?: string, options?: object): CodeEditorControl;
    extend(protoProps: object, classProps?: object): CodeEditorControlConstructor;
}
