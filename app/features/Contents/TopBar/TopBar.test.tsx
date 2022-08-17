import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./TopBar.stories";
import { checkScreenTexts } from "@/utils/testUtils";

const { WithoutData, WithPositiveChange, WithNegativeChange } =
  composeStories(stories);

describe("TopBar", () => {
  test("should render the not yet initialized state", () => {
    render(<WithoutData />);

    checkScreenTexts([
      "Crypto",
      "BTC/USDC",
      "0.0%",
      "$0.00",
      "0.00%",
      "00:00:00",
    ]);
    expect(screen.queryAllByTestId("InfoOutlinedIcon")).toHaveLength(3);
  });

  test("should render the component with positive outlook", () => {
    render(<WithPositiveChange />);

    checkScreenTexts([
      "21.3%",
      "$101.50",
      "$210.00",
      "$350.40",
      "0.0123%",
      "$222.33",
      "00:33:20",
    ]);
    expect(screen.getByTestId("ArrowDropUpIcon")).toBeInTheDocument();
  });

  test("should render the component with negative outlook", () => {
    render(<WithNegativeChange />);

    checkScreenTexts([
      "-3.6%",
      "$101.50",
      "$210.00",
      "$350.40",
      "0.0123%",
      "$222.33",
      "00:33:20",
    ]);
    expect(screen.getByTestId("ArrowDropDownIcon")).toBeInTheDocument();
  });
});
