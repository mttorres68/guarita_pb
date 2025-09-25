import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { getDashboardStats, getMovimentacoes } from "../services/mockApi";
import { Status, Movimentacao } from "../types";
import { statusText, statusColor } from "../utils/statusUtils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Skeleton } from "../components/ui/Skeleton";
import { Activity, Clock, CheckCircle } from "../components/icons";

const DashboardPage: React.FC = () => {
  const [stats, setStats] = useState<Record<Status, number> | null>(null);
  const [recentMovs, setRecentMovs] = useState<Movimentacao[] | null>(null);
  const [loading, setLoading] = useState(true);

  // const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [statsData, movsData] = await Promise.all([
          getDashboardStats(),
          getMovimentacoes(),
        ]);
        setStats(statsData);
        setRecentMovs(movsData.slice(0, 5));
      } catch (error) {
        console.error("Failed to fetch dashboard data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const chartData = stats
    ? Object.entries(stats).map(([name, value]) => ({
        name: statusText(name as Status),
        value,
      }))
    : [];

  const totalAguardando =
    (stats?.[Status.AGUARD_EMBARQUE] ?? 0) +
    (stats?.[Status.AGUARD_DESEMBARQUE] ?? 0);
  const totalEmOperacao =
    (stats?.[Status.EMBARCANDO] ?? 0) + (stats?.[Status.DESCARREGANDO] ?? 0);
  const totalFinalizado = stats?.[Status.FINALIZADO] ?? 0;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Aguardando Operação
            </CardTitle>
            <Clock className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-8 w-1/4" />
            ) : (
              <div className="text-2xl font-bold">{totalAguardando}</div>
            )}
            <p className="text-xs text-gray-400">Veículos na fila</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Em Operação</CardTitle>
            <Activity className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-8 w-1/4" />
            ) : (
              <div className="text-2xl font-bold">{totalEmOperacao}</div>
            )}
            <p className="text-xs text-gray-400">Carregando ou descarregando</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Finalizados (Hoje)
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-8 w-1/4" />
            ) : (
              <div className="text-2xl font-bold">{totalFinalizado}</div>
            )}
            <p className="text-xs text-gray-400">Operações concluídas</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Movimentações por Status</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="w-full h-[300px]" />
            ) : (
              <div className="w-full h-[300px]">
                <ResponsiveContainer>
                  <BarChart data={chartData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="rgba(255, 255, 255, 0.1)"
                    />
                    <XAxis
                      dataKey="name"
                      stroke="#888888"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="#888888"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Bar
                      dataKey="value"
                      fill="#4ade80"
                      name="Veículos"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Últimas Movimentações</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-4">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
              </div>
            ) : (
              <ul className="divide-y divide-gray-700">
                {recentMovs?.map((mov) => (
                  <li
                    key={mov.id}
                    className="py-3 flex items-center justify-between"
                  >
                    <div>
                      <p className="font-semibold">
                        {mov.placa} - {mov.produto}
                      </p>
                      <p className="text-sm text-gray-400">
                        {new Date(mov.dataHora).toLocaleString()}
                      </p>
                    </div>
                    <Badge variant={statusColor(mov.status)}>
                      {statusText(mov.status)}
                    </Badge>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
