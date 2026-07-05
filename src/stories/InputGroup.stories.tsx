import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
    InputGroupText,
} from "@mr4torr/ui/components/input-group";
import { MagnifyingGlassIcon, XIcon } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    title: "Molecule/InputGroup",
    component: InputGroup,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Search: Story = {
    render: () => (
        <InputGroup className="w-80">
            <InputGroupAddon>
                <MagnifyingGlassIcon />
            </InputGroupAddon>
            <InputGroupInput placeholder="Buscar reservas..." />
        </InputGroup>
    ),
};

export const WithButton: Story = {
    render: () => (
        <InputGroup className="w-80">
            <InputGroupInput defaultValue="Rio de Janeiro" placeholder="Destino" />
            <InputGroupAddon align="inline-end">
                <InputGroupButton size="icon-xs" variant="ghost">
                    <XIcon />
                </InputGroupButton>
            </InputGroupAddon>
        </InputGroup>
    ),
};

export const WithPrefixText: Story = {
    render: () => (
        <InputGroup className="w-80">
            <InputGroupAddon>
                <InputGroupText>https://</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="minha-agencia.tourops.app" />
        </InputGroup>
    ),
};
