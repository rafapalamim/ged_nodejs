import Entity from "../Entity";
import Extension from "./FileExtension";

export enum HistoricTypesEnum {
    ACCESS = "access",
    DELETE = "delete",
    SIGNATURE = "signature",
}

type HistoricType = {
    action: HistoricTypesEnum,
    user: string,
    ip: string,
    showable: boolean,
    created_at: Date
}

type FileType = {
    document_id: string,
    name: string,
    extension: Extension,
    format_id: string,
    size: number,
    historic: HistoricType[],
    created_at?: Date,
    updated_at?: Date,
    deleted_at?: Date
}

export default class File extends Entity<FileType>
{
    constructor(props: FileType, id?: string) {
        super(props, id);
        // this.validate();
    }

    get documentId(): string {
        return this.props.document_id;
    }

    get name(): string {
        return this.props.name;
    }

    get extension(): Extension {
        return this.props.extension;
    }

    get formatId(): string {
        return this.props.format_id;
    }

    get size(): number {
        return this.props.size;
    }

    get historic(): HistoricType[] {
        return this.props.historic;
    }

}