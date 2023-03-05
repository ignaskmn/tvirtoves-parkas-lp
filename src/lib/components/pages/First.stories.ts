import type { Meta, StoryObj } from "@storybook/svelte";
import First from "./First.svelte";
import PageDecorator from "./PageDecorator.svelte";

const meta = {
  title: "Pages/First",
  component: First,
  decorators: [() => ({ Component: PageDecorator })],
  args: {},
} satisfies Meta<First>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
