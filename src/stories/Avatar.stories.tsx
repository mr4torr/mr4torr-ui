import {
    Avatar,
    AvatarBadge,
    AvatarFallback,
    AvatarGroup,
    AvatarGroupCount,
    AvatarImage,
} from "@mr4torr/ui/components/avatar";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    title: "Atom/Avatar",
    component: Avatar,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        size: {
            control: "select",
            options: ["sm", "default", "lg"],
        },
    },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <Avatar {...args}>
            <AvatarImage alt="Ana Torres" src="https://i.pravatar.cc/80?img=5" />
            <AvatarFallback>AT</AvatarFallback>
        </Avatar>
    ),
};

export const Fallback: Story = {
    render: (args) => (
        <Avatar {...args}>
            <AvatarFallback>MT</AvatarFallback>
        </Avatar>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Avatar size="sm">
                <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <Avatar size="default">
                <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
                <AvatarFallback>LG</AvatarFallback>
            </Avatar>
        </div>
    ),
};

export const WithBadge: Story = {
    render: () => (
        <Avatar>
            <AvatarFallback>ON</AvatarFallback>
            <AvatarBadge className="size-2.5 bg-green-500" />
        </Avatar>
    ),
};

export const Group: Story = {
    render: () => (
        <AvatarGroup>
            <Avatar>
                <AvatarFallback>AT</AvatarFallback>
            </Avatar>
            <Avatar>
                <AvatarFallback>BR</AvatarFallback>
            </Avatar>
            <Avatar>
                <AvatarFallback>CL</AvatarFallback>
            </Avatar>
            <AvatarGroupCount>+3</AvatarGroupCount>
        </AvatarGroup>
    ),
};
