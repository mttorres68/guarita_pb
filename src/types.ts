export enum MovimentacaoTipo {
  EMBARQUE = "EMBARQUE",
  RECEBIMENTO = "RECEBIMENTO",
}

export enum CategoriaEmbarque {
  SOJA = "EMB_SOJA",
  MILHO = "EMB_MILHO",
  ALG_PLUMA = "EMB_ALG_PLUMA",
  DIVERSOS = "EMB_DIVERSOS",
}

export enum CategoriaRecebimento {
  SSP = "REC_SSP",
  KCL = "REC_KCL",
  UREIA = "REC_UREIA",
  CALCARIO = "REC_CALCARIO",
  DIVERSOS = "REC_DIVERSOS",
  SEMENTE = "REC_SEMENTE",
}

export type Categoria = CategoriaEmbarque | CategoriaRecebimento;

export enum Status {
  AGUARD_EMBARQUE = "AGUARD_EMBARQUE",
  AGUARD_DESEMBARQUE = "AGUARD_DESEMBARQUE",
  EMBARCANDO = "EMBARCANDO",
  DESCARREGANDO = "DESCARREGANDO",
  FINALIZADO = "FINALIZADO",
}

export interface Produto {
  id: string;
  nome: string;
}

export interface Transportadora {
  id: string;
  nome: string;
}

export interface Fornecedor {
  id: string;
  nome: string;
}

export interface Movimentacao {
  id: string;
  numero: string;
  tipo: MovimentacaoTipo;
  categoria: Categoria;
  dataHora: string;
  status: Status;
  placa: string;
  cpf: string;
  eixos: number;
  transportadora: string;
  fornecedor: string;
  produto: string;
  instrucao?: string;
  nFardos?: number;
}
