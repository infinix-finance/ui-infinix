import { render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./AssetAmount.stories";
import { checkScreenTexts } from "@/utils/testUtils";

const { WithBalance, WithoutBalance } = composeStories(stories);

describe("AssetAmount", () => {
  test("should render the component with balance", () => {
    render(<WithBalance />);

    checkScreenTexts([
      "Asset",
      "Amount",
      "ETH",
      "USDC",
      "Balance: 22,100.35 USDC",
      "Max",
    ]);
  });

  test("should render the component without balance", () => {
    render(<WithoutBalance />);

    checkScreenTexts([
      "Asset",
      "Amount",
      "ETH",
      "USDC",
      "Balance: 0.00 USDC",
      "Max",
    ]);
  });
});
