import { Class } from "./Class";
import { Control } from "./Control";
import { Control_Constructor } from "./Control_Constructor";
import { Notifications } from "./Notifications";
import { Panel } from "./Panel";
import { Panel_Constructor } from "./Panel_Constructor";
import { Preview, PreviewConstructor } from "./Preview";
import { Previewer } from "./Previewer";
import { Section } from "./Section";
import { Section_Constructor } from "./Section_Constructor";
import { Setting } from "./Setting";
import { Setting_Constructor } from "./Setting_Constructor";
import { Utils } from "./Utils";
import { Values, ValuesConstructor } from "./Values";

export interface DirtyValuesOptions {
    unsaved?: boolean | undefined;
}

export interface RequestChangesetUpdateOptions {
    autosave?: boolean | undefined;
    force?: boolean | undefined;
    title?: string | undefined;
    date?: string | undefined;
}

export interface HandleSettingValiditiesArgs {
    settingValidities: Record<string, any>; // TODO
    focusInvalidControl?: boolean | undefined;
}

export interface Customize extends Values<Setting<any>> {
    _latestRevision: number;
    _lastSavedRevision: number;
    _latestSettingRevision: Record<string, number>;
    // Function call signatures
    (id: string): Setting<any>;
    (id: string, value: any): Setting<any>;

    utils: Utils;
    ensure(element: string | JQuery): JQuery;
    dirtyValues(options?: DirtyValuesOptions): Record<string, any>;
    requestChangesetUpdate(changes?: Record<string, any>, args?: RequestChangesetUpdateOptions): JQuery.Promise<any>;
    get(): Record<string, any>;
    defaultConstructor: Setting<any>;
    control: Values<Control>;
    section: Values<Section>;
    panel: Values<Panel>;
    notifications: Notifications;
    setDocumentTitle(documentTitle: string): void;
    settingConstructor: Setting_Constructor;
    controlConstructor: Control_Constructor;
    panelConstructor: Panel_Constructor;
    sectionConstructor: Section_Constructor;
    _handleSettingValidities(args: HandleSettingValiditiesArgs): void;
    findControlsForSettings(settingIds: readonly string[]): Record<string, Control>;
    reflowPaneContents(): void;
    state: Values<Class>;
    settings: any; // TODO
    l10n: Record<string, string>;
    previewer: Previewer<string>;
    Preview: PreviewConstructor;
    preview?: Preview;
}

export interface CustomizeConstructor extends ValuesConstructor {
    new(): Customize;
    extend(protoProps: object, classProps?: object): CustomizeConstructor;
}
