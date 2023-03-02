import type { Meta, StoryObj } from "@storybook/svelte";
import Logo from "./Logo.svelte";

const meta = {
  title: "Components/Logo",
  component: Logo,
  args: {
    width: 100,
  },
} satisfies Meta<Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
