import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";

import * as stories from "./Loader.stories";

const { LoadingState, CompleteState } = composeStories(stories);

describe("Loader", () => {
  test("renders loading state correctly", () => {
    render(<LoadingState />);

    expect(screen.getByText("Loading initial data")).toBeInTheDocument();
  });

  test("renders the content correctly", () => {
    render(<CompleteState />);

    expect(screen.getByText("Page loaded mock")).toBeInTheDocument();
  });
});
