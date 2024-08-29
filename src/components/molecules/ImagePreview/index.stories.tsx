import type { Meta, StoryObj } from "@storybook/react";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ImagePreview from "./index";
import Dropzone from "@/components/molecules/Dropzone";

const meta = {
  title: "Molecules/ImagePreview",
  component: ImagePreview,
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
    alt: {
      control: { type: "text" },
      description: "대체 텍스트",
      table: {
        type: { summary: "string" },
      },
    },
    height: {
      control: { type: "number" },
      description: "세로폭",
      table: {
        type: { summary: "number" },
      },
    },
    width: {
      control: { type: "number" },
      description: "가로폭",
      table: {
        type: { summary: "number" },
      },
    },
    onRemove: {
      description: "삭제 버튼을 클릭했을 때의 이벤트 핸들러",
      table: {
        type: { summary: "function" },
      },
    },
  },
} satisfies Meta<typeof ImagePreview>;

export default meta;
type Story = StoryObj<typeof meta>;

const Container = styled.div`
  width: 288px;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;
`;

interface Image {
  file?: File;
  src?: string;
}

const Template: Story = {
  render: (args) => {
    const [files, setFiles] = useState<File[]>([]);
    const [images, setImages] = useState<Image[]>([]);

    useEffect(() => {
      const newImages = [...images];

      for (const f of files) {
        const index = newImages.findIndex((img: Image) => img.file === f);

        if (index === -1) {
          newImages.push({
            file: f,
            src: URL.createObjectURL(f),
          });
        }
      }
      setImages(newImages);
    }, [files]);

    const handleRemove = (src: string) => {
      const image = images.find((img: Image) => img.src === src);

      if (image !== undefined) {
        setImages((images) => images.filter((img) => img.src !== image.src));
        setFiles((files) => files.filter((file: File) => file !== image.file));
      }

      if (args && args.onRemove) {
        args.onRemove(src);
      }
    };

    return (
      <Container>
        <Dropzone value={files} onDrop={(fileList) => setFiles(fileList)} />
        {images.map((image, i) => (
          <ImagePreview
            key={i}
            src={image.src}
            width="100px"
            {...args}
            onRemove={handleRemove}
          />
        ))}
      </Container>
    );
  },
};

export const Standard: Story = {
  ...Template,
  args: {
    title: "All categories",
    items: [
      { label: "Clothes", name: "clothes" },
      { label: "Books", name: "books" },
      { label: "Shoes", name: "shoes" },
    ],
  },
};
