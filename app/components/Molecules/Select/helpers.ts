import { getProduct, Product } from "@/defi";
import { Option } from "./types";

export const filterOptions = (
  options: Option[],
  selectedOption: any,
  filterText: string
) => {
  const matcher = (value: any) =>
    value.toLowerCase().includes(filterText.toLowerCase());

  const filterFn = (option: Option) => {
    if (option.value === selectedOption) {
      return true;
    }

    return option.productIds
      ? option.productIds
          .map(getProduct)
          .some(
            (product: Product) =>
              matcher(product.symbol) ||
              matcher(product.name) ||
              matcher(option.value)
          )
      : option.assets?.some(
          (asset) => matcher(asset.label) || matcher(option.value)
        );
  };

  return options.filter(filterFn);
};
