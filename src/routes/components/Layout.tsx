import React, { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";
import { useRouteInfo } from "@/hooks/useRouteInfo";
import { AddMovementModal } from "@/components/AddMovementModal";
import { LayoutHeader } from "@/components/LayoutHeader";

const Layout: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const routeInfo = useRouteInfo();

  return (
    <>
      <ThemeProvider>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <LayoutHeader
              routeInfo={routeInfo}
              onOpenModal={() => setIsModalOpen(true)}
            />
            <div className="flex flex-1 flex-col gap-4 p-4">
              <Outlet />
            </div>
          </SidebarInset>
        </SidebarProvider>

        <AddMovementModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          routeInfo={routeInfo}
        />
      </ThemeProvider>
    </>
  );
};

export default Layout;
