import {
  Status,
  MovementType,
  ReceiptCategory,
  BoardingCategory,
  type Movement,
  type Product,
  type TransportCompany,
  type Supplier,
  type Category,
} from "@/lib/types";

let mockMovements: Movement[] = [
  {
    id: "1",
    order: "1001",
    type: MovementType.RECEBIMENTO,
    category: ReceiptCategory.KCL,
    licensePlate: "ROR2F70",
    cpf: "81649231334",
    axles: 5,
    carrier: "SARTCO",
    supplier: "ADM",
    product: "KCL 00-00-60 GR",
    dateTime: new Date().toISOString(),
    status: Status.DESCARREGANDO,
  },
  {
    id: "2",
    order: "1002",
    type: MovementType.RECEBIMENTO,
    category: ReceiptCategory.KCL,
    licensePlate: "RCF5C49",
    cpf: "03543506331",
    axles: 6,
    carrier: "SARTCO",
    supplier: "ADM",
    product: "KCL 00-00-60 GR",
    dateTime: new Date().toISOString(),
    status: Status.DESCARREGANDO,
  },
  {
    id: "3",
    order: "1003",
    type: MovementType.RECEBIMENTO,
    category: ReceiptCategory.KCL,
    licensePlate: "ROJ0J81",
    cpf: "60831194308",
    axles: 5,
    carrier: "SARTCO",
    supplier: "ADM",
    product: "KCL 00-00-60 GR",
    dateTime: new Date(
      new Date().setDate(new Date().getDate() - 1)
    ).toISOString(),
    status: Status.AGUARD_DESEMBARQUE,
  },
  {
    id: "4",
    order: "2001",
    type: MovementType.RECEBIMENTO,
    category: ReceiptCategory.CALCARIO,
    licensePlate: "ROC4B45",
    cpf: "60475682386",
    axles: 7,
    carrier: "GUERRA TRASP.",
    supplier: "CALTINS",
    product: "CALCARIO DOLOMITICO",
    dateTime: new Date().toISOString(),
    status: Status.DESCARREGANDO,
  },
  {
    id: "5",
    order: "2002",
    type: MovementType.RECEBIMENTO,
    category: ReceiptCategory.CALCARIO,
    licensePlate: "SMN5C95",
    cpf: "00450796531",
    axles: 9,
    carrier: "GUERRA TRASP.",
    supplier: "CALTINS",
    product: "CALCARIO DOLOMITICO",
    dateTime: new Date(
      new Date().setDate(new Date().getDate() - 2)
    ).toISOString(),
    status: Status.FINALIZADO,
  },
  {
    id: "6",
    order: "3001",
    type: MovementType.EMBARQUE,
    category: BoardingCategory.SOJA,
    licensePlate: "ABC1D23",
    cpf: "12345678901",
    axles: 5,
    carrier: "AGROCARGO",
    supplier: "FAZENDA SOL NASCENTE",
    product: "SOJA EM GRÃOS",
    dateTime: new Date(
      new Date().setDate(new Date().getDate() - 1)
    ).toISOString(),
    status: Status.EMBARCANDO,
  },
  {
    id: "7",
    order: "3002",
    type: MovementType.EMBARQUE,
    category: BoardingCategory.SOJA,
    licensePlate: "DEF4E56",
    cpf: "23456789012",
    axles: 6,
    carrier: "AGROCARGO",
    supplier: "FAZENDA LUA CHEIA",
    product: "SOJA EM GRÃOS",
    dateTime: new Date().toISOString(),
    status: Status.AGUARD_EMBARQUE,
  },
  {
    id: "8",
    order: "4001",
    type: MovementType.EMBARQUE,
    category: BoardingCategory.MILHO,
    licensePlate: "GHI7F89",
    cpf: "34567890123",
    axles: 9,
    carrier: "TRANSGRAOS",
    supplier: "SÍTIO MILHARAL",
    product: "MILHO SAFRINHA",
    dateTime: new Date(
      new Date().setDate(new Date().getDate() - 3)
    ).toISOString(),
    status: Status.FINALIZADO,
  },
];

const mockProducts: Product[] = [
  { id: "1", name: "KCL 00-00-60 GR" },
  { id: "2", name: "CALCARIO DOLOMITICO" },
  { id: "3", name: "GESSO AGRIC." },
  { id: "4", name: "SOJA EM GRÃOS" },
  { id: "5", name: "MILHO SAFRINHA" },
];

const mockTransportCompanies: TransportCompany[] = [
  { id: "1", name: "SARTCO" },
  { id: "2", name: "GUERRA TRASP." },
  { id: "3", name: "AGROCARGO" },
  { id: "4", name: "TRANSGRAOS" },
];

const mockSuppliers: Supplier[] = [
  { id: "1", name: "ADM" },
  { id: "2", name: "CALTINS" },
  { id: "3", name: "INPASA" },
  { id: "4", name: "FAZENDA SOL NASCENTE" },
];

const simulateDelay = <T>(data: T): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(data), 500));

export const getMovements = (filters?: {
  type?: MovementType;
  category?: Category;
  search?: string;
}) => {
  let results = [...mockMovements];

  if (filters?.type) {
    results = results.filter((m) => m.type === filters.type);
  }

  if (filters?.category) {
    results = results.filter((m) => m.category === filters.category);
  }

  if (filters?.search) {
    const searchTerm = filters.search.toLowerCase();
    results = results.filter(
      (m) =>
        m.licensePlate.toLowerCase().includes(searchTerm) ||
        m.cpf.toLowerCase().includes(searchTerm) ||
        m.order.toLowerCase().includes(searchTerm)
    );
  }

  return simulateDelay(
    results.sort(
      (a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime()
    )
  );
};

export const getDashboardStats = () => {
  const stats = mockMovements.reduce((acc, mov) => {
    if (!acc[mov.status]) {
      acc[mov.status] = 0;
    }
    acc[mov.status]++;
    return acc;
  }, {} as Record<Status, number>);

  return simulateDelay(stats);
};

export const getProducts = () => simulateDelay(mockProducts);
export const getTransportCompanies = () =>
  simulateDelay(mockTransportCompanies);
export const getSuppliers = () => simulateDelay(mockSuppliers);

export const addMovement = (mov: Omit<Movement, "id" | "dateTime">) => {
  const newMov: Movement = {
    ...mov,
    id: (mockMovements.length + 1).toString(),
    dateTime: new Date().toISOString(),
  };

  mockMovements.unshift(newMov);
  return simulateDelay(newMov);
};
