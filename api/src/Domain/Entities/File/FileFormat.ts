import Entity from "../Entity";

export enum FileFormatEnum {
    RG = "rg",
    CPF = "cpf",
    CNPJ = "cnpj"
}

type FileFormatType = {
    format: FileFormatEnum,
    regex: string[]
}

export default class FileFormat extends Entity<FileFormatType>
{
    constructor(props: FileFormatType, id?: string) {
        super(props, id);
        this.validate();
    }

    get format(): string {
        return this.props.format;
    }

    get regexString(): string[] {
        return this.props.regex;
    }

    get regexObject(): RegExp[] {
        return this.props.regex.map((regex) => {
            return new RegExp(regex);
        });
    }

    addRegex(regex: string): void {
        this.props.regex.push(regex);
    }

    private validate(): void {
        if (!Object.values(FileFormatEnum).includes(this.props.format)) {
            throw new Error("Format value is invalid");
        }
    }

}