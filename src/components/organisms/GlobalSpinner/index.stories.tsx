import type { Meta, StoryObj } from "@storybook/react";
import GlobalSpinner from "./index";
import Button from "@/components/atoms/Button";
import GlobalSpinnerContextProvider, {
  useGlobalSpinnerActionsContext,
} from "@/contexts/GlobalSpinnerContext";

const meta = {
  title: "Organisms/GlobalSpinner",
  component: GlobalSpinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GlobalSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    const ChildComponent = () => {
      const setGlobalSpinner = useGlobalSpinnerActionsContext();
      const handleClick = () => {
        setGlobalSpinner(true);
        setTimeout(() => {
          setGlobalSpinner(false);
        }, 5000);
      };

      return (
        <>
          <GlobalSpinner />
          <Button onClick={handleClick}>스피너 표시</Button>
        </>
      );
    };

    return (
      <GlobalSpinnerContextProvider>
        <ChildComponent />
      </GlobalSpinnerContextProvider>
    );
  },
};
