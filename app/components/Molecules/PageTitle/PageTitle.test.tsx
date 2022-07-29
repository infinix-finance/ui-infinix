import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./PageTitle.stories";

const { PageTitleStory } = composeStories(stories);

test("It renders properly", () => {
  render(<PageTitleStory />);

  expect(screen.getByText("Overview")).toBeInTheDocument();
});

test("It accepts title as mandatory prop", () => {
  render(<PageTitleStory title="Anything" subtitle="Override" />);
  expect(screen.getByText("Anything")).toBeInTheDocument();
  expect(screen.getByText("Override")).toBeInTheDocument();
});
