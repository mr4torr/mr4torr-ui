import {
  createContext,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export type FontSize = "compact" | "default" | "comfortable";
export type Contrast =
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "taupe"
  | "mist"
  | "olive";

export type ThemeColor =
  | "amber"
  | "blue"
  | "cyan"
  | "emerald"
  | "fuchsia"
  | "indigo"
  | "lime"
  | "orange"
  | "pink"
  | "purple"
  | "red"
  | "rose"
  | "sky"
  | "teal"
  | "violet"
  | "yellow";

export interface PreferencesProps {
  contrast: Contrast;
  fontSize: FontSize;
  themeColor: ThemeColor;
}

export interface PreferencesContextProps extends PreferencesProps {
  updateContrast: (contrast: Contrast) => void;
  updateFontSize: (fontSize: FontSize) => void;
  updateThemeColor: (themeColor: ThemeColor) => void;
}

export const PreferencesContext = createContext<
  PreferencesContextProps | undefined
>(undefined);

const _defaultPreferences: PreferencesProps = {
  fontSize: "default",
  contrast: "neutral",
  themeColor: "lime",
};

export function PreferenceProvider({
  children,
  storagePreferenceKey = "ui-preferences",
  defaultPreferences = _defaultPreferences,
}: {
  children: ReactNode;
  defaultPreferences?: Partial<PreferencesProps>;
  storagePreferenceKey?: string;
}) {
  const defaultPref = { ..._defaultPreferences, ...defaultPreferences };
  const [preferences, setPreferences] = useState<PreferencesProps>(() => {
    if (typeof window === "undefined") {
      return defaultPref;
    }
    const stored = localStorage.getItem(storagePreferenceKey);
    return stored ? JSON.parse(stored) : defaultPref;
  });

  const handlePreferenceStorage = useCallback(() => {
    localStorage.setItem(storagePreferenceKey, JSON.stringify(preferences));

    const root = window.document.documentElement;

    // Remove previous attributes
    root.removeAttribute("data-font-size");
    root.removeAttribute("data-contrast");
    root.removeAttribute("data-theme-color");

    // Add new attributes
    root.setAttribute("data-font-size", preferences.fontSize);
    root.setAttribute("data-contrast", preferences.contrast);
    root.setAttribute("data-theme-color", preferences.themeColor);
  }, [preferences, storagePreferenceKey]);

  useEffect(() => {
    handlePreferenceStorage();
  }, [preferences, handlePreferenceStorage]);

  useEffect(() => {
    window.addEventListener("storage", handlePreferenceStorage);
    return () => window.removeEventListener("storage", handlePreferenceStorage);
  }, [handlePreferenceStorage]);

  const updateFontSize = useCallback((fontSize: FontSize) => {
    setPreferences((prev) => ({ ...prev, fontSize }));
  }, []);

  const updateContrast = useCallback((contrast: Contrast) => {
    setPreferences((prev) => ({ ...prev, contrast }));
  }, []);

  const updateThemeColor = useCallback((themeColor: ThemeColor) => {
    setPreferences((prev) => ({ ...prev, themeColor }));
  }, []);

  const updateTheme = useCallback((theme: "dark" | "light") => {
    setPreferences((prev) => ({ ...prev, theme }));
  }, []);

  const value = useMemo(
    () => ({
      ...preferences,
      updateFontSize,
      updateContrast,
      updateTheme,
      updateThemeColor,
    }),
    [preferences]
  );

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}
