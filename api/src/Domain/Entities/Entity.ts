import crypto from "crypto";

export default abstract class Entity<T>{

    protected _id: string;
    protected props: T;

    constructor(props: T, id?: string) {
        this.props = props;

        if (!id) {
            this._id = crypto.randomUUID();
        } else {
            this._id = id;
        }
    }

    get properties(): T {
        return this.props;
    }

    get id(): string {
        return this._id;
    }
}