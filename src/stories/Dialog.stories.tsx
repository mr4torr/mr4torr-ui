import { Button } from "@mr4torr/ui/components/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@mr4torr/ui/components/dialog";
import { Input } from "@mr4torr/ui/components/input";
import { Label } from "@mr4torr/ui/components/label";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    title: "Organism/Dialog",
    component: Dialog,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Dialog defaultOpen>
            <DialogTrigger render={<Button variant="outline" />}>Convidar membro</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Convidar membro</DialogTitle>
                    <DialogDescription>Envie um convite por e-mail para entrar na organização.</DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="invite-email">E-mail</Label>
                    <Input id="invite-email" placeholder="colega@empresa.com" type="email" />
                </div>
                <DialogFooter showCloseButton>
                    <Button>Enviar convite</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    ),
};
