import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { DateRangePicker } from "@/components/date-ranger";
import { PlusCircle } from "@/components/icons";
import type { MovementType, Category } from "@/lib/types";

interface LayoutHeaderProps {
  routeInfo: { type: MovementType; category: Category } | null;
  onOpenModal: () => void;
}

export const LayoutHeader: React.FC<LayoutHeaderProps> = ({
  routeInfo,
  onOpenModal,
}) => {
  return (
    <header className="sticky top-0 flex shrink-0 items-center gap-2 border-b p-4">
      <SidebarTrigger className="-ml-1" />
      <Separator
        orientation="vertical"
        className="mr-2 data-[orientation=vertical]:h-4"
      />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>
              <DateRangePicker />
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {routeInfo && (
        <div className="ml-auto">
          <Button onClick={onOpenModal}>
            <PlusCircle className="w-5 h-5 mr-2" />
            Nova Movimentação
          </Button>
        </div>
      )}
    </header>
  );
};
