import { render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./LeverageSelector.stories";

import { checkScreenTexts } from "@/utils/testUtils";

const { Default } = composeStories(stories);

describe("AssetAmount", () => {
  test("should render the component", () => {
    render(<Default />);

    checkScreenTexts(["Leverage", "1X", "3X", "5X", "7X", "10X"]);
    checkScreenTexts(["Buying power (3x)", "$300.00"]);
  });
});
