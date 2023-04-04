export enum RulesEnum {
    MaxFileSizeInMB = "MAX_FILE_SIZE_MB",
    OnlyExtensions = "ONLY_EXTENSIONS"
}

export default class Rule {

    constructor(
        private _rule: RulesEnum,
        private _value: string,
        private _created_at?: Date,
        private _updated_at?: Date | null,
        private _deleted_at?: Date | null
    ) {
        if (!this._created_at) {
            this._created_at = new Date();
            this.updateRule();
        }

        this.validate();
    }

    get rule(): RulesEnum {
        return this._rule;
    }

    get value(): string {
        return this._value;
    }

    validate(): void {
        if (!Object.values(RulesEnum).includes(this._rule)) {
            throw new Error(`'${this._rule}' is a invalid rule`);
        }

        if (this._value.length <= 0) {
            throw new Error("Inform a value for rule");
        }
    }

    disableRule(): void {
        this._deleted_at = new Date();
        this.updateRule();
    }

    enableRule(): void {
        this._deleted_at = null;
        this.updateRule();
    }

    private updateRule(): void {
        this._updated_at = new Date();
    }

}