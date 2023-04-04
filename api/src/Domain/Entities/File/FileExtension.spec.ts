import { describe, expect, it } from "vitest";
import FileExtension, { FileExtensionMimeTypeEnum, FileExtensionTypeEnum } from "./FileExtension";

describe("FileExtension entity test case", () => {

    it("Should be able to create a file extension", () => {

        const ext = new FileExtension({
            type: FileExtensionTypeEnum.PDF,
            mimeType: FileExtensionMimeTypeEnum.PDF
        });

        expect(ext).instanceOf(FileExtension);
        expect(ext.properties).toStrictEqual({
            type: FileExtensionTypeEnum.PDF,
            mimeType: FileExtensionMimeTypeEnum.PDF
        });

    });

    it("Should not be able to create a file extension with wrong params", () => {
        expect(() => {
            new FileExtension({
                type: "abc",
                mimeType: FileExtensionMimeTypeEnum.PDF
            });
        }).toThrowError("abc is not a valid extension permitted");

        expect(() => {
            new FileExtension({
                type: FileExtensionTypeEnum.PDF,
                mimeType: "wrong"
            });
        }).toThrowError("wrong is not a valid mime type permitted");
    });

});