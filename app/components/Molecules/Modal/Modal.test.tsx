import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./Modal.stories";

const { FullScreenModal } = composeStories(stories);

test("renders <FullScreenModal /> properly", () => {
  render(<FullScreenModal />);

  expect(screen.getByText("This h1 will go as header")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "close" })).toBeInTheDocument();
});
