import { Button } from "@mr4torr/ui/components/button";
import { Toaster } from "@mr4torr/ui/components/sonner";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { toast } from "sonner";

const meta = {
    title: "Feedback/Toaster",
    component: Toaster,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Button onClick={() => toast.success("Reserva confirmada")} variant="outline">
                Sucesso
            </Button>
            <Button onClick={() => toast.error("Falha ao processar o pagamento")} variant="outline">
                Erro
            </Button>
            <Button onClick={() => toast.info("Sincronização em andamento")} variant="outline">
                Info
            </Button>
            <Button onClick={() => toast.warning("Assentos quase esgotados")} variant="outline">
                Aviso
            </Button>
            <Toaster />
        </div>
    ),
};
