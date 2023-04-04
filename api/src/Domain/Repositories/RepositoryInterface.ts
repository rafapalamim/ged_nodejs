import Entity from "../Entities/Entity";

export interface RepositoryInterface<T> {

    create(entity: Entity<T>): Promise<void>;
    update(entity: Entity<T>): Promise<void>;
    findById(id: string): Promise<T>;
    findAll(): Promise<T[]>;
    find(where: string): Promise<T[]>;

}