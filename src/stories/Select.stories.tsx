import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@mr4torr/ui/components/select";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    title: "Molecule/Select",
    component: Select,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Select>
            <SelectTrigger className="w-56">
                <SelectValue placeholder="Selecione um plano" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Planos</SelectLabel>
                    <SelectItem value="starter">Starter</SelectItem>
                    <SelectItem value="pro">Pro</SelectItem>
                    <SelectItem value="scale">Scale</SelectItem>
                    <SelectItem disabled value="enterprise">
                        Enterprise (em breve)
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    ),
};

export const WithValue: Story = {
    render: () => (
        <Select defaultValue="pro">
            <SelectTrigger className="w-56">
                <SelectValue placeholder="Selecione um plano" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="starter">Starter</SelectItem>
                <SelectItem value="pro">Pro</SelectItem>
                <SelectItem value="scale">Scale</SelectItem>
            </SelectContent>
        </Select>
    ),
};
