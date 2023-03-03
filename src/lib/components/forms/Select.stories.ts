import type { Meta, StoryObj } from "@storybook/svelte";
import ContainerDecorator from "./ContainerDecorator.svelte";
import Select from "./Select.svelte";

const meta = {
  title: "Forms/Select",
  component: Select,
  decorators: [() => ({ Component: ContainerDecorator })],
  args: {
    label: "Label",
    placeholder: "Pasirinkite",
  },
} satisfies Meta<Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
