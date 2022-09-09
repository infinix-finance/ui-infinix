import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./DataGrid.stories";
import { checkScreenTexts } from "@/utils/testUtils";

const {
  PlainGrid,
  InvisibleNameColumn,
  EmptyGrid,
  CustomChild,
  GridWithRenderers,
} = composeStories(stories);

describe("DataGrid", () => {
  test("should render the default grid", () => {
    render(<PlainGrid />);

    checkScreenTexts([
      "Dessert (100g serving)",
      "Calories",
      "Fat (g)",
      "Carbs (g)",
      "Frozen yogurt",
      "159",
      "12.4",
      "20.6",
      "Ice cream sandwich",
      "120",
      "22.4",
      "10.5",
      "Eclair",
      "300",
      "11.1",
      "50.9",
    ]);
  });

  test("should render the grid without the first column", () => {
    render(<InvisibleNameColumn />);

    expect(
      screen.queryByText("Dessert (100g serving)")
    ).not.toBeInTheDocument();
  });

  test("should render the grid and an empty indicator when there is no data provided", () => {
    render(<EmptyGrid />);

    expect(screen.queryByAltText("No transactions")).toBeInTheDocument();
    expect(
      screen.queryByText("You do not have any transactions yet.")
    ).toBeInTheDocument();
  });

  test("should render a custom child", () => {
    render(<CustomChild />);

    expect(screen.queryByText("Custom child")).toBeInTheDocument();
  });

  test("should render components within cells", () => {
    render(<GridWithRenderers />);

    expect(screen.queryAllByText("Close All")).toHaveLength(1);
    expect(screen.queryAllByText("Close")).toHaveLength(3);
    expect(screen.queryAllByTestId("ShareOutlinedIcon")).toHaveLength(3);
  });
});
