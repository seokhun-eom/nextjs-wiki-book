import type { Meta, StoryObj } from "@storybook/react";
import AppLogo from "./index";

const meta = {
  title: "Atoms/AppLogo",
  component: AppLogo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Logo: Story = {};
