import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./ProductAsset.stories";

const { TokenAssets, TokenAssetsWithDescription, MarketAsset, NetworkAsset } =
  composeStories(stories);

describe("ProductAsset", () => {
  test("renders token assets without description", () => {
    render(<TokenAssets />);

    expect(screen.getByText("ETH/FTM")).toBeInTheDocument();
    expect(screen.queryByText("Ethereum/Fantom")).not.toBeInTheDocument();
    expect(screen.getByAltText("ETH")).toBeInTheDocument();
    expect(screen.getByAltText("FTM")).toBeInTheDocument();
  });

  test("renders token assets with description", () => {
    render(<TokenAssetsWithDescription />);

    expect(screen.getByText("ETH/FTM")).toBeInTheDocument();
    expect(screen.queryByText("Ethereum/Fantom")).toBeInTheDocument();
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
