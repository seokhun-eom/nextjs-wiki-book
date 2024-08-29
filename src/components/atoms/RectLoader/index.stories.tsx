import type { Meta, StoryObj } from "@storybook/react";
import RectLoader from "./index";

const meta = {
  title: "Atoms/RectLoader",
  component: RectLoader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: { type: "number" },
      defaultValue: 320,
      description: "가로폭",
      table: {
        type: { summary: "number" },
      },
    },
    height: {
      control: { type: "number" },
      description: "세로폭",
      defaultValue: 320,
      table: {
        type: { summary: "number" },
      },
    },
  },
} satisfies Meta<typeof RectLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    width: 320,
    height: 320,
  },
};
