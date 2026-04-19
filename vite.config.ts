import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { glob } from "glob";
import { defineConfig } from "vite";

// Coleta todos os entry points de componentes, hooks e lib
const entries = Object.fromEntries(
    glob
        .sync("src/{components,hooks,lib}/**/*.{ts,tsx}", {
            ignore: [
                "**/*.test.*",
                "**/*.spec.*",
                "**/*.stories.*",
                "**/*.d.ts",
            ],
        })
        .map((file) => {
            // src/components/button.tsx -> components/button
            const key = file
                .replace(/^src\//, "")
                .replace(/\.(ts|tsx)$/, "");
            return [key, resolve(__dirname, file)];
        }),
);

// https://vite.dev/config/
export default defineConfig({
    plugins: [tailwindcss(), react()],
    build: {
        outDir: "./dist",
        lib: {
            entry: entries,
            formats: ["es"],
        },
        rollupOptions: {
            external: [
                "react",
                "react-dom",
                "react/jsx-runtime",
                "next-themes",
                /^@base-ui\/react/,
                /^@phosphor-icons\/react/,
                "class-variance-authority",
                "clsx",
                "tailwind-merge",
                "sonner",
                "zod",
            ],
            output: {
                preserveModules: false,
                entryFileNames: "[name].js",
            },
        },
        cssCodeSplit: true,
        minify: false,
    },
    resolve: {
        alias: {
            "@mr4torr/ui": resolve(__dirname, "src"),
        },
    },
});
