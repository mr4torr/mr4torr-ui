import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
} from "@mr4torr/ui/components/sidebar";
import { ChartBarIcon, CompassIcon, GearIcon, HouseIcon, UsersIcon } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
    title: "Organism/Sidebar",
    component: Sidebar,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <SidebarProvider className="min-h-0 w-auto">
            <Sidebar className="h-96 border-r" collapsible="none">
                <SidebarHeader>
                    <div className="flex items-center gap-2 px-2 py-1.5">
                        <div className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <CompassIcon weight="duotone" />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className="font-medium text-sm">TourOps</span>
                            <span className="text-muted-foreground text-xs">Plano Pro</span>
                        </div>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Plataforma</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton isActive>
                                        <HouseIcon />
                                        <span>Início</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton>
                                        <ChartBarIcon />
                                        <span>Relatórios</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton>
                                        <UsersIcon />
                                        <span>Equipe</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <GearIcon />
                                <span>Configurações</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
            </Sidebar>
        </SidebarProvider>
    ),
};
