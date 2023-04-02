import { describe, expect, it } from "vitest";
import File from "./File";
import Type from "./Type";

describe("Create File entity", () => {

    it("Should be create a file", () => {

        const type = new Type({ name: "Protocolo" });

        const file = new File({
            name: "text.png",
            ext: "png",
            mimetype: "image/png",
            identifiedByType: type,
            size: 1500,
            metadata: []
        });

        expect(file).toBeInstanceOf(File);
        expect(file.ext).toEqual("png");
        expect(file.mimetype).toEqual("image/png");
        expect(file.size).toEqual(1500);
        expect(file.type).toBeInstanceOf(Type);
        expect(file.type.name).toEqual("Protocolo");
    });

    it("Should not be able to create a file with empty values", () => {

        const type = new Type({ name: "Protocolo" });

        expect(() => {
            new File({
                name: "",
                ext: "png",
                mimetype: "image/png",
                identifiedByType: type,
                size: 1500,
                metadata: []
            });
        }).toThrowError("Name is required");

        expect(() => {
            new File({
                name: "test.txt",
                ext: "",
                mimetype: "image/png",
                identifiedByType: type,
                size: 1500,
                metadata: []
            });
        }).toThrowError("Extension is required");

        expect(() => {
            new File({
                name: "test.txt",
                ext: "png",
                mimetype: "",
                identifiedByType: type,
                size: 1500,
                metadata: []
            });
        }).toThrowError("Mimetype is required");

        expect(() => {
            new File({
                name: "test.txt",
                ext: "png",
                mimetype: "image/png",
                identifiedByType: type,
                size: 0,
                metadata: []
            });
        }).toThrowError("Size needs to be greater than zero");
    });

});