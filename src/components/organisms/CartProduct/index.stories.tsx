import type { Meta, StoryObj } from "@storybook/react";
import CartProduct from "./index";

const meta = {
  title: "Organisms/CartProduct",
  component: CartProduct,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: { type: "number" },
      description: "상품 ID",
      table: {
        type: { summary: "number" },
      },
    },
    title: {
      control: { type: "text" },
      description: "상품명",
      table: {
        type: { summary: "string" },
      },
    },
    imageUrl: {
      control: { type: "text" },
      description: "상폼 이미지 URL",
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
    onBuyButtonClick: {
      description: "구입 버튼을 클릭했을 때의 이벤트 핸들러",
      table: {
        type: { summary: "function" },
      },
    },
    onRemoveButtonClick: {
      description: "삭제 버튼을 클릭했을 때의 이벤트 핸들러",
      table: {
        type: { summary: "function" },
      },
    },
  },
} satisfies Meta<typeof CartProduct>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NiceShoes: Story = {
  args: {
    id: 1,
    imageUrl: "/products/shoes/baby-shoes-505471_1920.jpeg",
    title: "Nice Shoes",
    price: 100,
  },
};
