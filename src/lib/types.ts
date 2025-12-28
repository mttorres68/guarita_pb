export enum MovementType {
  EMBARQUE = "EMBARQUE",
  RECEBIMENTO = "RECEBIMENTO",
}

export enum BoardingCategory {
  SOJA = "EMB_SOJA",
  MILHO = "EMB_MILHO",
  ALG_PLUMA = "EMB_ALG_PLUMA",
  DIVERSOS = "EMB_DIVERSOS",
}

export enum ReceiptCategory {
  SSP = "REC_SSP",
  KCL = "REC_KCL",
  UREIA = "REC_UREIA",
  CALCARIO = "REC_CALCARIO",
  DIVERSOS = "REC_DIVERSOS",
  SEMENTE = "REC_SEMENTE",
}

export type Category = ReceiptCategory | BoardingCategory;

export enum Status {
  AGUARD_EMBARQUE = "AGUARD_EMBARQUE",
  AGUARD_DESEMBARQUE = "AGUARD_DESEMBARQUE",
  EMBARCANDO = "EMBARCANDO",
  DESCARREGANDO = "DESCARREGANDO",
  FINALIZADO = "FINALIZADO",
}

export interface Product {
  id: string;
  name: string;
}

export interface TransportCompany {
  id: string;
  name: string;
}

export interface Supplier {
  id: string;
  name: string;
}

export interface Movement {
id: string;// id
order: string;// ordem
type: MovementType;// tipo
category: Category;// categoria
dateTime: string;// dataHora
status: Status;// status
licensePlate: string;// placa
cpf: string;// cpf
axles: number;// eixos
carrier: string;// transportadora
supplier: string;// fornecedor
product: string;// produto
invoiceKey?: string;// chave_nf
instruction?: string;// instrução de Embarque?
bundles?: number;// nFardos?

}

export interface RoutesTypes {
  title: string;
  url: string;
  isActive?: boolean;
  typeMovement: MovementType;
  category: Category;
  icon: React.ComponentType;
}
