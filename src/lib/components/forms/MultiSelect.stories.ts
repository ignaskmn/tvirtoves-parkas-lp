import type { Meta, StoryObj } from "@storybook/svelte";
import ContainerDecorator from "./ContainerDecorator.svelte";
import MultiSelect from "./MultiSelect.svelte";

const meta = {
  title: "Forms/MultiSelect",
  component: MultiSelect,
  decorators: [() => ({ Component: ContainerDecorator })],
  args: {
    label: "Label",
    placeholder: "Pasirinkite reikiamas",
  },
} satisfies Meta<MultiSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
