import { screen, within } from "@testing-library/react";

export const checkScreenTexts = (texts: string[], presence: boolean = true) => {
  texts.forEach((text) => {
    presence
      ? expect(screen.queryAllByText(text).length).toBeGreaterThan(0)
      : expect(screen.queryByText(text)).toBeNull();
  });
};

export const checkElementsWithinByTexts = (
  container: HTMLElement,
  texts: string[],
  presence: boolean = true
) => {
  texts.forEach((text) => {
    presence
      ? expect(within(container).queryAllByText(text).length).toBeGreaterThan(0)
      : expect(within(container).queryByText(text)).toBeNull();
  });
};

export const checkScreenLabels = (
  labels: string[],
  presence: boolean = true
) => {
  labels.forEach((label) => {
    presence
      ? expect(screen.getAllByLabelText(label).length).toBeGreaterThan(0)
      : expect(screen.queryByLabelText(label)).toBeNull();
  });
};
