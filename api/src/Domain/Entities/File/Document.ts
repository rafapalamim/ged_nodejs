import Entity from "../Entity";
import Category from "./Category";
import File from "./File";
import SubCategory from "./SubCategory";

type DocumentType = {
    category: Category,
    sub_category: SubCategory,
    files: File[],
    created_at?: Date,
    updated_at?: Date,
    deleted_at?: Date
}

export default class Document extends Entity<DocumentType> {

    constructor(props: DocumentType, id?: string) {
        super(props, id);
    }

    get category(): Category {
        return this.props.category;
    }

    get subCategory(): SubCategory {
        return this.props.sub_category;
    }

    get files(): File[] {
        return this.props.files;
    }

}