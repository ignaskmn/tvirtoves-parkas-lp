import type { Meta, StoryObj } from "@storybook/svelte";
import Pagination from "./Pagination.svelte";

const meta = {
  title: "Admin/Pagination",
  component: Pagination,
  args: {
    page: 0,
    count: 122,
  },
} satisfies Meta<Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
