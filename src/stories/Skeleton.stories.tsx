import { Skeleton } from "@mr4torr/ui/components/skeleton";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    title: "Atom/Skeleton",
    component: Skeleton,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <Skeleton className="h-4 w-48" />,
};

export const Card: Story = {
    render: () => (
        <div className="flex w-72 items-center gap-4">
            <Skeleton className="size-12 rounded-full" />
            <div className="flex flex-1 flex-col gap-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
            </div>
        </div>
    ),
};
