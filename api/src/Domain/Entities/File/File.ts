import Entity from "../Entity";
import Metadata from "./Metadata";
import Type from "./Type";

type FileType = {
    name: string,
    ext: string,
    mimetype: string,
    size: number,
    identifiedByType: Type,
    identifiedByValue?: string,
    metadata: Array<Metadata> | [],
    created_at?: Date,
    updated_at?: Date,
    deleted_at?: Date
}

export default class File extends Entity<FileType> {

    constructor(props: FileType, id?: string) {
        super(props, id);
        this.validate();
    }

    get name(): string {
        return this.props.name;
    }

    get ext(): string {
        return this.props.ext;
    }

    get mimetype(): string {
        return this.props.mimetype;
    }

    get size(): number {
        return this.props.size;
    }

    get metadata(): Array<Metadata> {
        return this.props.metadata;
    }

    get type(): Type {
        return this.props.identifiedByType;
    }

    private validate() {
        if (!this.props.name) {
            throw new Error("Name is required");
        }

        if (!this.props.ext) {
            throw new Error("Extension is required");
        }

        if (!this.props.mimetype) {
            throw new Error("Mimetype is required");
        }

        if (this.props.size <= 0) {
            throw new Error("Size needs to be greater than zero");
        }
    }

}