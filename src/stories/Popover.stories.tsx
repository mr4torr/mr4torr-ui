import { Button } from "@mr4torr/ui/components/button";
import { Input } from "@mr4torr/ui/components/input";
import { Label } from "@mr4torr/ui/components/label";
import {
    Popover,
    PopoverContent,
    PopoverDescription,
    PopoverHeader,
    PopoverTitle,
    PopoverTrigger,
} from "@mr4torr/ui/components/popover";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    title: "Molecule/Popover",
    component: Popover,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Popover defaultOpen>
            <PopoverTrigger render={<Button variant="outline" />}>Editar dimensões</PopoverTrigger>
            <PopoverContent>
                <PopoverHeader>
                    <PopoverTitle>Dimensões</PopoverTitle>
                    <PopoverDescription>Ajuste a largura e a altura.</PopoverDescription>
                </PopoverHeader>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="width">Largura</Label>
                    <Input defaultValue="320px" id="width" />
                </div>
            </PopoverContent>
        </Popover>
    ),
};
