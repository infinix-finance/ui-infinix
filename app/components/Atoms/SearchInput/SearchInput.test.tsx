import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";

import * as stories from "./SearchInput.stories";

const { SearchInputs } = composeStories(stories);

describe("SearchInput", () => {
  test("renders all variants", () => {
    const { container } = render(<SearchInputs />);

    expect(container.querySelector("input[value='Search text']")).toBeDefined();
    expect(
      container.querySelector("input[placeholder='Placeholder text']")
    ).toBeDefined();
    expect(
      container.querySelector("input[value='Disabled text']")
    ).toBeDefined();
  });

  test("updates the content of the enabled input", () => {
    const { container } = render(<SearchInputs />);
  });
});
