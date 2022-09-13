import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./PositionStatus.stories";

const { Default } = composeStories(stories);

describe("PositionStatus", () => {
  test("renders all 3 types of the component correctly", () => {
    render(<Default />);

    expect(screen.getByText("Open")).toBeInTheDocument();
    expect(screen.getByText("Closed")).toBeInTheDocument();
    expect(screen.getByText("Liquidated")).toBeInTheDocument();
  });
});
