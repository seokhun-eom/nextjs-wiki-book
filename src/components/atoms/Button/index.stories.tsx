import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "./index";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
      defaultValue: "primary",
      description: "버튼 변형",
      table: {
        type: { summary: "primary | secondary" },
        defaultValue: { summary: "primary" },
      },
    },
    children: {
      control: { type: "text" },
      defaultValue: "Button",
      description: "버튼 텍스트",
      table: {
        type: { summary: "string" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "Disabled 플래그",
      table: {
        type: { summary: "boolean" },
      },
    },
    width: {
      control: { type: "text" },
      description: "버튼 세로폭",
      table: {
        type: { summary: "text" },
      },
    },
    height: {
      control: { type: "text" },
      description: "버튼 가로폭",
      table: {
        type: { summary: "text" },
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};
