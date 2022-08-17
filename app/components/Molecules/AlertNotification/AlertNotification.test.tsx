import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./AlertNotification.stories";

const {
  WithDescription,
  WithTitleDescription,
  WithProgress,
  WithLinkAndAction,
} = composeStories(stories);

describe("AlertNotification", () => {
  test("should render all 4 different icon types", () => {
    render(<WithDescription />);

    expect(screen.queryByTestId("InfoOutlinedIcon")).toBeInTheDocument();
    expect(screen.queryByTestId("CheckCircleOutlinedIcon")).toBeInTheDocument();
    expect(
      screen.queryByTestId("WarningAmberOutlinedIcon")
    ).toBeInTheDocument();
    expect(
      screen.queryByTestId("ErrorOutlineOutlinedIcon")
    ).toBeInTheDocument();
  });

  test("should not render progress bar", () => {
    render(<WithDescription />);

    expect(screen.queryAllByTestId("progressBar")).toHaveLength(0);
  });

  test("should render progress bar", () => {
    render(<WithProgress />);

    expect(screen.queryAllByTestId("progressBar")).toHaveLength(4);
  });

  test("should render description text only", () => {
    render(<WithDescription />);

    expect(screen.queryAllByText("Description only")).toHaveLength(4);
    expect(screen.queryAllByText("Title")).toHaveLength(0);
  });

  test("should render description and title", () => {
    render(<WithTitleDescription />);

    expect(screen.queryAllByText("This is a longer text")).toHaveLength(4);
    expect(screen.queryAllByText("Title")).toHaveLength(4);
  });

  test("should render no controls", () => {
    render(<WithDescription />);

    expect(screen.queryAllByTestId("CloseIcon")).toHaveLength(0);
    expect(screen.queryAllByTestId("OpenInNewIcon")).toHaveLength(0);
    expect(screen.queryAllByText("Hello there")).toHaveLength(0);
  });

  test("should render all controls", () => {
    render(<WithLinkAndAction />);

    expect(screen.queryAllByTestId("CloseIcon")).toHaveLength(4);
    expect(screen.queryAllByTestId("OpenInNewIcon")).toHaveLength(4);
    expect(screen.queryAllByText("Hello there")).toHaveLength(4);
  });
});
