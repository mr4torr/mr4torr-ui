import {
  createContext,
  type ReactNode,
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

interface PreferencesProps {
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

const STORAGE_KEY = "app-preferences";

const defaultPreferences: PreferencesProps = {
  fontSize: "default",
  contrast: "neutral",
  themeColor: "lime",
};

export function PreferenceProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<PreferencesProps>(() => {
    if (typeof window === "undefined") {
      return defaultPreferences;
    }
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : defaultPreferences;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));

    const root = window.document.documentElement;

    // Remove previous attributes
    root.removeAttribute("data-font-size");
    root.removeAttribute("data-contrast");
    root.removeAttribute("data-theme-color");

    // Add new attributes
    root.setAttribute("data-font-size", preferences.fontSize);
    root.setAttribute("data-contrast", preferences.contrast);
    root.setAttribute("data-theme-color", preferences.themeColor);
  }, [preferences]);

  const updateFontSize = (fontSize: FontSize) => {
    setPreferences((prev) => ({ ...prev, fontSize }));
  };

  const updateContrast = (contrast: Contrast) => {
    setPreferences((prev) => ({ ...prev, contrast }));
  };

  const updateThemeColor = (themeColor: ThemeColor) => {
    setPreferences((prev) => ({ ...prev, themeColor }));
  };

  const updateTheme = (theme: "dark" | "light") => {
    setPreferences((prev) => ({ ...prev, theme }));
  };

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
