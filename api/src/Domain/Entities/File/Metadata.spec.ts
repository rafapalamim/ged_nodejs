import { describe, expect, it } from "vitest";
import Metadata from "./Metadata";

describe("Create Metadata VO", () => {

    it("Should be create a metadata value object", () => {

        const metadata = new Metadata("document", "12345678910");

        expect(metadata).toBeInstanceOf(Metadata);
        expect(metadata.name).toEqual("document");
        expect(metadata.value).toEqual("12345678910");

    });

    it("Should not be able to create a metadata with empty name and/or value", () => {

        expect(() => {
            new Metadata("", "");
        }).toThrowError("Name is required");

        expect(() => {
            new Metadata("", "12345678910");
        }).toThrowError("Name is required");

        expect(() => {
            new Metadata("document", "");
        }).toThrowError("Value is required");

    });

});