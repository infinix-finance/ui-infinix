import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./Notification.stories";
import { checkScreenLabels, checkScreenTexts } from "@/utils/testUtils";

const { Open, Closed, Liquidated } = composeStories(stories);

describe("Notification", () => {
  test("renders the heading components correctly", () => {
    render(<Open />);

    expect(screen.getByText("ETH/FTM")).toBeInTheDocument();
    expect(screen.getByText("Short")).toBeInTheDocument();
    expect(screen.getByText("Open")).toBeInTheDocument();
  });

  test("renders the content of the history entry with opened status", () => {
    render(<Open />);

    checkScreenTexts([
      "23/08/2022",
      "12:58:06",
      "Entry Price",
      "$170.00",
      "Mark Price",
      "$155.12",
      "Position Size",
      "$100.00",
      "Liq. Price (est.)",
      "$150.00",
    ]);
  });

  test("renders the content of the history entry with closed status", () => {
    render(<Closed />);

    checkScreenTexts(["23/08/2022", "12:58:06", "PnL (ROE%)", "+$150.00"]);
  });

  test("renders the content of the history entry with liquidation status", () => {
    render(<Liquidated />);

    checkScreenTexts(["23/08/2022", "12:58:06", "PnL (ROE%)", "-$150.00"]);
  });
});
