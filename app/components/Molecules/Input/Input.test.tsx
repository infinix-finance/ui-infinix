import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Input.stories";

const {
  InputAlone,
  InputWithProducts,
  InputWithTopLabel,
  InputWithEndAndornment,
} = composeStories(stories);

describe("Input", () => {
  test("renders input texts properly", () => {
    render(<InputAlone />);

    expect(screen.getByDisplayValue("Input text")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Placeholder text")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Disabled text")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Error text")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Alert text")).toBeInTheDocument();
  });

  test("renders Input only, without any extra addons", () => {
    render(<InputAlone />);

    expect(screen.queryAllByText("USDC")).toHaveLength(0);
    expect(screen.queryAllByText("static text")).toHaveLength(0);
    expect(screen.queryAllByText("Text Input Label")).toHaveLength(0);
    expect(screen.queryAllByText("Secondary Input Label")).toHaveLength(0);
    expect(screen.queryAllByText("Input Button")).toHaveLength(0);
  });

  test("renders Input with products on the left", () => {
    render(<InputWithProducts />);

    expect(screen.queryAllByText("USDC")).toHaveLength(5);

    expect(screen.queryAllByText("static text")).toHaveLength(0);
    expect(screen.queryAllByText("Text Input Label")).toHaveLength(0);
    expect(screen.queryAllByText("Secondary Input Label")).toHaveLength(0);
    expect(screen.queryAllByText("Input Button")).toHaveLength(0);
  });

  test("renders Input with top labels", () => {
    render(<InputWithTopLabel />);

    expect(screen.queryAllByText("Text Input Label")).toHaveLength(5);
    expect(screen.queryAllByText("Secondary Input Label")).toHaveLength(5);
    expect(screen.queryAllByText("Input Button")).toHaveLength(5);

    expect(screen.queryAllByText("static text")).toHaveLength(0);
    expect(screen.queryAllByText("USDC")).toHaveLength(0);
  });

  test("renders Input with static text at the end of the input", () => {
    render(<InputWithEndAndornment />);

    expect(screen.queryAllByText("static text")).toHaveLength(5);

    expect(screen.queryAllByText("USDC")).toHaveLength(0);
    expect(screen.queryAllByText("Text Input Label")).toHaveLength(0);
    expect(screen.queryAllByText("Secondary Input Label")).toHaveLength(0);
    expect(screen.queryAllByText("Input Button")).toHaveLength(0);
  });
});
