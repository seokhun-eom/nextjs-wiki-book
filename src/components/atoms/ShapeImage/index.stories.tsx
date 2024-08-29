import type { Meta, StoryObj } from "@storybook/react";
import ShapeImage from "./index";

const meta = {
  title: "Atoms/ShapeImage",
  component: ShapeImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    shape: {
      options: ["circle", "square"],
      control: { type: "radio" },
      defaultValue: "square",
      description: "이미지 형태",
      table: {
        type: { summary: "circle | square" },
        defaultValue: { summary: "square" },
      },
    },
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
} satisfies Meta<typeof ShapeImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Circle: Story = {
  args: {
    shape: "circle",
    src: "/products/books/bible-1867195_1920.jpeg",
    alt: "Bible",
    width: 320,
    height: 320,
  },
};

export const Square: Story = {
  args: {
    shape: "square",
    src: "/products/books/bible-1867195_1920.jpeg",
    alt: "Bible",
    width: 320,
    height: 320,
  },
};
