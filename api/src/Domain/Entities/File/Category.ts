import Entity from "../Entity";
import Rule from "./Rule";

type CategoryType = {
    name: string,
    rules: Rule[],
    created_at?: Date,
    updated_at?: Date,
    deleted_at?: Date
}

export default class Category extends Entity<CategoryType>
{
    constructor(props: CategoryType, id?: string) {
        super(props, id);
        this.validate();
    }

    get name(): string {
        return this.props.name;
    }

    get rules(): Rule[] {
        return this.props.rules;
    }

    addRule(rule: Rule): void {
        this.props.rules.push(rule);
    }

    private validate(): void {
        if (this.props.name.length === 0) {
            throw new Error("Is necessary inform a name for category");
        }
    }
}