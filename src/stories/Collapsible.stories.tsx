import { Button } from "@mr4torr/ui/components/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@mr4torr/ui/components/collapsible";
import { CaretUpDownIcon } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    title: "Molecule/Collapsible",
    component: Collapsible,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Collapsible className="flex w-72 flex-col gap-2" defaultOpen>
            <div className="flex items-center justify-between gap-4">
                <span className="font-medium text-sm">Integrações conectadas</span>
                <CollapsibleTrigger render={<Button size="icon-sm" variant="ghost" />}>
                    <CaretUpDownIcon />
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="flex flex-col gap-2">
                <div className="rounded-md border border-input px-3 py-2 text-sm">Stripe</div>
                <div className="rounded-md border border-input px-3 py-2 text-sm">Google Calendar</div>
                <div className="rounded-md border border-input px-3 py-2 text-sm">WhatsApp Business</div>
            </CollapsibleContent>
        </Collapsible>
    ),
};
