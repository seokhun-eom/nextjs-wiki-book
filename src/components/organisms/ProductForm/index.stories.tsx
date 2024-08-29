import type { Meta, StoryObj } from "@storybook/react";
import ProductForm from "./index";

const meta = {
  title: "Organisms/ProductForm",
  component: ProductForm,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    onProductSave: {
      description: "등록 버튼을 클릭했을 때의 이벤트 핸들러",
      table: {
        type: { summary: "function" },
      },
    },
  },
} satisfies Meta<typeof ProductForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Form: Story = {};
