import { Button } from "@mr4torr/ui/components/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@mr4torr/ui/components/dropdown-menu";
import { GearIcon, SignOutIcon, UserIcon } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    title: "Organism/DropdownMenu",
    component: DropdownMenu,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <DropdownMenu defaultOpen>
            <DropdownMenuTrigger render={<Button variant="outline" />}>Minha conta</DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <UserIcon />
                        Perfil
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <GearIcon />
                        Configurações
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                    <SignOutIcon />
                    Sair
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
};
