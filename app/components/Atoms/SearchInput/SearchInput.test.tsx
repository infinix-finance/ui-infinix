import { render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./SearchInput.stories";

const { SearchInputs } = composeStories(stories);

test("renders Search Input", () => {
  const { container } = render(<SearchInputs />);
  expect(container.querySelector("input[value='Search text']")).toBeDefined();
  expect(
    container.querySelector("input[placeholder='Placeholder text']")
  ).toBeDefined();
  expect(container.querySelector("input[value='Disabled text']")).toBeDefined();
});
