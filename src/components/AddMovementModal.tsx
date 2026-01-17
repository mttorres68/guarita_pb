import React, { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  addMovement,
  getProducts,
  getTransportCompanies,
  getSuppliers,
} from "@/services/mockApi";
import type { Movement, MovementType, Category, Product, TransportCompany, Supplier } from "@/lib/types";
import { MovementType as MovementTypeEnum } from "@/lib/types";
import { boardingRoutes } from "@/lib/utils";
import { useMovementForm } from "@/hooks/useMovementForm";

interface AddMovementModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  routeInfo: { type: MovementType; category: Category } | null;
}

export const AddMovementModal: React.FC<AddMovementModalProps> = ({
  open,
  onOpenChange,
  routeInfo,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [transportCompanies, setTransportCompanies] = useState<TransportCompany[]>([]);
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);

  const { newMov, handleInputChange, handleSelectChange, resetForm } = useMovementForm({
    routeInfo,
  });

  const fetchData = useCallback(async () => {
    try {
      const [prods, transps, forns] = await Promise.all([
        getProducts(),
        getTransportCompanies(),
        getSuppliers(),
      ]);
      setProducts(prods);
      setTransportCompanies(transps);
      setSuppliers(forns);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, []);

  useEffect(() => {
    if (open) {
      fetchData();
    }
  }, [open, fetchData]);

  const handleAddMovimentacao = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !newMov.licensePlate ||
      !newMov.cpf ||
      !newMov.product ||
      !newMov.carrier ||
      !newMov.supplier
    ) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      // Gerar número de ordem automaticamente se não fornecido
      const orderNumber = newMov.order || `${Date.now().toString().slice(-4)}`;

      await addMovement({
        ...newMov,
        order: orderNumber,
      } as Omit<Movement, "id" | "dateTime">);

      onOpenChange(false);
      resetForm();
      // Recarregar a página para atualizar a lista
      window.location.reload();
    } catch (error) {
      console.error("Failed to add movement", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">
            Adicionar Nova Movimentação
          </DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo para adicionar uma nova movimentação.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleAddMovimentacao}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            <div>
              <Label htmlFor="licensePlate">Placa do Veículo</Label>
              <Input
                id="licensePlate"
                name="licensePlate"
                onChange={handleInputChange}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="cpf">CPF do Motorista</Label>
              <Input
                id="cpf"
                name="cpf"
                onChange={handleInputChange}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="axles">Nº de Eixos</Label>
              <Input
                id="axles"
                name="axles"
                type="number"
                value={newMov.axles || 5}
                onChange={handleInputChange}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="carrier">Transportadora</Label>
              <Select
                value={newMov.carrier || ""}
                onValueChange={(value) => handleSelectChange("carrier", value)}
              >
                <SelectTrigger id="carrier" className="mt-1">
                  <SelectValue placeholder="Selecione..." />
                </SelectTrigger>
                <SelectContent>
                  {transportCompanies.map((t) => (
                    <SelectItem key={t.id} value={t.name}>
                      {t.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="supplier">Fornecedor/Fazenda</Label>
              <Select
                value={newMov.supplier || ""}
                onValueChange={(value) => handleSelectChange("supplier", value)}
              >
                <SelectTrigger id="supplier" className="mt-1">
                  <SelectValue placeholder="Selecione..." />
                </SelectTrigger>
                <SelectContent>
                  {suppliers.map((f) => (
                    <SelectItem key={f.id} value={f.name}>
                      {f.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="product">Produto</Label>
              <Select
                value={newMov.product || ""}
                onValueChange={(value) => handleSelectChange("product", value)}
              >
                <SelectTrigger id="product" className="mt-1">
                  <SelectValue placeholder="Selecione..." />
                </SelectTrigger>
                <SelectContent>
                  {products.map((p) => (
                    <SelectItem key={p.id} value={p.name}>
                      {p.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="instruction">Instrução</Label>
              <Input
                id="instruction"
                name="instruction"
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="secondary"
              onClick={() => onOpenChange(false)}
            >
              Cancelar
            </Button>
            <Button type="submit">Adicionar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
