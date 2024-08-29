import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import styled from "styled-components";
import InputImages, { FileData } from "./index";

const meta = {
  title: "Molecules/InputImages",
  component: InputImages,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputImages>;

export default meta;
type Story = StoryObj<typeof meta>;

const Container = styled.div`
  width: 288px;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;
`;

const Template: Story = {
  render: (args) => {
    const [images, setImages] = useState<FileData[]>([]);

    const handleChange = (images: FileData[]) => {
      setImages(images);
    };

    return (
      <Container>
        <InputImages
          images={images}
          onChange={handleChange}
          maximumNumber={2}
        />
      </Container>
    );
  },
};

export const Standard: Story = {
  ...Template,
};
