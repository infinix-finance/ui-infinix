import { TokenId } from "@/defi";
import { filterOptions } from "./Select.helpers";
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
    productIds: [TokenId.avax],
  },
  {
    value: "item2",
    productIds: [TokenId.usdc],
  },
  {
    value: "item3",
    productIds: [TokenId.eth, TokenId.ftm],
  },
  {
    value: "item4",
    productIds: [TokenId.ksm],
  },
];

describe("Select helpers", () => {
  describe("filterOptions", () => {
    describe("assets provided", () => {
      test("Should return all values when no filter text is provided", () => {
        const filteredOptions = filterOptions(assetOptions, "item1", "");

        expect(filteredOptions).toHaveLength(4);
      });

      test("Should return all values when 'Item' filter text is applied", () => {
        const filteredOptions = filterOptions(assetOptions, "item1", "Item");

        expect(filteredOptions).toHaveLength(4);
      });

      test("Should return 2 values when 'Item 3' filter text applied", () => {
        const filteredOptions = filterOptions(assetOptions, "item1", "Item 3");

        expect(filteredOptions).toHaveLength(2);
      });

      test("Should return 2 values when 'item3' filter text applied", () => {
        const filteredOptions = filterOptions(assetOptions, "item1", "Item 3");

        expect(filteredOptions).toHaveLength(2);
      });

      test("Should return 1 value when 'Nonexistent Item' filter text applied", () => {
        const filteredOptions = filterOptions(
          assetOptions,
          "item1",
          "Nonexistent Item"
        );

        expect(filteredOptions).toHaveLength(1);
      });
    });

    describe("products provided", () => {
      test("Should return all values when no filter text is provided", () => {
        const filteredOptions = filterOptions(productOptions, "item1", "");

        expect(filteredOptions).toHaveLength(4);
      });

      test("Should return 2 values when 'USDC' filter text is applied", () => {
        const filteredOptions = filterOptions(productOptions, "item1", "USDC");

        expect(filteredOptions).toHaveLength(2);
      });

      test("Should return 2 values when 'FTM' or 'ETH' filter text is applied", () => {
        let filteredOptions = filterOptions(productOptions, "item1", "FTM");
        expect(filteredOptions).toHaveLength(2);

        filteredOptions = filterOptions(productOptions, "item1", "ETH");
        expect(filteredOptions).toHaveLength(2);
      });

      test("Should return 1 value when 'Nonexistent Item' filter text applied", () => {
        const filteredOptions = filterOptions(
          productOptions,
          "item1",
          "Nonexistent Item"
        );

        expect(filteredOptions).toHaveLength(1);
      });
    });
  });
});
