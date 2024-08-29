import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "./index";
import BreadcrumbItem from "@/components/atoms/BreadcrumbItem";

const meta = {
  title: "Molecules/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    children: (
      <>
        <BreadcrumbItem>
          <a href="#">Top</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="#">Clothes</a>
        </BreadcrumbItem>
        <BreadcrumbItem>Item</BreadcrumbItem>
      </>
    ),
  },
};
