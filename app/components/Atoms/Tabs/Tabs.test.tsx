import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./Tabs.stories";

const { TextOnlyTabs, IconTabs, IconTabsWithOverriddenColors } =
  composeStories(stories);

describe("Tabs", () => {
  test("renders Text Only Tabs", () => {
    render(<TextOnlyTabs />);

    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
    expect(screen.getByText("Tab 3")).toBeInTheDocument();
    expect(screen.queryByTestId("ArrowUpwardIcon")).not.toBeInTheDocument();
    expect(screen.queryByTestId("ArrowDownwardIcon")).not.toBeInTheDocument();
    expect(screen.queryByAltText("Ethereum")).not.toBeInTheDocument();
  });

  test("renders Icon Tabs", () => {
    render(<IconTabs />);

    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
    expect(screen.getByText("Tab 3")).toBeInTheDocument();
    expect(screen.queryByTestId("ArrowUpwardIcon")).toBeInTheDocument();
    expect(screen.queryByTestId("ArrowDownwardIcon")).toBeInTheDocument();
    expect(screen.queryByAltText("Ethereum")).toBeInTheDocument();
  });

  test("renders Icon Tabs with overridden colors", () => {
    render(<IconTabsWithOverriddenColors />);

    expect(screen.getByText("Lemon color")).toBeInTheDocument();
    expect(screen.getByText("Guava color")).toBeInTheDocument();
    expect(screen.getByText("Default color")).toBeInTheDocument();
    expect(screen.queryByTestId("ArrowUpwardIcon")).toBeInTheDocument();
    expect(screen.queryByTestId("ArrowDownwardIcon")).toBeInTheDocument();
    expect(screen.queryByAltText("Ethereum")).toBeInTheDocument();
  });
});
