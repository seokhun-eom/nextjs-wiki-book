import {
  render,
  act,
  screen,
  fireEvent,
  RenderResult,
} from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import ProductForm from ".";
import { theme } from "@/themes";

describe("ProductForm", () => {
  let renderResult: RenderResult;
  let handleProductSave: jest.Mock;
  global.URL.createObjectURL = () => "https://test.com";

  beforeEach(() => {
    handleProductSave = jest.fn();
    renderResult = render(
      <ThemeProvider theme={theme}>
        <ProductForm onProductSave={handleProductSave} />
      </ThemeProvider>
    );
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it("폼 입력 후, onProductSave가 호출된다", async () => {
    await act(async () => {
      const element = await screen.findByTestId("dropzone");
      fireEvent.drop(element, {
        dataTransfer: {
          files: [
            new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" }),
          ],
        },
      });

      const inputUsernameNode = screen.getByPlaceholderText(
        /상품 제목/
      ) as HTMLInputElement;
      fireEvent.change(inputUsernameNode, { target: { value: "상품" } });

      const inputPasswordNode = screen.getByPlaceholderText(
        / 최고의 상품입니다/
      ) as HTMLInputElement;
      fireEvent.change(inputPasswordNode, {
        target: { value: "테스트테스트" },
      });

      const inputPriceNode = screen.getByPlaceholderText(
        /100/
      ) as HTMLInputElement;
      fireEvent.change(inputPriceNode, { target: { value: "100" } });

      fireEvent.click(screen.getByText("등록"));
    });

    expect(handleProductSave).toHaveBeenCalledTimes(1);
  });

  it("상품 제목 입력만으로는 변형 에러에 의한 onProductSave가 호출되지 않는다", async () => {
    await act(async () => {
      const inputUsernameNode = screen.getByPlaceholderText(
        /상품 제목/
      ) as HTMLInputElement;
      fireEvent.change(inputUsernameNode, { target: { value: "상품" } });

      fireEvent.click(screen.getByText("등록"));
    });

    expect(handleProductSave).toHaveBeenCalledTimes(0);
  });
});
