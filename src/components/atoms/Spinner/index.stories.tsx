import type { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import Spinner from "./index";

const meta = {
  title: "Atoms/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "number" },
      defaultValue: 50,
      description: "크기",
      table: {
        type: { summary: "number" },
      },
    },
    strokeWidth: {
      control: { type: "number" },
      description: "선 폭",
      defaultValue: 4,
      table: {
        type: { summary: "number" },
      },
    },
    isAutoCentering: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "센터링 플래그",
      table: {
        type: { summary: "boolean" },
      },
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Square: Story = {};
