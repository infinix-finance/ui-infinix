import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";
import * as stories from "./PriceDetails.stories";

import { checkScreenTexts } from "@/utils/testUtils";

const { Default, Valid } = composeStories(stories);

describe("PriceDetails", () => {
  test("should render the component when quote is not set", () => {
    render(<Default />);

    checkScreenTexts([
      "Entry Price",
      "Liquidation Price (est.)",
      "Price Impact",
      "Trading Fee",
    ]);
    expect(screen.queryAllByText("-")).toHaveLength(4);
  });

  test("should render the component when quote is set", () => {
    render(<Valid />);

    checkScreenTexts(["$108.70", "$1.25", "1.4%", "$0.10"]);
  });
});
