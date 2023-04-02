export default class Metadata {

    constructor(
        private _name: string,
        private _value: string
    ) {
        this.validate();
    }

    get name(): string {
        return this._name;
    }

    get value(): string {
        return this._value;
    }

    private validate() {
        if (!this.name) {
            throw new Error("Name is required");
        }

        if (!this.value) {
            throw new Error("Value is required");
        }
    }

}