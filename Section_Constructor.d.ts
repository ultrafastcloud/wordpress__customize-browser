import { OuterSectionConstructor } from "./OuterSection";
import { ThemesSectionConstructor } from "./ThemesSection";

export interface Section_Constructor {
	themes: ThemesSectionConstructor;
	outer: OuterSectionConstructor;
}
