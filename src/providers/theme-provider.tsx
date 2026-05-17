import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";
import { PreferenceProvider } from "./preference-provider";

export function ThemeProvider({
  children,
  ...props
}: { children: ReactNode } & React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <PreferenceProvider>{children}</PreferenceProvider>
    </NextThemesProvider>
  );
}

// biome-ignore lint/performance/noBarrelFile: .
export { useTheme } from "next-themes";
