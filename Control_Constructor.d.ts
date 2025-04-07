import { BackgroundControlConstructor } from "./BackgroundControl";
import { BackgroundPositionControlConstructor } from "./BackgroundPositionControl";
import { CodeEditorControlConstructor } from "./CodeEditorControl";
import { ColorControlConstructor } from "./ColorControl";
import { CroppedImageControlConstructor } from "./CroppedImageControl";
import { DateTimeControlConstructor } from "./DateTimeControl";
import { HeaderControlConstructor } from "./HeaderControl";
import { ImageControlConstructor } from "./ImageControl";
import { MediaControlConstructor } from "./MediaControl";
import { SiteIconControlConstructor } from "./SiteIconControl";
import { ThemeControlConstructor } from "./ThemeControl";
import { UploadControlConstructor } from "./UploadControl";

export interface Control_Constructor {
	color: ColorControlConstructor;
	media: MediaControlConstructor;
	upload: UploadControlConstructor;
	image: ImageControlConstructor;
	cropped_image: CroppedImageControlConstructor;
	site_icon: SiteIconControlConstructor;
	header: HeaderControlConstructor;
	background: BackgroundControlConstructor;
	background_position: BackgroundPositionControlConstructor;
	theme: ThemeControlConstructor;
	date_time: DateTimeControlConstructor;
	code_editor: CodeEditorControlConstructor;
}
