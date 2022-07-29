import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./LabeledSwitch.stories";

const { LabeledSwitches, LabeledSwitchesWithTooltip } = composeStories(stories);

test("render <LabeledSwitches /> without icon properly", () => {
  const { container } = render(<LabeledSwitches />);

  expect(screen.getByText("Text element")).toBeInTheDocument();
  expect(container.getElementsByClassName("MuiSwitch-root").length).toBe(1);
});

test("render <LabeledSwitchesWithTooltip /> with tooltip properly", () => {
  const { container } = render(<LabeledSwitchesWithTooltip />);

  expect(screen.getByText("Text element")).toBeInTheDocument();
  expect(screen.getByText("Tooltip master here")).toBeInTheDocument();
  expect(container.getElementsByClassName("MuiSwitch-root").length).toBe(1);
});
