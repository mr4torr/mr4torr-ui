import {
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
    ComboboxRoot,
    ComboboxTrigger,
} from "@mr4torr/ui/components/combobox";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

const OPTIONS = [
    { id: "rio", name: "Rio de Janeiro" },
    { id: "sp", name: "São Paulo" },
    { id: "bsb", name: "Brasília" },
    { id: "ssa", name: "Salvador" },
    { id: "poa", name: "Porto Alegre" },
];

const meta = {
    title: "Molecule/Combobox",
    component: ComboboxRoot,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof ComboboxRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

function DestinationCombobox() {
    const [value, setValue] = useState<string | null>("rio");
    const [query, setQuery] = useState("Rio de Janeiro");
    const filtered = OPTIONS.filter((opt) => opt.name.toLowerCase().includes(query.toLowerCase()));

    return (
        <ComboboxRoot onValueChange={(next) => setValue((next as string | null) ?? null)} value={value}>
            <div className="relative w-72">
                <ComboboxInput
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Buscar destino..."
                    value={query}
                />
                <ComboboxTrigger />
            </div>
            <ComboboxContent>
                {filtered.length === 0 && <ComboboxEmpty>Nenhum destino encontrado</ComboboxEmpty>}
                {filtered.length > 0 && (
                    <ComboboxList>
                        {filtered.map((opt) => (
                            <ComboboxItem key={opt.id} value={opt.id}>
                                {opt.name}
                            </ComboboxItem>
                        ))}
                    </ComboboxList>
                )}
            </ComboboxContent>
        </ComboboxRoot>
    );
}

export const Default: Story = {
    render: () => <DestinationCombobox />,
};
