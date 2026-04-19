import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/vite";

const config: StorybookConfig = {
    stories: [
        "../src/stories/**/*.mdx",
        "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    ],
    addons: [
        "@chromatic-com/storybook",
        "@storybook/addon-vitest",
        "@storybook/addon-a11y",
        "@storybook/addon-docs",
        "@storybook/addon-themes",
    ],
    framework: "@storybook/react-vite",
    viteFinal: async (config) => {
        // adiciona o plugin do tailwind no array de plugins do vite
        config.plugins = config.plugins || [];
        config.plugins.push(tailwindcss());
        return config;
    },
    docs: {
        defaultName: 'Documentation UI',
        // docsMode: true,
    }
};
export default config;
