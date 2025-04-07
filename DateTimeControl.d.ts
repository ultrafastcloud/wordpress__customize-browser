import { Control, ControlConstructor } from "./Control";

export interface DateTime {
    year: string;
    month: string;
    day: string;
    hour: string;
    minute: string;
    second: string;
}

export interface DateTimeControl extends Control {
    parseDateTime(datetime: string): DateTime | null;
    validateInputs(): boolean;
    updateDaysForMonth(): void;
    populateSetting(): boolean;
    convertInputDateToString(): string;
    isFutureDate(): boolean;
    convertHourToTwentyFourHourFormat(hourInTwelveHourFormat: string, meridian: "am" | "pm"): string;
    populateDateInputs(): boolean;
    toggleFutureDateNotification(notify: boolean): DateTimeControl;
}

export interface DateTimeControlConstructor extends ControlConstructor {
    new(id?: string, options?: object): DateTimeControl;
    extend(protoProps: object, classProps?: object): DateTimeControlConstructor;
}
