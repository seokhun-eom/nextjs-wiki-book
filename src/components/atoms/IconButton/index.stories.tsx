import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { SearchIcon } from "./index";

const meta = {
  title: "Atoms/IconButton",
  component: SearchIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "text" },
      description: "아이콘 색상",
      table: {
        type: { summary: "ThemeColors" },
      },
    },
    backgroundColor: {
      control: { type: "color" },
      description: "배경 색상",
      table: {
        type: { summary: "string" },
      },
    },
    size: {
      control: { type: "number" },
      defaultValue: 24,
      description: "아이콘 크기",
      table: {
        type: { summary: "number" },
      },
    },
    onClick: {
      description: "onClick 이벤트 핸들러",
      table: {
        type: { summary: "function" },
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof SearchIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComponentStory: Story = {};
