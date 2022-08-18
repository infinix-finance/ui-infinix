import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import userEvent from "@testing-library/user-event";

import * as stories from "./Snackbar.stories";

const { Snackbars } = composeStories(stories);

describe("Snackbar", () => {
  test("should render a success snackbar after a click", async () => {
    render(<Snackbars />);

    const user = userEvent.setup();
    await user.click(screen.getAllByRole("button")[0]);

    expect(screen.queryAllByText("Snackbar title")).toHaveLength(1);
    expect(screen.queryByTestId("CheckCircleOutlinedIcon")).toBeInTheDocument();
  });

  test("should render a success and an error snackbars after clicks", async () => {
    render(<Snackbars />);

    const user = userEvent.setup();
    await user.click(screen.getAllByRole("button")[0]);
    await user.click(screen.getAllByRole("button")[1]);

    expect(screen.queryAllByText("Snackbar title")).toHaveLength(2);
    expect(screen.queryByTestId("CheckCircleOutlinedIcon")).toBeInTheDocument();
    expect(
      screen.queryByTestId("ErrorOutlineOutlinedIcon")
    ).toBeInTheDocument();
  });

  test("should render max number of snackbars on screen", async () => {
    render(<Snackbars />);

    const user = userEvent.setup();
    await user.click(screen.getAllByRole("button")[0]);
    await user.click(screen.getAllByRole("button")[0]);
    await user.click(screen.getAllByRole("button")[0]);
    await user.click(screen.getAllByRole("button")[0]);

    expect(screen.queryAllByText("Snackbar title")).toHaveLength(3);
  });
});
