import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./Label.stories";

const { TooltipLabels } = composeStories(stories);

describe("Label", () => {
  test("renders label with icon", () => {
    render(<TooltipLabels />);

    expect(screen.getByText("Label master here")).toBeInTheDocument();
  });
});
