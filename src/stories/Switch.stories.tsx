import { Label } from "@mr4torr/ui/components/label";
import { Switch } from "@mr4torr/ui/components/switch";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    title: "Atom/Switch",
    component: Switch,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        size: {
            control: "radio",
            options: ["sm", "default"],
        },
    },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = { args: { defaultChecked: true } };

export const Disabled: Story = { args: { disabled: true } };

export const Small: Story = { args: { size: "sm", defaultChecked: true } };

export const WithLabel: Story = {
    render: () => (
        <Label className="items-center">
            <Switch defaultChecked id="notifications" />
            Notificações por e-mail
        </Label>
    ),
};
