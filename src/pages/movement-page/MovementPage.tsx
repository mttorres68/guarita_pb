import React, { useState, useEffect, useMemo, useCallback } from "react";
import { getMovements, getTransportCompanies } from "@/services/mockApi";
import type { Category, MovementType, Movement, TransportCompany } from "@/lib/types";
import { Status } from "@/lib/types";
import { statusText } from "@/utils/statusUtils";
import { Label } from "@/components/ui/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";

interface MovementPageProps {
  typeMovement: MovementType;
  category: Category;
  title: string;
}

const MovementPage: React.FC<MovementPageProps> = ({
  typeMovement,
  category,
  title,
}) => {
  const [movements, setMovements] = useState<Movement[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<Status | "all">("all");
  const [carrierFilter, setCarrierFilter] = useState<string>("all");
  const [transportCompanies, setTransportCompanies] = useState<TransportCompany[]>([]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [movs, carriers] = await Promise.all([
        getMovements({ type: typeMovement, category }),
        getTransportCompanies(),
      ]);
      setMovements(movs);
      setTransportCompanies(carriers);
    } catch (error) {
      console.error("Failed to fetch data", error);
    } finally {
      setLoading(false);
    }
  }, [typeMovement, category]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filteredMovements = useMemo(() => {
    return movements.filter((m) => {
      // Filtro de status
      const matchesStatus =
        statusFilter === "all" || m.status === statusFilter;

      // Filtro de transportadora
      const matchesCarrier =
        carrierFilter === "all" || m.carrier === carrierFilter;

      return matchesStatus && matchesCarrier;
    });
  }, [movements, statusFilter, carrierFilter]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-end">
        <div className="flex gap-4">
          <div className="flex flex-col gap-2 min-w-[200px]">
            <Label htmlFor="status-filter">Status</Label>
            <Select
              value={statusFilter}
              onValueChange={(value) => setStatusFilter(value as Status | "all")}
            >
              <SelectTrigger id="status-filter" className="w-full">
                <SelectValue placeholder="Todos os status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os status</SelectItem>
                <SelectItem value={Status.AGUARD_EMBARQUE}>
                  {statusText(Status.AGUARD_EMBARQUE)}
                </SelectItem>
                <SelectItem value={Status.AGUARD_DESEMBARQUE}>
                  {statusText(Status.AGUARD_DESEMBARQUE)}
                </SelectItem>
                <SelectItem value={Status.EMBARCANDO}>
                  {statusText(Status.EMBARCANDO)}
                </SelectItem>
                <SelectItem value={Status.DESCARREGANDO}>
                  {statusText(Status.DESCARREGANDO)}
                </SelectItem>
                <SelectItem value={Status.FINALIZADO}>
                  {statusText(Status.FINALIZADO)}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2 min-w-[200px]">
            <Label htmlFor="carrier-filter">Transportadora</Label>
            <Select
              value={carrierFilter}
              onValueChange={(value) => setCarrierFilter(value)}
            >
              <SelectTrigger id="carrier-filter" className="w-full">
                <SelectValue placeholder="Todas as transportadoras" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as transportadoras</SelectItem>
                {transportCompanies.map((carrier) => (
                  <SelectItem key={carrier.id} value={carrier.name}>
                    {carrier.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <DataTable columns={columns} data={filteredMovements} loading={loading} />
    </div>
  );
};

export default MovementPage;
