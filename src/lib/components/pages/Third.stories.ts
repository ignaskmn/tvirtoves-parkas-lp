import type { Meta, StoryObj } from "@storybook/svelte";
import PageDecorator from "./PageDecorator.svelte";
import Third from "./Third.svelte";

const meta = {
  title: "Pages/Third",
  component: Third,
  decorators: [() => ({ Component: PageDecorator })],
  args: {},
} satisfies Meta<Third>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
