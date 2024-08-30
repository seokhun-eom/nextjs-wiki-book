import { render, screen, RenderResult } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Header from ".";
import { AuthContextProvider } from "@/contexts/AuthContext";
import { useShoppingCartContext } from "@/contexts/ShoppingCartContext";
import { theme } from "@/themes";
import type { User, Product } from "@/types";

jest.mock("@/contexts/ShoppingCartContext");

const { ShoppingCartContextProvider } = jest.requireActual(
  "@/contexts/ShoppingCartContext"
);

const authUser: User = {
  id: 1,
  username: "dummy",
  displayName: "Taketo Yoshida",
  email: "test@example.com",
  profileImageUrl: "/images/sample/1.jpg",
  description: "",
};

const product: Product = {
  id: 1,
  category: "book",
  title: "Product",
  description: "",
  imageUrl: "/images/sample/1.jpg",
  blurDataUrl: "",
  price: 10000,
  condition: "used",
  owner: authUser,
};

describe("Header", () => {
  let renderResult: RenderResult;
  const useShoppingCartContextMock =
    useShoppingCartContext as jest.MockedFunction<
      typeof useShoppingCartContext
    >;

  it("카트에 상품이 존재한다", async () => {
    useShoppingCartContextMock.mockReturnValue({
      cart: [product],
      addProductToCart: () => {},
      removeProductFromCart: () => {},
    });

    renderResult = render(
      <ThemeProvider theme={theme}>
        <ShoppingCartContextProvider>
          <AuthContextProvider
            authUser={authUser}
            context={{ apiRootUrl: "https://dummy" }}
          >
            <Header />
          </AuthContextProvider>
        </ShoppingCartContextProvider>
      </ThemeProvider>
    );

    expect(screen.getAllByTestId("badge-wrapper").length).toBeGreaterThan(0);

    renderResult.unmount();
    useShoppingCartContextMock.mockReset();
  });

  it("미 로그인", async () => {
    useShoppingCartContextMock.mockReturnValue({
      cart: [],
      addProductToCart: () => {},
      removeProductFromCart: () => {},
    });

    renderResult = render(
      <ThemeProvider theme={theme}>
        <ShoppingCartContextProvider>
          <AuthContextProvider context={{ apiRootUrl: "https://dummy" }}>
            <Header />
          </AuthContextProvider>
        </ShoppingCartContextProvider>
      </ThemeProvider>
    );

    expect(screen.queryByTestId("profile-shape-image")).toBeNull();

    expect(screen.queryByTestId("badge-wrapper")).toBeNull();

    renderResult.unmount();
    useShoppingCartContextMock.mockReset();
  });
});
