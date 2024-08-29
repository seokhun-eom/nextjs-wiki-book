import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import FilterGroup from "./index";

const meta = {
  title: "Molecules/FilterGroup",
  component: FilterGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
      description: "제목",
      table: {
        type: { summary: "string" },
      },
    },
    items: {
      control: { type: "object" },
      description: "옵션",
      table: {
        type: { summary: "array" },
      },
    },
    onChange: {
      description: "onChange 이벤트 핸들러",
      table: {
        type: { summary: "function" },
      },
    },
  },
} satisfies Meta<typeof FilterGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>([]);
    const handleChange = (value: string[]) => {
      setValue(value);
      if (args && args.onChange) {
        args.onChange(value);
      }
    };

    return <FilterGroup value={value} onChange={handleChange} {...args} />;
  },
};

export const Standard: Story = {
  ...Template,
  args: {
    title: "All categories",
    items: [
      { label: "Clothes", name: "clothes" },
      { label: "Books", name: "books" },
      { label: "Shoes", name: "shoes" },
    ],
  },
};
