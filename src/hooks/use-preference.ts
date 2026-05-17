import { useContext } from "react";
import {
  PreferencesContext,
  type PreferencesContextProps,
} from "../providers/preference-provider";

export function usePreference(): PreferencesContextProps {
  const context = useContext(PreferencesContext);

  if (context === undefined) {
    throw new Error("usePreferences must be used within a ThemeProvider");
  }

  return context;
}
