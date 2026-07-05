import { Checkbox } from "@mr4torr/ui/components/checkbox";
import { Label } from "@mr4torr/ui/components/label";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    title: "Atom/Checkbox",
    component: Checkbox,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = { args: { defaultChecked: true } };

export const Disabled: Story = { args: { disabled: true } };

export const DisabledChecked: Story = { args: { disabled: true, defaultChecked: true } };

export const WithLabel: Story = {
    render: () => (
        <Label className="items-center">
            <Checkbox defaultChecked id="terms" />
            Aceito os termos de uso
        </Label>
    ),
};
