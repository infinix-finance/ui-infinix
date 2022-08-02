import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./ProductAsset.stories";

const { TokenAssets, MarketAsset, NetworkAsset } = composeStories(stories);

describe("ProductAsset", () => {
  test("renders token assets", () => {
    render(<TokenAssets />);

    expect(screen.getByText("ETH/FTM")).toBeInTheDocument();
    expect(screen.getByAltText("ETH")).toBeInTheDocument();
    expect(screen.getByAltText("FTM")).toBeInTheDocument();
  });

  test("renders market asset", () => {
    render(<MarketAsset />);

    expect(screen.getByText("Crypto")).toBeInTheDocument();
    expect(screen.getByAltText("Crypto")).toBeInTheDocument();
  });

  test("renders network asset", () => {
    render(<NetworkAsset />);

    expect(screen.getByText("Ethereum")).toBeInTheDocument();
    expect(screen.getByAltText("Ethereum")).toBeInTheDocument();
  });
});
