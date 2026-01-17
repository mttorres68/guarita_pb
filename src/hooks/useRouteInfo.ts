import { useMemo } from "react";
import { useLocation } from "react-router";
import type { MovementType, Category } from "@/lib/types";
import { boardingRoutes, receivingRoutes } from "@/lib/utils";

export const useRouteInfo = (): { type: MovementType; category: Category } | null => {
  const location = useLocation();

  return useMemo((): { type: MovementType; category: Category } | null => {
    const allRoutes = [...boardingRoutes, ...receivingRoutes];
    const currentRoute = allRoutes.find((route) => route.url === location.pathname);

    if (currentRoute) {
      return {
        type: currentRoute.typeMovement,
        category: currentRoute.category,
      };
    }
    return null;
  }, [location.pathname]);
};
