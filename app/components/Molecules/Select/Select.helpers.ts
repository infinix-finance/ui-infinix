import { getProduct, Product } from "@/defi";
import { Option } from "./Select.types";

export const filterOptions = (
  options: Option[],
  filterText: string,
  selectedOption?: any
) => {
  const matcher = (value: any) =>
    value.toLowerCase().includes(filterText.toLowerCase());

  const filterFn = (option: Option) => {
    if (selectedOption && option.value === selectedOption) {
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

export const findText = (options: Option[], filterText: string) => {
  return Boolean(filterOptions(options, filterText).length);
};
