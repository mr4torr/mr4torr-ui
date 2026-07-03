import type { AnyFieldApi } from "@tanstack/react-form";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export { cva, type VariantProps } from "class-variance-authority";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formFieldParameters(field: AnyFieldApi, source: any = {}) {
    return {
        id: field.name,
        name: field.name,
        onBlur: field.handleBlur,
        onChange: (e: any) => field.handleChange(e.target.value),
        value: field.state.value,
        ...source,
    };
}
