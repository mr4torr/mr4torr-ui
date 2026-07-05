import { Checkbox } from "@mr4torr/ui/components/checkbox";
import { Input } from "@mr4torr/ui/components/input";
import { Label } from "@mr4torr/ui/components/label";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    title: "Atom/Label",
    component: Label,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        children: "E-mail",
    },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithInput: Story = {
    render: () => (
        <div className="flex w-64 flex-col gap-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" placeholder="voce@empresa.com" type="email" />
        </div>
    ),
};

export const WithCheckbox: Story = {
    render: () => (
        <Label className="items-center">
            <Checkbox id="news" />
            Receber novidades por e-mail
        </Label>
    ),
};
