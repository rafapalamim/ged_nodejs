import Entity from "../Entity";
import Category from "./Category";
import Extension from "./FileExtension";

type SubCategoryType = {
    name: string,
    categories: string[],
    extensions: string[]
}

export default class SubCategory extends Entity<SubCategoryType>{
    constructor(props: SubCategoryType, id?: string) {
        super(props, id);
        this.validate();
    }

    get name(): string {
        return this.props.name;
    }

    get categories(): string[] {
        return this.props.categories;
    }

    get extensions(): string[] {
        return this.props.extensions;
    }

    addCategory(category: Category): void {

        if (!(category instanceof Category)) {
            throw new Error("Category is not a instance of Category Entity");
        }

        this.props.categories.push(category.id);
    }

    addExtension(extension: Extension): void {

        if (!(extension instanceof Extension)) {
            throw new Error("Extension is not a instance of Extension Entity");
        }

        this.props.extensions.push(extension.id);
    }

    private validate(): void {

        if (this.props.name.length <= 0) {
            throw new Error("Is necessary inform a name for sub category");
        }
    }
}