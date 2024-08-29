import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./index";

const meta = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: { type: "text" },
      description: "배지 테스트",
      table: {
        type: { summary: "string" },
      },
    },
    backgroundColor: {
      control: { type: "color" },
      description: "배지 색상",
      table: {
        type: { summary: "string" },
      },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Orange: Story = {
  args: {
    content: "1",
    backgroundColor: "#ed9f28",
  },
};

export const Green: Story = {
  args: {
    content: "2",
    backgroundColor: "#32bf00",
  },
};

export const Red: Story = {
  args: {
    content: "10",
    backgroundColor: "#d4001a",
  },
};
