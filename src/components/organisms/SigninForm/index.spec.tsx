import {
  render,
  act,
  screen,
  fireEvent,
  RenderResult,
} from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import SigninForm from ".";
import { theme } from "@/themes";

describe("SigninForm", () => {
  let renderResult: RenderResult;
  let handleSignin: jest.Mock;

  beforeEach(() => {
    handleSignin = jest.fn();
    renderResult = render(
      <ThemeProvider theme={theme}>
        <SigninForm onSignin={handleSignin} />
      </ThemeProvider>
    );
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it("사용자명과 비밀번호를 입력한 뒤, onSignin이 호출된다", async () => {
    await act(async () => {
      const inputUsernameNode = screen.getByPlaceholderText(
        /사용자명/
      ) as HTMLInputElement;
      fireEvent.change(inputUsernameNode, { target: { value: "user" } });
      const inputPasswordNode = screen.getByPlaceholderText(
        /비밀번호/
      ) as HTMLInputElement;
      fireEvent.change(inputPasswordNode, { target: { value: "password" } });
      fireEvent.click(screen.getByText("로그인"));
    });

    expect(handleSignin).toHaveBeenCalledTimes(1);
  });

  it("사용자명 입력만으로는、변형 에러로 인한 onSignin이 호출되지 않는다", async () => {
    await act(async () => {
      const inputUsernameNode = screen.getByPlaceholderText(
        /사용자명/
      ) as HTMLInputElement;
      fireEvent.change(inputUsernameNode, { target: { value: "user" } });
      fireEvent.click(screen.getByText("로그인"));
    });

    expect(handleSignin).toHaveBeenCalledTimes(0);
  });
});
