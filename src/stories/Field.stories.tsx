import { Field, FieldContent, FieldDescription, FieldLabel } from "@mr4torr/ui/components/field";
import { Input } from "@mr4torr/ui/components/input";
import { Switch } from "@mr4torr/ui/components/switch";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    title: "Molecule/Field",
    component: Field,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
    render: () => (
        <Field className="w-80">
            <FieldLabel htmlFor="company">Nome da empresa</FieldLabel>
            <Input id="company" placeholder="TourOps Viagens" />
            <FieldDescription>Aparece nos documentos e faturas.</FieldDescription>
        </Field>
    ),
};

export const Horizontal: Story = {
    render: () => (
        <Field className="w-80" orientation="horizontal">
            <FieldContent>
                <FieldLabel htmlFor="marketing">E-mails de marketing</FieldLabel>
                <FieldDescription>Novidades, dicas e ofertas ocasionais.</FieldDescription>
            </FieldContent>
            <Switch id="marketing" />
        </Field>
    ),
};

export const Invalid: Story = {
    render: () => (
        <Field className="w-80" data-invalid="true">
            <FieldLabel htmlFor="slug">Identificador</FieldLabel>
            <Input aria-invalid id="slug" defaultValue="tour ops" />
            <FieldDescription>Use apenas letras minúsculas e hífens.</FieldDescription>
        </Field>
    ),
};
