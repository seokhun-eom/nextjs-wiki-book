import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect } from "react";
import Header from "./index";
import { AuthContextProvider } from "@/contexts/AuthContext";
import {
  ShoppingCartContextProvider,
  useShoppingCartContext,
} from "@/contexts/ShoppingCartContext";

const meta = {
  title: "Organisms/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoLogin: Story = {};

export const Login: Story = {
  render: () => {
    const authUser = {
      id: 1,
      username: "dummy",
      displayName: "Hana Kim",
      email: "hana.kim@example.com",
      profileImageUrl: "/users/1.png",
      description: "",
    };

    const ChildComponent = () => {
      const { addProductToCart } = useShoppingCartContext();

      useEffect(() => {
        addProductToCart({
          id: 1,
          category: "book",
          title: "Product",
          description: "",
          imageUrl: "/users/1.png",
          blurDataUrl: "",
          price: 10000,
          condition: "used",
          owner: authUser,
        });
      }, []);

      return <Header />;
    };

    return (
      <ShoppingCartContextProvider>
        <AuthContextProvider
          context={{ apiRootUrl: "https://dummy" }}
          authUser={authUser}
        >
          <ChildComponent />
        </AuthContextProvider>
      </ShoppingCartContextProvider>
    );
  },
};
