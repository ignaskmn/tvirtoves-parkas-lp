import type { Meta, StoryObj } from "@storybook/svelte";
import ContainerDecorator from "./ContainerDecorator.svelte";
import TextField from "./TextField.svelte";

const meta = {
  title: "Forms/TextField",
  component: TextField,
  decorators: [() => ({ Component: ContainerDecorator })],
  args: {
    label: "Label",
  },
} satisfies Meta<TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { name: "" },
};
