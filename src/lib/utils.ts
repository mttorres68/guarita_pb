import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { BoardingCategory, MovementType, ReceiptCategory, type RoutesTypes } from "./types";
import { CalcarioIcon, CottonIcon, KCLIcon, Package, SeedIcon, SoyBean, SSPIcon, UreiaIcon } from "@/components/icons";
import { Wheat } from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// ROTAS DE EMBARQUE
export const boardingRoutes: RoutesTypes[] = [
  {
    title: "Soja",
    url: "/emb/soja",
    icon: SoyBean,
    isActive: false,
    typeMovement: MovementType.EMBARQUE,
    category: BoardingCategory.SOJA,
  },
  {
    title: "Milho",
    url: "/emb/milho",
    icon: Wheat,
    isActive: false,
    typeMovement: MovementType.EMBARQUE,
    category: BoardingCategory.MILHO,
  },
  {
    title: "Alg. Pluma",
    url: "/emb/alg-pluma",
    icon: CottonIcon,
    isActive: false,
    typeMovement: MovementType.EMBARQUE,
    category: BoardingCategory.ALG_PLUMA,
  },
  {
    title: "Diversos",
    url: "/emb/diversos",
    icon: Package,
    isActive: false,
    typeMovement: MovementType.EMBARQUE,
    category: BoardingCategory.DIVERSOS,
  },
];


// ROTAS DE RECEBIMENTO
export const receivingRoutes: RoutesTypes[] = [
  {
    title: "SSP",
    url: "/rec/ssp",
    icon: SSPIcon,
    isActive: false,
    typeMovement: MovementType.RECEBIMENTO,
    category: ReceiptCategory.SSP,
  },
  {
    title: "KCL",
    url: "/rec/kcl",
    icon: KCLIcon,
    isActive: false,
    typeMovement: MovementType.RECEBIMENTO,
    category: ReceiptCategory.KCL,
  },
  {
    title: "Ureia",
    url: "/rec/ureia",
    icon: UreiaIcon,
    isActive: false,
    typeMovement: MovementType.RECEBIMENTO,
    category: ReceiptCategory.UREIA,
  },
  {
    title: "Calcário",
    url: "/rec/calcario",
    icon: CalcarioIcon,
    isActive: false,
    typeMovement: MovementType.RECEBIMENTO,
    category: ReceiptCategory.CALCARIO,
  },
  {
    title: "Sementes",
    url: "/rec/semente",
    icon: SeedIcon,
    isActive: false,
    typeMovement: MovementType.RECEBIMENTO,
    category: ReceiptCategory.SEMENTE,
  },
  {
    title: "Diversos",
    url: "/rec/diversos",
    icon: Package,
    isActive: false,
    typeMovement: MovementType.RECEBIMENTO,
    category: ReceiptCategory.DIVERSOS,
  },
];