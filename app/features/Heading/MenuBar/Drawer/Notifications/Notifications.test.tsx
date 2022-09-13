import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import { checkScreenTexts } from "@/utils/testUtils";

import * as stories from "./Notifications.stories";

const { Default, Empty } = composeStories(stories);

describe("Notifications", () => {
  test("renders the list of notifications correctly", () => {
    render(<Default />);

    checkScreenTexts([
      "GOOG/USDC",
      "XAU/USDC",
      "BTC/USDC",
      "AVAX/USDC",
      "CHAOS/USDC",
      "FTM/USDC",
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
