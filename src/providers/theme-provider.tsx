import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";
import { PreferenceProvider } from "./preference-provider";

export function ThemeProvider({
  children,
  storagePreferenceKey,
  ...props
}: { children: ReactNode, storagePreferenceKey?: string } & React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <PreferenceProvider storagePreferenceKey={storagePreferenceKey}>{children}</PreferenceProvider>
    </NextThemesProvider>
  );
}

// biome-ignore lint/performance/noBarrelFile: .
export { useTheme } from "next-themes";
