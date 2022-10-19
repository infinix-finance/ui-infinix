import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";
import * as stories from "./AccountDetails.stories";

import { checkScreenTexts } from "@/utils/testUtils";

const {
  WithoutBalance,
  WithBalance,
  LowRiskProfile,
  MediumRiskProfile,
  HighRiskProfile,
} = composeStories(stories);

describe("AccountDetails", () => {
  test("should render the labels, and invalid markers", () => {
    render(<WithoutBalance />);

    checkScreenTexts([
      "Net USDC Value",
      "Free Collateral",
      "Margin Ratio",
      "Leverage",
      "Risk Profile",
      "100%",
    ]);
    expect(screen.queryAllByText("-")).toHaveLength(6);
  });

  test("should render the labels, and default markers when quote amount is not yet set", () => {
    render(<WithBalance />);

    checkScreenTexts(["$1,000.00", "$3,000.00", "0%", "3X", "Low", "100%"]);
    expect(screen.queryAllByText("-")).toHaveLength(0);
  });

  test("should render the labels, and low risk profile markers", () => {
    render(<LowRiskProfile />);

    checkScreenTexts([
      "$1,000.00",
      "$800.00",
      "$3,000.00",
      "$2,400.00",
      "20%",
      "3X",
      "Low",
      "80%",
    ]);
  });

  test("should render the labels, and medium risk profile markers", () => {
    render(<MediumRiskProfile />);

    checkScreenTexts([
      "$1,000.00",
      "$500.00",
      "$3,000.00",
      "$1,500.00",
      "50%",
      "3X",
      "Medium",
      "50%",
    ]);
  });

  test("should render the labels, and high risk profile markers", () => {
    render(<HighRiskProfile />);

    checkScreenTexts([
      "$1,000.00",
      "$200.00",
      "$3,000.00",
      "$600.00",
      "80%",
      "3X",
      "High",
      "20%",
    ]);
  });
});
