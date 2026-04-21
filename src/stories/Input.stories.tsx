import { Input } from "@mr4torr/ui/components/input";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const meta = {
    title: "Atom/Input",
    component: Input,
    tags: ["autodocs"],
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    // // More on argTypes: https://storybook.js.org/docs/api/argtypes
    // argTypes: {
    //     // backgroundColor: { control: "color" },
    // },
    // // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
    args: {
        onClick: fn(),
        disabled: false,
        "aria-invalid": false,
        placeholder: "Placeholder...",
    },
    argTypes: {
        type: {
            control: "select",
            options: ["text", "file"],
        },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { placeholder: "Default..." } };
export const Invalid: Story = { args: { placeholder: "Invalid...", "aria-invalid": true } };
export const Disabled: Story = { args: { placeholder: "Disabled...", disabled: true } };
export const File: Story = {
    args: { placeholder: "File...", type: "file" },
};
