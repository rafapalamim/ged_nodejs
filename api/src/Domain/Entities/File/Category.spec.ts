import { describe, expect, it } from "vitest";
import Category from "./Category";
import Rule, { RulesEnum } from "./Rule";

describe("Category entity test case", () => {

    it("Should be able to create a category", () => {

        const rule1 = new Rule(RulesEnum.MaxFileSizeInMB, [20]);

        const category = new Category({
            name: "Department X",
            rules: [rule1]
        });

        expect(category).instanceOf(Category);

    });

});