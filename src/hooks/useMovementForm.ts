import { useState, useEffect } from "react";
import type { Movement, MovementType, Category } from "@/lib/types";
import { Status, MovementType as MovementTypeEnum } from "@/lib/types";
import { boardingRoutes } from "@/lib/utils";

interface UseMovementFormProps {
  routeInfo: { type: MovementType; category: Category } | null;
}

export const useMovementForm = ({ routeInfo }: UseMovementFormProps) => {
  const [newMov, setNewMov] = useState<Partial<Omit<Movement, "id" | "dateTime">>>({
    type: routeInfo?.type || MovementTypeEnum.EMBARQUE,
    category: routeInfo?.category || boardingRoutes[0].category,
    status:
      routeInfo?.type === MovementTypeEnum.EMBARQUE
        ? Status.AGUARD_EMBARQUE
        : Status.AGUARD_DESEMBARQUE,
    axles: 5,
  });

  // Atualizar tipo e categoria quando a rota mudar
  useEffect(() => {
    if (routeInfo) {
      setNewMov((prev) => {
        // Só atualiza se os valores realmente mudaram
        if (prev.type === routeInfo.type && prev.category === routeInfo.category) {
          return prev;
        }
        return {
          ...prev,
          type: routeInfo.type,
          category: routeInfo.category,
          status:
            routeInfo.type === MovementTypeEnum.EMBARQUE
              ? Status.AGUARD_EMBARQUE
              : Status.AGUARD_DESEMBARQUE,
        };
      });
    }
  }, [routeInfo?.type, routeInfo?.category]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewMov((prev) => ({
      ...prev,
      [name]: name === "axles" ? parseInt(value) : value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setNewMov((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setNewMov({
      type: routeInfo?.type || MovementTypeEnum.EMBARQUE,
      category: routeInfo?.category || boardingRoutes[0].category,
      status:
        routeInfo?.type === MovementTypeEnum.EMBARQUE
          ? Status.AGUARD_EMBARQUE
          : Status.AGUARD_DESEMBARQUE,
      axles: 5,
    });
  };

  return {
    newMov,
    setNewMov,
    handleInputChange,
    handleSelectChange,
    resetForm,
  };
};
