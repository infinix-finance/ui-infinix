import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";

import { checkScreenTexts } from "@/utils/testUtils";

import * as stories from "./Notifications.stories";

const { Default, Empty } = composeStories(stories);

describe("Notifications", () => {
  test("renders the top notification correctly", () => {
    render(<Default />);

    checkScreenTexts([
      "AVAX/USDC",
      "Short",
      "Open",
      "10/06/2022",
      "03:45:45",
      "Entry Price",
      "$82.00",
      "Mark Price",
      "$44.49",
      "Position Size",
      "0.00",
      "Liq. Price (est.)",
    ]);
  });

  test("renders the 2nd notification correctly", () => {
    render(<Default />);

    checkScreenTexts([
      "AVAX/USDC",
      "Long",
      "Open",
      "10/06/2022",
      "03:45:30",
      "Entry Price",
      "$106.08",
      "Mark Price",
      "$44.49",
      "Position Size",
      "1.89",
      "Liq. Price (est.)",
    ]);
  });

  test("renders the empty notifications correctly", () => {
    render(<Empty />);

    expect(
      screen.getByTestId("NotificationsNoneOutlinedIcon")
    ).toBeInTheDocument();
    expect(
      screen.getByText("You do not have notifications")
    ).toBeInTheDocument();
  });
});
