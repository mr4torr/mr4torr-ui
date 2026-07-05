import { Button } from "@mr4torr/ui/components/button";
import { Input } from "@mr4torr/ui/components/input";
import { Label } from "@mr4torr/ui/components/label";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@mr4torr/ui/components/sheet";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    title: "Organism/Sheet",
    component: Sheet,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Sheet defaultOpen>
            <SheetTrigger render={<Button variant="outline" />}>Editar perfil</SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Editar perfil</SheetTitle>
                    <SheetDescription>Atualize seus dados. Salve quando terminar.</SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-4 px-4">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="sheet-name">Nome</Label>
                        <Input defaultValue="Mailon Torres" id="sheet-name" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="sheet-role">Cargo</Label>
                        <Input defaultValue="Administrador" id="sheet-role" />
                    </div>
                </div>
                <SheetFooter>
                    <Button>Salvar alterações</Button>
                    <SheetClose render={<Button variant="outline" />}>Cancelar</SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    ),
};
