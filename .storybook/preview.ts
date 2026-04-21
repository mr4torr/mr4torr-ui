import { withThemeByDataAttribute } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react-vite";
import React from "react";

import "../src/styles/themes/lime.css";
import "./custom.css";

const preview: Preview = {
    decorators: [
        withThemeByDataAttribute({
            themes: {
                light: "light",
                dark: "dark", // A classe "dark" é a padrão que o Tailwind/shadcn usa
            },
            defaultTheme: "light",
            attributeName: "data-theme",
        }),
        (Story, ctx) => {
            // ctx.canvasElement
            //     .closest(".sb-main-centered.sb-show-main")
            //     ?.classList.add("bg-background");

            ctx.canvasElement
                .closest(".sbdocs.sbdocs-preview.sb-unstyled")
                ?.classList.add("bg-background!");

            return React.createElement(Story);
        },
    ],
    parameters: {
        backgrounds: {
            disable: true,
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: "todo",
        },
    },
};

export default preview;
