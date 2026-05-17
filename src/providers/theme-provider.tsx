import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";
import {
  PreferenceProvider,
  type PreferencesProps,
} from "./preference-provider";

export function ThemeProvider({
  children,
  storagePreferenceKey,
  defaultPreferences,
  ...props
}: {
  children: ReactNode;
  storagePreferenceKey?: string;
  defaultPreferences?: Partial<PreferencesProps>;
} & React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <PreferenceProvider
        defaultPreferences={defaultPreferences}
        storagePreferenceKey={storagePreferenceKey}
      >
        {children}
      </PreferenceProvider>
    </NextThemesProvider>
  );
}

// biome-ignore lint/performance/noBarrelFile: .
export { useTheme } from "next-themes";
