import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./SlippageEditor.stories";

import { checkScreenTexts } from "@/utils/testUtils";

const { Default } = composeStories(stories);

describe("SlippageEditor", () => {
  test("should render the component", () => {
    render(<Default />);

    checkScreenTexts(["Slippage", "1.6%"]);
    expect(screen.getByTestId("CreateOutlinedIcon")).toBeInTheDocument();
  });
});
