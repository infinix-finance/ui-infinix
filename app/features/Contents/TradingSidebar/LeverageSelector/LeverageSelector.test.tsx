import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";
import * as stories from "./LeverageSelector.stories";

import { checkScreenTexts } from "@/utils/testUtils";

const { Default, Valid } = composeStories(stories);

describe("AssetAmount", () => {
  test("should render the component when balance is not set", () => {
    render(<Default />);

    checkScreenTexts(["Leverage", "1X", "3X", "5X", "7X", "10X"]);
    expect(screen.queryAllByText("-")).toHaveLength(1);
  });

  test("should render the component when balance is not set", () => {
    render(<Valid />);

    checkScreenTexts(["Nominal Position Size", "$300.00"]);
  });
});
