import { Panel, PanelConstructor } from "./Panel";

export interface ThemesPanel extends Panel {
	installingThemes: string[];
	canSwitchTheme(slug?: string): boolean;
	installTheme(event: JQuery.Event): JQuery.Promise<any>;
	loadThemePreview(themeId: string): JQuery.Promise<any>;
	updateTheme(event: JQuery.Event): void;
	deleteTheme(event: JQuery.Event): void;
}

export interface ThemesPanelConstructor extends PanelConstructor {
	new (id?: string, options?: object): ThemesPanel;
	extend(protoProps: object, classProps?: object): ThemesPanelConstructor;
}
