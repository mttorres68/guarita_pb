import { ArrowBigDown, ArrowBigUp, Home, Package, Wheat } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  CalcarioIcon,
  CottonIcon,
  KCLIcon,
  SeedIcon,
  SoyBean,
  SSPIcon,
  UreiaIcon,
} from "./icons";
import { NavLink } from "react-router";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
];
const embarques = [
  {
    title: "Soja",
    url: "/emb/soja",
    icon: SoyBean,
  },
  {
    title: "Milho",
    url: "emb/milho",
    icon: Wheat,
  },
  {
    title: "Alg. Pluma",
    url: "/emb/alg-pluma",
    icon: CottonIcon,
  },
  {
    title: "Diversos",
    url: "emb/diversos",
    icon: Package,
  },
];
const recebimento = [
  {
    title: "SSP",
    url: "/rec/ssp",
    icon: SSPIcon,
  },
  {
    title: "KCL",
    url: "/rec/kcl",
    icon: KCLIcon,
  },
  {
    title: "Ureia",
    url: "/rec/ureia",
    icon: UreiaIcon,
  },
  {
    title: "Calcário",
    url: "/rec/calcario",
    icon: CalcarioIcon,
  },
  {
    title: "Sementes",
    url: "/rec/semente",
    icon: SeedIcon,
  },
  {
    title: "Diversos",
    url: "/rec/diversos",
    icon: Package,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Guarita</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
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
        {/* ROTAS EMBARQUES */}
        <SidebarGroup>
          <SidebarGroupLabel>
            <ArrowBigUp />
            Embarques
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {embarques.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
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
        {/* ROTAS RECEBIMENTO */}
        <SidebarGroup>
          <SidebarGroupLabel>
            <ArrowBigDown />
            Recebimento
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {recebimento.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
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
      </SidebarContent>
    </Sidebar>
  );
}
