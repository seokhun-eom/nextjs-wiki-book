import type { Meta, StoryObj } from "@storybook/react";
import ScaleImage from "./index";

const meta = {
  title: "Atoms/ScaleImage",
  component: ScaleImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: { type: "text" },
      description: "이미지 URL",
      table: {
        type: { summary: "string" },
      },
    },
    width: {
      control: { type: "number" },
      defaultValue: 320,
      description: "이미지 가로폭",
      table: {
        type: { summary: "number" },
      },
    },
    height: {
      control: { type: "number" },
      description: "이미지 세로폭",
      defaultValue: 320,
      table: {
        type: { summary: "number" },
      },
    },
    containerWidth: {
      control: { type: "number" },
      defaultValue: 320,
      description: "가로폭",
      table: {
        type: { summary: "number" },
      },
    },
    containerHeight: {
      control: { type: "number" },
      description: "세로폭",
      defaultValue: 320,
      table: {
        type: { summary: "number" },
      },
    },
  },
} satisfies Meta<typeof ScaleImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    src: "/products/books/bible-1867195_1920.jpeg",
    alt: "Bible",
  },
};
