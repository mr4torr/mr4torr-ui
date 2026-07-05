import { Button } from "@mr4torr/ui/components/button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@mr4torr/ui/components/card";
import { Input } from "@mr4torr/ui/components/input";
import { Label } from "@mr4torr/ui/components/label";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    title: "Molecule/Card",
    component: Card,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        size: {
            control: "radio",
            options: ["default", "sm"],
        },
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <Card className="w-80" {...args}>
            <CardHeader>
                <CardTitle>Plano Pro</CardTitle>
                <CardDescription>Tudo o que sua operação precisa para crescer.</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground">
                Assentos ilimitados, relatórios avançados e suporte prioritário.
            </CardContent>
            <CardFooter className="justify-end">
                <Button>Assinar</Button>
            </CardFooter>
        </Card>
    ),
};

export const WithAction: Story = {
    render: () => (
        <Card className="w-80">
            <CardHeader className="border-b">
                <CardTitle>Notificações</CardTitle>
                <CardDescription>Escolha como quer ser avisado.</CardDescription>
                <CardAction>
                    <Button size="sm" variant="ghost">
                        Editar
                    </Button>
                </CardAction>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                    <Label htmlFor="card-email">E-mail</Label>
                    <Input id="card-email" placeholder="voce@empresa.com" />
                </div>
            </CardContent>
        </Card>
    ),
};
