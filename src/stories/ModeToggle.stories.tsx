import { ModeToggle } from "@mr4torr/ui/components/mode-toggle";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    title: "Molecule/ModeToggle",
    component: ModeToggle,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof ModeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <ModeToggle />,
};
