import * as React from "react";
import { ArrowBigDown, ArrowBigUp, HomeIcon, Plus } from "lucide-react";
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
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { ModeToggle } from "./mode-toggle";

import { NavLink } from "react-router";

import { receivingRoutes, boardingRoutes } from "@/lib/utils";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // const [activeItem, setActiveItem] = React.useState(boardingRoutes[0]);
  return (
    <Sidebar {...props} collapsible="icon" className="overflow-hidden">
      <SidebarHeader className="border-sidebar-border h-16 border-b">
        {/* <NavUser user={boardingRoutes.user} /> */}
        <ModeToggle />
      </SidebarHeader>

      <SidebarContent>
        {/* <DatePicker /> */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip={{
                    children: "Dashboard",
                    hidden: false,
                  }}
                  className="px-2.5 md:px-2"
                >
                  <NavLink to="/">
                    <HomeIcon />
                    <span>Dashboard</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator className="mx-0" />
        <SidebarGroup>
          <SidebarGroupLabel>
            <ArrowBigUp /> Expedição
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {boardingRoutes.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={{
                      children: item.title,
                      hidden: false,
                    }}
                    className="px-2.5 md:px-2"
                  >
                    <NavLink to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator className="mx-0" />
        <SidebarGroup>
          <SidebarGroupLabel>
            <ArrowBigDown /> Recebimento
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {receivingRoutes.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={{
                      children: item.title,
                      hidden: false,
                    }}
                    className="px-2.5 md:px-2"
                  >
                    <NavLink to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* <Calendars calendars={boardingRoutes.calendars} /> */}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Plus />
              <span>New Calendar</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
