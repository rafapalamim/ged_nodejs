import { describe, expect, it } from "vitest";
import FileFormat, { FileFormatEnum } from "./FileFormat";

describe("FileFormat entity test case", () => {

    it("Should be able to create a file format", () => {

        const format = new FileFormat({
            format: FileFormatEnum.RG,
            regex: []
        });

        expect(format).instanceOf(FileFormat);
        expect(format.format).equals(FileFormatEnum.RG);

        format.addRegex("regex");

        expect(format.regexString).toStrictEqual(["regex"]);

        format.addRegex("another");

        expect(format.regexString).toStrictEqual(["regex", "another"]);
        expect(format.regexObject).toStrictEqual([new RegExp("regex"), new RegExp("another")]);

        const format2 = new FileFormat({
            format: FileFormatEnum.CPF,
            regex: ["other"]
        });

        expect(format2.regexString).toStrictEqual(["other"]);

        expect(format2.regexObject).toStrictEqual([new RegExp("other")]);

    });

    it("Should not be able to create a file format with invalid params", () => {

        expect(() => {
            new FileFormat({
                format: "invalid_data",
                regex: []
            });
        }).toThrowError("Format value is invalid");

    });
});