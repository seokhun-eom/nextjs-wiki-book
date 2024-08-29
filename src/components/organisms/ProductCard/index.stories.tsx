import type { Meta, StoryObj } from "@storybook/react";
import ProductCard from "./index";

const meta = {
  title: "Organisms/ProductCard",
  component: ProductCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
      description: "상품명",
      table: {
        type: { summary: "string" },
      },
    },
    price: {
      control: { type: "number" },
      description: "상품 가격",
      table: {
        type: { summary: "number" },
      },
    },
    imageUrl: {
      control: { type: "text" },
      description: "상품 이미지 URL",
      table: {
        type: { summary: "string" },
      },
    },
    blurDataUrl: {
      control: { type: "text" },
      description: "상품의 흐릿한 이미지의 데이터 URI 스킴",
      table: {
        type: { summary: "string" },
      },
    },
    variant: {
      options: ["listing", "small", "detail"],
      control: { type: "radio" },
      defaultValue: "listing",
      description: "변경(표시 스타일)",
      table: {
        type: { summary: "listing | small | detail" },
        defaultValue: { summary: "primary" },
      },
    },
  },
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Listing: Story = {
  args: {
    variant: "listing",
    title: "멋진 신발",
    imageUrl: "/products/shoes/baby-shoes-505471_1920.jpeg",
    price: 20000,
  },
};

export const Small: Story = {
  args: {
    variant: "small",
    title: "멋진 신발",
    imageUrl: "/products/shoes/baby-shoes-505471_1920.jpeg",
    price: 20000,
  },
};

export const Detail: Story = {
  args: {
    variant: "detail",
    title: "멋진 신발",
    imageUrl: "/products/shoes/baby-shoes-505471_1920.jpeg",
    price: 20000,
  },
};
