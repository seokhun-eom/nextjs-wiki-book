import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./index";

const meta = {
  title: "Molecules/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    options: {
      control: { type: "object" },
      description: "드롭다운 선택지",
      table: {
        type: { summary: "array" },
      },
    },
    hasError: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "변형 에러 플래그",
      table: {
        type: { summary: "boolean" },
      },
    },
    placeholder: {
      control: { type: "text" },
      description: "플레이스홀더",
      table: {
        type: { summary: "string" },
      },
    },
    value: {
      control: { type: "text" },
      description: "드롭다운 값",
      table: {
        type: { summary: "string" },
      },
    },
    onChange: {
      description: "값이 변화했을 때의 이벤트 핸들러",
      table: {
        type: { summary: "function" },
      },
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    options: [
      { value: null, label: "-" },
      { value: "one", label: "One" },
      { value: "two", label: "Two" },
      { value: "three", label: "Three" },
    ],
    placeholder: "Please select items from the list",
  },
};

export const InitialValue: Story = {
  args: {
    options: [
      { value: null, label: "-" },
      { value: "one", label: "One" },
      { value: "two", label: "Two" },
      { value: "three", label: "Three" },
    ],
    placeholder: "Please select items from the list",
    value: "one",
  },
};

export const Many: Story = {
  args: {
    options: Array.from(Array(20), (_v, k) => {
      return { value: k.toString(), label: k.toString() };
    }),
    placeholder: "Please select items from the list",
  },
};
