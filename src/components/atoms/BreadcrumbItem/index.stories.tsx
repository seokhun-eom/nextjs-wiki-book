import type { Meta, StoryObj } from "@storybook/react";
import BreadcrumbItem from "./index";

const meta = {
  title: "Atoms/BreadcrumbItem",
  component: BreadcrumbItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BreadcrumbItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    children: "Item",
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
        <Story />
        <Story />
      </div>
    ),
  ],
};
