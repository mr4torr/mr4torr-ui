import { Label } from "@mr4torr/ui/components/label";
import { Textarea } from "@mr4torr/ui/components/textarea";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    title: "Atom/Textarea",
    component: Textarea,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        placeholder: "Escreva sua mensagem...",
    },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => <Textarea className="w-80" {...args} />,
};

export const Disabled: Story = {
    render: (args) => <Textarea className="w-80" disabled {...args} />,
};

export const Invalid: Story = {
    render: (args) => <Textarea aria-invalid className="w-80" {...args} />,
};

export const WithLabel: Story = {
    render: () => (
        <div className="flex w-80 flex-col gap-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" placeholder="Conte um pouco sobre você..." />
        </div>
    ),
};
