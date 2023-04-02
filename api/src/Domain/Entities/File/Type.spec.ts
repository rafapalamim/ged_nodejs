import { describe, expect, it } from "vitest";
import Type from "./Type";

describe("Create File entity", () => {

    it("Should be create a type", () => {

        const type = new Type({
            name: "CPF"
        });

        expect(type).toBeInstanceOf(Type);
        expect(type.name).toEqual("CPF");

    });

    it("Should not be able to create a type with empty name", () => {

        expect(() => {
            new Type({
                name: ""
            });
        }).toThrowError("Name is required");

    });

});