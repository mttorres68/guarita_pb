import {
  Movimentacao,
  Status,
  MovimentacaoTipo,
  Categoria,
  Produto,
  Transportadora,
  Fornecedor,
} from "../types";

let mockMovimentacoes: Movimentacao[] = [
  {
    id: "1",
    numero: "1001",
    tipo: MovimentacaoTipo.RECEBIMENTO,
    categoria: "REC_KCL" as Categoria,
    placa: "ROR2F70",
    cpf: "81649231334",
    eixos: 5,
    transportadora: "SARTCO",
    fornecedor: "ADM",
    produto: "KCL 00-00-60 GR",
    dataHora: new Date().toISOString(),
    status: Status.DESCARREGANDO,
  },
  {
    id: "2",
    numero: "1002",
    tipo: MovimentacaoTipo.RECEBIMENTO,
    categoria: "REC_KCL" as Categoria,
    placa: "RCF5C49",
    cpf: "03543506331",
    eixos: 6,
    transportadora: "SARTCO",
    fornecedor: "ADM",
    produto: "KCL 00-00-60 GR",
    dataHora: new Date().toISOString(),
    status: Status.DESCARREGANDO,
  },
  {
    id: "3",
    numero: "1003",
    tipo: MovimentacaoTipo.RECEBIMENTO,
    categoria: "REC_KCL" as Categoria,
    placa: "ROJ0J81",
    cpf: "60831194308",
    eixos: 5,
    transportadora: "SARTCO",
    fornecedor: "ADM",
    produto: "KCL 00-00-60 GR",
    dataHora: new Date(
      new Date().setDate(new Date().getDate() - 1)
    ).toISOString(),
    status: Status.AGUARD_DESEMBARQUE,
  },
  {
    id: "4",
    numero: "2001",
    tipo: MovimentacaoTipo.RECEBIMENTO,
    categoria: "REC_CALCARIO" as Categoria,
    placa: "ROC4B45",
    cpf: "60475682386",
    eixos: 7,
    transportadora: "GUERRA TRASP.",
    fornecedor: "CALTINS",
    produto: "CALCARIO DOLOMITICO",
    dataHora: new Date().toISOString(),
    status: Status.DESCARREGANDO,
  },
  {
    id: "5",
    numero: "2002",
    tipo: MovimentacaoTipo.RECEBIMENTO,
    categoria: "REC_CALCARIO" as Categoria,
    placa: "SMN5C95",
    cpf: "00450796531",
    eixos: 9,
    transportadora: "GUERRA TRASP.",
    fornecedor: "CALTINS",
    produto: "CALCARIO DOLOMITICO",
    dataHora: new Date(
      new Date().setDate(new Date().getDate() - 2)
    ).toISOString(),
    status: Status.FINALIZADO,
  },
  {
    id: "6",
    numero: "3001",
    tipo: MovimentacaoTipo.EMBARQUE,
    categoria: "EMB_SOJA" as Categoria,
    placa: "ABC1D23",
    cpf: "12345678901",
    eixos: 5,
    transportadora: "AGROCARGO",
    fornecedor: "FAZENDA SOL NASCENTE",
    produto: "SOJA EM GRÃOS",
    dataHora: new Date(
      new Date().setDate(new Date().getDate() - 1)
    ).toISOString(),
    status: Status.EMBARCANDO,
  },
  {
    id: "7",
    numero: "3002",
    tipo: MovimentacaoTipo.EMBARQUE,
    categoria: "EMB_SOJA" as Categoria,
    placa: "DEF4E56",
    cpf: "23456789012",
    eixos: 6,
    transportadora: "AGROCARGO",
    fornecedor: "FAZENDA LUA CHEIA",
    produto: "SOJA EM GRÃOS",
    dataHora: new Date().toISOString(),
    status: Status.AGUARD_EMBARQUE,
  },
  {
    id: "8",
    numero: "4001",
    tipo: MovimentacaoTipo.EMBARQUE,
    categoria: "EMB_MILHO" as Categoria,
    placa: "GHI7F89",
    cpf: "34567890123",
    eixos: 9,
    transportadora: "TRANSGRAOS",
    fornecedor: "SÍTIO MILHARAL",
    produto: "MILHO SAFRINHA",
    dataHora: new Date(
      new Date().setDate(new Date().getDate() - 3)
    ).toISOString(),
    status: Status.FINALIZADO,
  },
];

const mockProdutos: Produto[] = [
  { id: "1", nome: "KCL 00-00-60 GR" },
  { id: "2", nome: "CALCARIO DOLOMITICO" },
  { id: "3", nome: "GESSO AGRIC." },
  { id: "4", nome: "SOJA EM GRÃOS" },
  { id: "5", nome: "MILHO SAFRINHA" },
];

const mockTransportadoras: Transportadora[] = [
  { id: "1", nome: "SARTCO" },
  { id: "2", nome: "GUERRA TRASP." },
  { id: "3", nome: "AGROCARGO" },
  { id: "4", nome: "TRANSGRAOS" },
];

const mockFornecedores: Fornecedor[] = [
  { id: "1", nome: "ADM" },
  { id: "2", nome: "CALTINS" },
  { id: "3", nome: "INPASA" },
  { id: "4", nome: "FAZENDA SOL NASCENTE" },
];

const simulateDelay = <T>(data: T): Promise<T> => {
  return new Promise((resolve) => setTimeout(() => resolve(data), 500));
};

export const getMovimentacoes = (filters?: {
  tipo?: MovimentacaoTipo;
  categoria?: Categoria;
  search?: string;
}) => {
  let results = [...mockMovimentacoes];
  if (filters?.tipo) {
    results = results.filter((m) => m.tipo === filters.tipo);
  }
  if (filters?.categoria) {
    results = results.filter((m) => m.categoria === filters.categoria);
  }
  if (filters?.search) {
    const searchTerm = filters.search.toLowerCase();
    results = results.filter(
      (m) =>
        m.placa.toLowerCase().includes(searchTerm) ||
        m.cpf.toLowerCase().includes(searchTerm) ||
        m.numero.toLowerCase().includes(searchTerm)
    );
  }
  return simulateDelay(
    results.sort(
      (a, b) => new Date(b.dataHora).getTime() - new Date(a.dataHora).getTime()
    )
  );
};

export const getDashboardStats = () => {
  const stats = mockMovimentacoes.reduce((acc, mov) => {
    if (!acc[mov.status]) {
      acc[mov.status] = 0;
    }
    acc[mov.status]++;
    return acc;
  }, {} as Record<Status, number>);
  return simulateDelay(stats);
};

export const getProdutos = () => simulateDelay(mockProdutos);
export const getTransportadoras = () => simulateDelay(mockTransportadoras);
export const getFornecedores = () => simulateDelay(mockFornecedores);

export const addMovimentacao = (mov: Omit<Movimentacao, "id" | "dataHora">) => {
  const newMov: Movimentacao = {
    ...mov,
    id: (mockMovimentacoes.length + 1).toString(),
    dataHora: new Date().toISOString(),
  };
  mockMovimentacoes.unshift(newMov);
  return simulateDelay(newMov);
};
