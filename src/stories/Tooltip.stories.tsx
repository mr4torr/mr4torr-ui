import { Button } from "@mr4torr/ui/components/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@mr4torr/ui/components/tooltip";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    title: "Molecule/Tooltip",
    component: Tooltip,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <TooltipProvider>
            <Tooltip defaultOpen>
                <TooltipTrigger render={<Button variant="outline" />}>Passe o mouse</TooltipTrigger>
                <TooltipContent>Adiciona um novo membro à equipe</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    ),
};
