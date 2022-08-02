import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./Select.stories";

const {
  TextOnlySelects,
  IconSelects,
  CenteredSelects,
  LabeledSelectsWithBalance,
} = composeStories(stories);

test("renders Text Only Selects", () => {
  const { container } = render(<TextOnlySelects />);
  expect(container.querySelector("input[value='select1']")).toBeDefined();
  expect(container.querySelector("input[disabled]")).toBeDefined();
});

test("renders Icon Selects", () => {
  const { container } = render(<IconSelects />);
  expect(container.querySelector("input[value='select1']")).toBeDefined();
  expect(container.querySelector("input[disabled]")).toBeDefined();
});

test("renders centered Selects", () => {
  const { container } = render(<CenteredSelects />);
  expect(container.querySelector("input[value='select1']")).toBeDefined();
  expect(container.querySelector("input[disabled]")).toBeDefined();
});

test("renders Labeled Selects With Balance", () => {
  render(<LabeledSelectsWithBalance />);
  expect(screen.getAllByText("Label master here")).toBeDefined();
  expect(screen.getAllByText("Balance:")).toBeDefined();
});
