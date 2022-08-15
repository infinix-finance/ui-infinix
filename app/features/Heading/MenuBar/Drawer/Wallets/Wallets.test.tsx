import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Wallets.stories";

const { Disconnected, ConnectedWithAvalanche } = composeStories(stories);

describe("Wallets", () => {
  test("should render the disconnected state", () => {
    render(<Disconnected />);

    expect(screen.queryByText("Available wallets")).toBeInTheDocument();
    expect(screen.queryByText("Metamask")).toBeInTheDocument();
    expect(screen.queryByText("EVM")).toBeInTheDocument();
    expect(screen.getByAltText("Metamask")).toBeInTheDocument();
    expect(screen.getByTestId("PowerOutlinedIcon")).toBeInTheDocument();
  });

  test("should render the connected state", () => {
    render(<ConnectedWithAvalanche />);

    expect(screen.queryByText("Connected wallet")).toBeInTheDocument();
    expect(screen.queryByText("Avalanche")).toBeInTheDocument();
    expect(screen.queryByText("0x09f...262")).toBeInTheDocument();
    expect(screen.getByAltText("Metamask")).toBeInTheDocument();
  });
});
