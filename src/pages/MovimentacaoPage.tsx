import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  getMovimentacoes,
  addMovimentacao,
  getProdutos,
  getTransportadoras,
  getFornecedores,
} from "../services/mockApi";
import {
  Movimentacao,
  MovimentacaoTipo,
  Categoria,
  Status,
  Produto,
  Transportadora,
  Fornecedor,
} from "../types";
import { statusText, statusColor } from "../utils/statusUtils";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/Table";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "../components/ui/Modal";
import { Label } from "../components/ui/Label";
import { Select } from "../components/ui/Select";
import { Skeleton } from "../components/ui/Skeleton";
import { PlusCircle, Search } from "../components/icons";

interface MovimentacaoPageProps {
  tipo: MovimentacaoTipo;
  categoria: Categoria;
  title: string;
}

const MovimentacaoPage: React.FC<MovimentacaoPageProps> = ({
  tipo,
  categoria,
  title,
}) => {
  const [movimentacoes, setMovimentacoes] = useState<Movimentacao[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [transportadoras, setTransportadoras] = useState<Transportadora[]>([]);
  const [fornecedores, setFornecedores] = useState<Fornecedor[]>([]);

  const [newMov, setNewMov] = useState<
    Partial<Omit<Movimentacao, "id" | "dataHora">>
  >({
    tipo,
    categoria,
    status:
      tipo === MovimentacaoTipo.EMBARQUE
        ? Status.AGUARD_EMBARQUE
        : Status.AGUARD_DESEMBARQUE,
    eixos: 5,
  });

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [movs, prods, transps, forns] = await Promise.all([
        getMovimentacoes({ tipo, categoria }),
        getProdutos(),
        getTransportadoras(),
        getFornecedores(),
      ]);
      setMovimentacoes(movs);
      setProdutos(prods);
      setTransportadoras(transps);
      setFornecedores(forns);
    } catch (error) {
      console.error("Failed to fetch data", error);
    } finally {
      setLoading(false);
    }
  }, [tipo, categoria]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewMov((prev) => ({
      ...prev,
      [name]: name === "eixos" ? parseInt(value) : value,
    }));
  };

  const handleAddMovimentacao = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !newMov.placa ||
      !newMov.cpf ||
      !newMov.produto ||
      !newMov.transportadora ||
      !newMov.fornecedor
    ) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      await addMovimentacao(newMov as Omit<Movimentacao, "id" | "dataHora">);
      setIsModalOpen(false);
      setNewMov({
        tipo,
        categoria,
        status:
          tipo === MovimentacaoTipo.EMBARQUE
            ? Status.AGUARD_EMBARQUE
            : Status.AGUARD_DESEMBARQUE,
        eixos: 5,
      });
      fetchData(); // Refresh list
    } catch (error) {
      console.error("Failed to add movimentacao", error);
    }
  };

  const filteredMovimentacoes = useMemo(() => {
    return movimentacoes.filter(
      (m) =>
        m.placa.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.cpf.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.numero.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [movimentacoes, searchTerm]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        <Button onClick={() => setIsModalOpen(true)}>
          <PlusCircle className="w-5 h-5 mr-2" />
          Nova Movimentação
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <Input
          type="text"
          placeholder="Buscar por placa, CPF ou número..."
          className="w-full md:w-1/3 pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="rounded-lg border border-gray-700 w-full overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Número</TableHead>
              <TableHead>Placa</TableHead>
              <TableHead>Produto</TableHead>
              <TableHead>Transportadora</TableHead>
              <TableHead>Data/Hora</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading
              ? Array.from({ length: 5 }).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <Skeleton className="h-5 w-20" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-5 w-24" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-5 w-32" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-5 w-32" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-5 w-40" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-6 w-32" />
                    </TableCell>
                  </TableRow>
                ))
              : filteredMovimentacoes.map((mov) => (
                  <TableRow key={mov.id} className="text-gray-200">
                    <TableCell >{mov.numero}</TableCell>
                    <TableCell className="font-medium">{mov.placa}</TableCell>
                    <TableCell>{mov.produto}</TableCell>
                    <TableCell>{mov.transportadora}</TableCell>
                    <TableCell>
                      {new Date(mov.dataHora).toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <Badge variant={statusColor(mov.status)}>
                        {statusText(mov.status)}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <form onSubmit={handleAddMovimentacao}>
            <ModalHeader>
              <h2 className="text-xl font-bold">Adicionar Nova Movimentação</h2>
            </ModalHeader>
            <ModalBody className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="placa">Placa do Veículo</Label>
                <Input
                  id="placa"
                  name="placa"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="cpf">CPF do Motorista</Label>
                <Input
                  id="cpf"
                  name="cpf"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="eixos">Nº de Eixos</Label>
                <Input
                  id="eixos"
                  name="eixos"
                  type="number"
                  value={newMov.eixos}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="transportadora">Transportadora</Label>
                <Select
                  id="transportadora"
                  name="transportadora"
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione...</option>
                  {transportadoras.map((t) => (
                    <option key={t.id} value={t.nome}>
                      {t.nome}
                    </option>
                  ))}
                </Select>
              </div>
              <div>
                <Label htmlFor="fornecedor">Fornecedor/Fazenda</Label>
                <Select
                  id="fornecedor"
                  name="fornecedor"
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione...</option>
                  {fornecedores.map((f) => (
                    <option key={f.id} value={f.nome}>
                      {f.nome}
                    </option>
                  ))}
                </Select>
              </div>
              <div>
                <Label htmlFor="produto">Produto</Label>
                <Select
                  id="produto"
                  name="produto"
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione...</option>
                  {produtos.map((p) => (
                    <option key={p.id} value={p.nome}>
                      {p.nome}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="instrucao">Instrução</Label>
                <Input
                  id="instrucao"
                  name="instrucao"
                  onChange={handleInputChange}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                type="button"
                variant="secondary"
                onClick={() => setIsModalOpen(false)}
              >
                Cancelar
              </Button>
              <Button type="submit">Adicionar</Button>
            </ModalFooter>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default MovimentacaoPage;
