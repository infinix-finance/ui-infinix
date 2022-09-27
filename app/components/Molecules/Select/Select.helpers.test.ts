import { TokenId } from "@/defi";
import { filterOptions, findText } from "./Select.helpers";
import { Option } from "./Select.types";

const assetOptions: Option[] = [
  {
    value: "item1",
    assets: [{ label: "Item 1" }],
  },
  {
    value: "item2",
    assets: [{ label: "Item 2 " }],
  },
  {
    value: "item3",
    assets: [{ label: "Item 3 " }],
  },
  {
    value: "item4",
    assets: [{ label: "Item 4 " }],
  },
];

const productOptions: Option[] = [
  {
    value: "item1",
    productIds: [TokenId.AVAX],
  },
  {
    value: "item2",
    productIds: [TokenId.USDC],
  },
  {
    value: "item3",
    productIds: [TokenId.ETH, TokenId.FTM],
  },
  {
    value: "item4",
    productIds: [TokenId.KSM],
  },
];

describe("Select helpers", () => {
  describe("filterOptions", () => {
    describe("assets provided", () => {
      test("Should return all values when no filter text is provided", () => {
        const filteredOptions = filterOptions(assetOptions, "", "item1");

        expect(filteredOptions).toHaveLength(4);
      });

      test("Should return all values when 'Item' filter text is applied", () => {
        const filteredOptions = filterOptions(assetOptions, "Item", "item1");

        expect(filteredOptions).toHaveLength(4);
      });

      test("Should return 2 values when 'Item 3' filter text applied", () => {
        const filteredOptions = filterOptions(assetOptions, "Item 3", "item1");

        expect(filteredOptions).toHaveLength(2);
      });

      test("Should return 2 values when 'item3' filter text applied", () => {
        const filteredOptions = filterOptions(assetOptions, "Item 3", "item1");

        expect(filteredOptions).toHaveLength(2);
      });

      test("Should return 1 value when 'Nonexistent Item' filter text applied", () => {
        const filteredOptions = filterOptions(
          assetOptions,
          "Nonexistent Item",
          "item1"
        );

        expect(filteredOptions).toHaveLength(1);
      });
    });

    describe("products provided", () => {
      test("Should return all values when no filter text is provided", () => {
        const filteredOptions = filterOptions(productOptions, "", "item1");

        expect(filteredOptions).toHaveLength(4);
      });

      test("Should return 2 values when 'USDC' filter text is applied", () => {
        const filteredOptions = filterOptions(productOptions, "USDC", "item1");

        expect(filteredOptions).toHaveLength(2);
      });

      test("Should return 2 values when 'FTM' or 'ETH' filter text is applied", () => {
        let filteredOptions = filterOptions(productOptions, "FTM", "item1");
        expect(filteredOptions).toHaveLength(2);

        filteredOptions = filterOptions(productOptions, "ETH", "item1");
        expect(filteredOptions).toHaveLength(2);
      });

      test("Should return 1 value when 'Nonexistent Item' filter text applied", () => {
        const filteredOptions = filterOptions(
          productOptions,
          "Nonexistent Item",
          "item1"
        );

        expect(filteredOptions).toHaveLength(1);
      });
    });
  });

  describe("findText", () => {
    describe("assets provided", () => {
      test("Should return true for when no filter text is provided", () => {
        const result = findText(assetOptions, "");

        expect(result).toBe(true);
      });

      test("Should return true when 'Item 3' filter text applied", () => {
        const result = findText(assetOptions, "Item 3");

        expect(result).toBe(true);
      });

      test("Should return true when 'item3' filter text applied", () => {
        const result = findText(assetOptions, "item3");

        expect(result).toBe(true);
      });

      test("Should return false when'Nonexistent Item' filter text applied", () => {
        const result = findText(assetOptions, "Nonexistent Item");

        expect(result).toBe(false);
      });
    });

    describe("products provided", () => {
      test("Should return true when no filter text is provided", () => {
        const result = findText(productOptions, "");

        expect(result).toBe(true);
      });

      test("Should return true when 'USDC' filter text is applied", () => {
        const result = findText(productOptions, "USDC");

        expect(result).toBe(true);
      });

      test("Should return 2 values when 'FTM' or 'ETH' filter text is applied", () => {
        let result = findText(productOptions, "FTM");
        expect(result).toBe(true);

        result = findText(productOptions, "ETH");
        expect(result).toBe(true);
      });

      test("Should return false when 'Nonexistent Item' filter text applied", () => {
        const result = findText(productOptions, "Nonexistent Item");

        expect(result).toBe(false);
      });
    });
  });
});
