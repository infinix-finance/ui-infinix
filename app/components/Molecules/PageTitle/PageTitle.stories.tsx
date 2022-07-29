import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PageTitle } from "./PageTitle";

export default {
  title: "molecules/PageTitle",
  component: PageTitle,
  argTypes: {
    title: {
      control: {
        type: "text",
        label: "Title",
      },
    },
  },
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (args) => (
  <PageTitle {...args} />
);

export const PageTitleStory = Template.bind({});
PageTitleStory.args = {
  title: "Overview",
  subtitle: "You will be able to check on your positions here.",
};
