import type { Meta, StoryObj } from "@storybook/react";
import Separator from "./index";

const meta = {
  title: "Atoms/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    children: "Separator",
  },
};
