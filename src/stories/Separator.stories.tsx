import { Separator } from "@mr4torr/ui/components/separator";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    title: "Atom/Separator",
    component: Separator,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        orientation: {
            control: "radio",
            options: ["horizontal", "vertical"],
        },
    },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
    render: () => (
        <div className="w-64">
            <div className="text-sm">Configurações da conta</div>
            <Separator className="my-3" />
            <div className="text-muted-foreground text-sm">Gerencie suas preferências.</div>
        </div>
    ),
};

export const Vertical: Story = {
    render: () => (
        <div className="flex h-6 items-center gap-3 text-sm">
            <span>Perfil</span>
            <Separator orientation="vertical" />
            <span>Faturamento</span>
            <Separator orientation="vertical" />
            <span>Equipe</span>
        </div>
    ),
};
