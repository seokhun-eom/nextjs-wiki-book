import {
  render,
  screen,
  act,
  fireEvent,
  RenderResult,
} from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Dropdown from ".";
import { theme } from "@/themes";

describe("Dropdown", () => {
  let renderResult: RenderResult;
  let handleChange: jest.Mock;

  beforeEach(() => {
    handleChange = jest.fn();
    renderResult = render(
      <ThemeProvider theme={theme}>
        <Dropdown
          options={[
            { value: "used", label: "중고" },
            { value: "new", label: "신품" },
          ]}
          onChange={handleChange}
        />
      </ThemeProvider>
    );
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it("파일이 드롭되면 onDrop이 호출된다", async () => {
    await act(async () => {
      const element = await screen.findByTestId("dropdown-control");
      if (element) {
        fireEvent.mouseDown(element);
      }
    });

    const elements = await screen.getAllByTestId("dropdown-option");
    if (elements) {
      fireEvent.click(elements[0]);
    }

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
