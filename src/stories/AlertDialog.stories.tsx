import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@mr4torr/ui/components/alert-dialog";
import { Button } from "@mr4torr/ui/components/button";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    title: "Organism/AlertDialog",
    component: AlertDialog,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <AlertDialog defaultOpen>
            <AlertDialogTrigger render={<Button variant="destructive" />}>Excluir organização</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Excluir organização?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Esta ação é permanente. Todos os dados, reservas e membros serão removidos.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction variant="destructive">Excluir</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    ),
};
