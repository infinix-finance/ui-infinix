import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./BaseAsset.stories";

const { DefaultBaseAsset } = composeStories(stories);

test("renders Base Asset With Default Args", () => {
  render(<DefaultBaseAsset />);
  expect(screen.getByText("ETH")).toBeInTheDocument();
  expect(screen.getByAltText("ETH")).toBeInTheDocument();
});
