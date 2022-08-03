import { fireEvent, render, screen, within, act } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import userEvent from "@testing-library/user-event";

import * as stories from "./Select.stories";
import { checkElementsWithinByTexts } from "@/utils/testUtils";

const { TextOnlySelects, SingleTokenSelects, MultiTokenSelects } =
  composeStories(stories);

describe("Select", () => {
  describe("Initial states", () => {
    test("renders text only Select component", () => {
      render(<TextOnlySelects />);

      const texts = screen.queryAllByText("Select 1");
      const icons = screen.queryAllByAltText("Select 1");

      expect(texts).toHaveLength(2);
      expect(icons).toHaveLength(0);
    });

    test("renders single token Select component", () => {
      render(<SingleTokenSelects />);

      const texts = screen.queryAllByText("FTM");
      const icons = screen.queryAllByAltText("FTM");

      expect(texts).toHaveLength(2);
      expect(icons).toHaveLength(2);
    });

    test("renders multi token Select component", () => {
      render(<MultiTokenSelects />);

      const texts = screen.queryAllByText("FTM/USDC");
      const ftmIcons = screen.queryAllByAltText("FTM");
      const usdcIcons = screen.queryAllByAltText("USDC");

      expect(texts).toHaveLength(2);
      expect(ftmIcons).toHaveLength(2);
      expect(usdcIcons).toHaveLength(2);
    });
  });

  describe("Open modal and interact with elements", () => {
    test("Open modal and check list values", async () => {
      render(<MultiTokenSelects />);

      const user = userEvent.setup();
      await user.click(screen.getAllByRole("button")[0]);

      const dropdownContent = screen.getByRole("listbox");

      checkElementsWithinByTexts(dropdownContent, [
        "FTM/USDC",
        "Fantom/USDC",
        "AVAX/USDC",
        "Avalanche/USDC",
        "CHAOS/USDC",
        "Chaos/USDC",
      ]);
    });

    test("Open modal, enter a filter text and check list values", async () => {
      render(<MultiTokenSelects />);

      const user = userEvent.setup();
      await user.click(screen.getAllByRole("button")[0]);

      const dropdownContent = screen.getByRole("listbox");
      const inputElement = dropdownContent.querySelector("input");

      act(() => {
        fireEvent.change(inputElement as HTMLInputElement, {
          target: { value: "AVAX" },
        });
      });

      checkElementsWithinByTexts(dropdownContent, [
        "FTM/USDC",
        "Fantom/USDC",
        "AVAX/USDC",
        "Avalanche/USDC",
      ]);
      expect(within(dropdownContent).queryAllByText("CHAOS/USDC")).toHaveLength(
        0
      );
    });

    test("Open modal, select 2nd option", async () => {
      render(<MultiTokenSelects />);

      const user = userEvent.setup();
      await user.click(screen.getAllByRole("button")[0]);

      const dropdownContent = screen.getByRole("listbox");
      const [avaxListElement] =
        within(dropdownContent).queryAllByText("AVAX/USDC");

      act(() => {
        avaxListElement.click();
      });

      const textElements = screen.queryAllByText("AVAX/USDC");

      expect(textElements).toHaveLength(2);
    });
  });
});
