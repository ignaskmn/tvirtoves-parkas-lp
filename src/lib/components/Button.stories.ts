import type { Meta, StoryObj } from "@storybook/svelte";
import Button from "./Button.svelte";

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    label: "Button",
    isActive: true,
  },
  argTypes: {
    isActive: { control: "boolean" },
  },
} satisfies Meta<Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
