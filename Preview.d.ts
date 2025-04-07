import { Messenger, MessengerConstructor } from "./Messenger";

export interface Preview_Params {
	url: string;
	channel: string;
}

export interface Preview_Data {
	currentUrl: string;
	activePanels: Record<string, boolean>;
	activeSections: Record<string, boolean>;
	activeControls: Record<string, boolean>;
	settingValidities?: Record<string, any>;
}

export interface Preview extends Messenger<any> {
	body: JQuery;
	window: JQuery;

	/**
	 * Initialize the preview.
	 *
	 * @param params - Parameters to configure the preview.
	 * @param options - Extend any instance parameter or method with this object.
	 */
	initialize(params: Preview_Params, options?: object): void;

	/**
	 * Handle link clicks in preview.
	 *
	 * @param event - jQuery event object.
	 */
	handleLinkClick(event: JQuery.ClickEvent): void;

	/**
	 * Handle form submits in preview.
	 *
	 * @param event - jQuery event object.
	 */
	handleFormSubmit(event: JQuery.SubmitEvent): void;

	/**
	 * Get current scheme from URL.
	 */
	scheme: {
		get(): string;
	};

	// Note: origin is inherited from Messenger class as Value<string>
}

export interface PreviewConstructor extends MessengerConstructor {
	new (params: Preview_Params, options?: object): Preview;
	extend(protoProps: object, classProps?: object): PreviewConstructor;
}
