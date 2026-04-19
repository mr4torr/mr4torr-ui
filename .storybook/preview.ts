import type { Preview } from "@storybook/react-vite";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import React from "react";

import "../src/styles/themes/lime.css";
import "../src/styles/globals.css";

const preview: Preview = {
    decorators: [
        withThemeByDataAttribute({
            themes: {
                light: "light",
                dark: "dark", // A classe "dark" é a padrão que o Tailwind/shadcn usa
            },
            defaultTheme: "light",
            attributeName: 'data-theme',
        }),
        (Story) => {
            const isDarkMode = document.documentElement?.getAttribute("data-theme") === 'dark';
            React.useEffect(() => {
                const elem = document.documentElement.querySelectorAll('.sbdocs.sbdocs-preview.sb-unstyled')
                if (elem) {
                    elem.forEach(e => {
                        e.classList.add('bg-background!')
                    })
                }
            }, [isDarkMode]);

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
