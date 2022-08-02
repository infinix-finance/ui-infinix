import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./InputLabel.stories";

const { LabelOnly, LabelsWithButton } = composeStories(stories);

describe("InputLabel", () => {
  test("renders label only", () => {
    render(<LabelOnly />);

    expect(screen.queryByText("Input Label")).toBeInTheDocument();
    expect(screen.queryByText("Button Label")).not.toBeInTheDocument();
  });

  test("renders 2 labels with button", () => {
    render(<LabelsWithButton />);

    expect(screen.queryByText("Input Label")).toBeInTheDocument();
    expect(screen.queryByText("Secondary Label")).toBeInTheDocument();
    expect(screen.queryByText("Button Label")).toBeInTheDocument();
  });
});
