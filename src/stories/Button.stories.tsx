import { Button } from "@mr4torr/ui/components/button";
import { UserCheckIcon } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const Icon = () => <UserCheckIcon weight="duotone" />;
const meta = {
    title: "Atom/Button",
    component: Button,
    tags: ["autodocs"],
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        controls: { exclude: ["children"] },
        layout: "centered",
    },
    // // More on argTypes: https://storybook.js.org/docs/api/argtypes
    // argTypes: {
    //     // backgroundColor: { control: "color" },
    // },
    // // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
    args: {
        onClick: fn(),
        children: (
            <>
                <Icon /> "Button"{" "}
            </>
        ),
    },
    argTypes: {
        // 1. Mudando de select para radio inline
        variant: {
            control: "select",
            options: ["default", "outline", "secondary", "inverse", "ghost", "destructive", "link"],
        },
        size: {
            control: "select",
            options: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Outline: Story = { args: { variant: "outline" } };
export const Secondary: Story = { args: { variant: "secondary" } };
export const Inverse: Story = { args: { variant: "inverse" } };
export const Destructive: Story = { args: { variant: "destructive" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Link: Story = { args: { variant: "link" } };

export const IconDefault: Story = {
    args: { size: "icon", children: <Icon /> },
};
export const IconOutline: Story = {
    args: { variant: "outline", size: "icon", children: <Icon /> },
};
export const IconSecondary: Story = {
    args: { variant: "secondary", size: "icon", children: <Icon /> },
};
export const IconInverse: Story = {
    args: { variant: "inverse", size: "icon", children: <Icon /> },
};
export const IconDestructive: Story = {
    args: { variant: "destructive", size: "icon", children: <Icon /> },
};
export const IconGhost: Story = {
    args: { variant: "ghost", size: "icon", children: <Icon /> },
};
export const IconLink: Story = {
    args: { variant: "link", size: "icon", children: <Icon /> },
};
