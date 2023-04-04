import Entity from "../Entity";

export enum FileExtensionTypeEnum {
    PDF = "pdf",
    JPG = "jpg",
    PNG = "png",
    JPEG = "jpeg"
}

export enum FileExtensionMimeTypeEnum {
    PDF = "application/pdf",
    JPG = "image/jpg",
    PNG = "image/png",
    JPEG = "image/jpeg"
}

type ExtensionType = {
    type: FileExtensionTypeEnum,
    mimeType: FileExtensionMimeTypeEnum
}

export default class FileExtension extends Entity<ExtensionType>
{
    constructor(props: ExtensionType, id?: string) {
        super(props, id);
        this.validate();
    }

    get type(): string {
        return this.props.type;
    }

    get mimeType(): string {
        return this.props.mimeType;
    }

    private validate(): void {
        if (!Object.values(FileExtensionTypeEnum).includes(this.props.type)) {
            throw new Error(`${this.props.type} is not a valid extension permitted`);
        }

        if (!Object.values(FileExtensionMimeTypeEnum).includes(this.props.mimeType)) {
            throw new Error(`${this.props.mimeType} is not a valid mime type permitted`);
        }
    }
}