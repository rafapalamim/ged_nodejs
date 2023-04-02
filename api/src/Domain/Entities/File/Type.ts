import Entity from "../Entity";

type TypeType = {
    name: string,
    created_at?: Date
}

export default class Type extends Entity<TypeType> {

    constructor(props: TypeType, id?: string) {
        super(props, id);
        this.validate();
    }

    get name(): string {
        return this.props.name;
    }

    private validate() {
        if (!this.props.name) {
            throw new Error("Name is required");
        }
    }

}