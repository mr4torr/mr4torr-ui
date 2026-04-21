import type { AnyFieldApi } from "@tanstack/react-form";
import { Field, FieldContent, FieldDescription, FieldLabel } from "../field";

interface FieldGroupProps {
    field: AnyFieldApi;
    label?: string;
    help?: string;
    hint?: React.ReactNode;
    children: React.ReactNode;
}

export function FieldGroup({ field, label, children, help, hint }: FieldGroupProps) {
    const fieldName = field?.name;
    const fieldMeta = field?.state.meta;
    const errors = (fieldMeta?.errors ?? []) as any[];
    const isValid = fieldMeta?.isValid ?? true;

    return (
        <Field className="-space-y-2">
            {label && (
                <FieldContent className="relative">
                    {hint && <div className=" absolute right-0 top-0">{hint}</div>}
                    <FieldLabel htmlFor={fieldName}>{label}</FieldLabel>
                </FieldContent>
            )}
            <FieldContent>
                {children}
                {!isValid &&
                    errors.map((error) => {
                        const message = typeof error === "string" ? error : error?.message;
                        return message ? (
                            <p className="text-destructive text-sm" key={message}>
                                {message}
                            </p>
                        ) : null;
                    })}
                {isValid && help && <FieldDescription>{help}</FieldDescription>}
            </FieldContent>
        </Field>
    );
}
