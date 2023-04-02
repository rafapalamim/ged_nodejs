import Entity from "../Entities/Entity";

export interface Repository<T> {

    create(entity: Entity<T>): Promise<void>;
    update(entity: Entity<T>): Promise<void>;

}