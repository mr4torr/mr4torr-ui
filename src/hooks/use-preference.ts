import { useContext } from "react";
import {
  PreferencesContext,
  type PreferencesContextProps,
} from "../providers/preference-provider";

export function usePreference(): PreferencesContextProps {
  const context = useContext(PreferencesContext);

  if (context === undefined) {
    throw new Error("usePreference must be used within a PreferenceProvider");
  }

  return context;
}
