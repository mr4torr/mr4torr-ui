import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@mr4torr/ui/components/table";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    title: "Organism/Table",
    component: Table,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const INVOICES = [
    { id: "INV-001", status: "Paga", method: "Cartão", amount: "R$ 2.500,00" },
    { id: "INV-002", status: "Pendente", method: "Boleto", amount: "R$ 1.800,00" },
    { id: "INV-003", status: "Paga", method: "Pix", amount: "R$ 3.200,00" },
];

export const Default: Story = {
    render: () => (
        <Table className="w-[32rem]">
            <TableCaption>Faturas recentes da organização.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Fatura</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Método</TableHead>
                    <TableHead className="text-right">Valor</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {INVOICES.map((invoice) => (
                    <TableRow key={invoice.id}>
                        <TableCell className="font-medium">{invoice.id}</TableCell>
                        <TableCell>{invoice.status}</TableCell>
                        <TableCell>{invoice.method}</TableCell>
                        <TableCell className="text-right tabular-nums">{invoice.amount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right tabular-nums">R$ 7.500,00</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    ),
};
