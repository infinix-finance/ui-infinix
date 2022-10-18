import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";

import { checkScreenTexts } from "@/utils/testUtils";
import * as stories from "./TopBar.stories";

const { WithoutData, WithData } = composeStories(stories);

describe("TopBar", () => {
  test("should render the not yet initialized state", () => {
    render(<WithoutData />);

    checkScreenTexts(["Crypto", "AVAX/USDC", "$0.00", "0.0000%", "00:00:00"]);
    expect(screen.queryAllByTestId("InfoOutlinedIcon")).toHaveLength(2);
  });

  test("should render the component with data", () => {
    render(<WithData />);

    checkScreenTexts(["$16.69", "0.0563%", "$600.00", "00:10:05"]);
  });
});
