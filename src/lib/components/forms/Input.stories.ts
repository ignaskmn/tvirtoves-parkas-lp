import type { Meta, StoryObj } from "@storybook/svelte";
import Input from "./Input.svelte";
import ContainerDecorator from "./ContainerDecorator.svelte";

const meta = {
  title: "Forms/Input",
  component: Input,
  decorators: [() => ({ Component: ContainerDecorator })],
  args: {
    label: "Label",
    placeholder: "Placeholder",
  },
} satisfies Meta<Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "",
  },
};
