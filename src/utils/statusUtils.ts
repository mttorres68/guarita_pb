import { Status } from "../types";

export const statusText = (status: Status): string => {
  const map: Record<Status, string> = {
    [Status.AGUARD_EMBARQUE]: "Aguardando Embarque",
    [Status.AGUARD_DESEMBARQUE]: "Aguardando Desembarque",
    [Status.EMBARCANDO]: "Embarcando",
    [Status.DESCARREGANDO]: "Descarregando",
    [Status.FINALIZADO]: "Finalizado",
  };
  return map[status] || status;
};

type BadgeVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "outline"
  | "success"
  | "warning"
  | "info";

export const statusColor = (status: Status): BadgeVariant => {
  const map: Record<Status, BadgeVariant> = {
    [Status.AGUARD_EMBARQUE]: "warning",
    [Status.AGUARD_DESEMBARQUE]: "warning",
    [Status.EMBARCANDO]: "info",
    [Status.DESCARREGANDO]: "info",
    [Status.FINALIZADO]: "success",
  };
  return map[status] || "default";
};
