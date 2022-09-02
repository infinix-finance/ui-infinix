import { render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./PriceDetails.stories";

import { checkScreenTexts } from "@/utils/testUtils";

const { Default } = composeStories(stories);

describe("PriceDetails", () => {
  test("should render the component", () => {
    render(<Default />);

    checkScreenTexts([
      "Entry Price",
      "Liquidation Price (est.)",
      "Price Impact",
      "Trading Fee",
    ]);
    checkScreenTexts(["$171.12", "$90.12", "2%", "$0.05"]);
  });
});
