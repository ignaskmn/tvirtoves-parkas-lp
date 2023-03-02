import type { Meta, StoryObj } from "@storybook/svelte";
import Item from "./Item.svelte";

const meta = {
  title: "Examples/Item",
  component: Item,
  args: {
    label: "",
    slug: "",
  },
} satisfies Meta<Item>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Link: Story = {
  args: {
    label: "Link",
    slug: "link",
  },
};

export const Button: Story = {
  args: {
    label: "Button",
  },
};
