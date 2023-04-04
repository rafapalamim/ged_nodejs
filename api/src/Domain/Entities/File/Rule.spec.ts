import { describe, expect, it } from "vitest";
import Rule, { RulesEnum } from "./Rule";

describe("Rule VO test case", () => {

    it("Should be able to create a valid rule", () => {
        const rule = new Rule(RulesEnum.MaxFileSizeInMB, "20");
        expect(rule).instanceOf(Rule);
    });

    it("Should not be able to create a invalid rule", () => {
        expect(() => {
            new Rule(RulesEnum.OnlyExtensions, "");
        }).toThrow("Inform a value for rule");

        expect(() => {
            new Rule("invalid_rule", "invalid_data");
        }).toThrow("'invalid_rule' is a invalid rule");
    });

});