import { Field, FieldContent, FieldDescription, FieldLabel } from "../field";

export function FieldGroup({
    name,
    label,
    children,
    help,
    meta,
}: {
    name: string;
    label?: string;
    help?: string;
    children: React.ReactNode;
    meta: { errors: { message: string }[]; isValid: boolean };
}) {
    return (
        <Field className="-space-y-2">
            <FieldContent>{label && <FieldLabel htmlFor={name}>{label}</FieldLabel>}</FieldContent>
            <FieldContent>
                {children}
                {!meta.isValid &&
                    meta.errors.map((error) =>
                        error ? (
                            <p className="text-destructive text-sm" key={error.message}>
                                {error.message}
                            </p>
                        ) : (
                            ""
                        ),
                    )}
                {meta.isValid && help && <FieldDescription>{help}</FieldDescription>}
            </FieldContent>
        </Field>
    );
}
