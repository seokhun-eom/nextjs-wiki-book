import type { Meta, StoryObj } from "@storybook/react";
import UserProfile from "./index";

const meta = {
  title: "Organisms/UserProfile",
  component: UserProfile,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["normal", "small"],
      control: { type: "radio" },
      defaultValue: "normal",
      description: "변형(표지 스타일)",
      table: {
        type: { summary: "normal | small" },
        defaultValue: { summary: "normal" },
      },
    },
    username: {
      control: { type: "text" },
      description: "사용자명",
      table: {
        type: { summary: "string" },
      },
    },
    profileImageUrl: {
      control: { type: "text" },
      description: "사용자 이미지 URL",
      table: {
        type: { summary: "string" },
      },
    },
    numberOfProducts: {
      control: { type: "number" },
      description: "사용자 소유한 상품 수",
      table: {
        type: { summary: "number" },
      },
    },
    description: {
      control: { type: "text" },
      description: "사용자 설명",
      table: {
        type: { summary: "string" },
      },
    },
  },
} satisfies Meta<typeof UserProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    variant: "small",
    username: "테스트 사용자",
    profileImageUrl: "/users/1.png",
    numberOfProducts: 2000,
    description: "샘플 텍스트",
  },
};

export const Normal: Story = {
  args: {
    variant: "normal",
    username: "테스트 사용자",
    profileImageUrl: "/users/1.png",
    numberOfProducts: 2000,
    description: "샘플 텍스트",
  },
};
