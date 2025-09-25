import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import DashboardPage from "./pages/DashboardPage";
import MovimentacaoPage from "./pages/MovimentacaoPage";
import {
  MovimentacaoTipo,
  CategoriaEmbarque,
  CategoriaRecebimento,
} from "./types";
import GlobalModal from "./components/ui/GlobalModal";

const App: React.FC = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<DashboardPage />} />

            {/* Embarques */}
            <Route
              path="/emb/soja"
              element={
                <MovimentacaoPage
                  key="emb-soja"
                  tipo={MovimentacaoTipo.EMBARQUE}
                  categoria={CategoriaEmbarque.SOJA}
                  title="Embarque de Soja"
                />
              }
            />
            <Route
              path="/emb/milho"
              element={
                <MovimentacaoPage
                  key="emb-milho"
                  tipo={MovimentacaoTipo.EMBARQUE}
                  categoria={CategoriaEmbarque.MILHO}
                  title="Embarque de Milho"
                />
              }
            />
            <Route
              path="/emb/alg-pluma"
              element={
                <MovimentacaoPage
                  key="emb-alg-pluma"
                  tipo={MovimentacaoTipo.EMBARQUE}
                  categoria={CategoriaEmbarque.ALG_PLUMA}
                  title="Embarque de Algodão Pluma"
                />
              }
            />
            <Route
              path="/emb/diversos"
              element={
                <MovimentacaoPage
                  key="emb-diversos"
                  tipo={MovimentacaoTipo.EMBARQUE}
                  categoria={CategoriaEmbarque.DIVERSOS}
                  title="Embarque de Diversos"
                />
              }
            />

            {/* Recebimentos */}
            <Route
              path="/rec/ssp"
              element={
                <MovimentacaoPage
                  key="rec-ssp"
                  tipo={MovimentacaoTipo.RECEBIMENTO}
                  categoria={CategoriaRecebimento.SSP}
                  title="Recebimento de SSP"
                />
              }
            />
            <Route
              path="/rec/kcl"
              element={
                <MovimentacaoPage
                  key="rec-kcl"
                  tipo={MovimentacaoTipo.RECEBIMENTO}
                  categoria={CategoriaRecebimento.KCL}
                  title="Recebimento de KCL"
                />
              }
            />
            <Route
              path="/rec/ureia"
              element={
                <MovimentacaoPage
                  key="rec-ureia"
                  tipo={MovimentacaoTipo.RECEBIMENTO}
                  categoria={CategoriaRecebimento.UREIA}
                  title="Recebimento de Ureia"
                />
              }
            />
            <Route
              path="/rec/calcario"
              element={
                <MovimentacaoPage
                  key="rec-calcario"
                  tipo={MovimentacaoTipo.RECEBIMENTO}
                  categoria={CategoriaRecebimento.CALCARIO}
                  title="Recebimento de Calcário"
                />
              }
            />
            <Route
              path="/rec/diversos"
              element={
                <MovimentacaoPage
                  key="rec-diversos"
                  tipo={MovimentacaoTipo.RECEBIMENTO}
                  categoria={CategoriaRecebimento.DIVERSOS}
                  title="Recebimento de Diversos"
                />
              }
            />
            <Route
              path="/rec/semente"
              element={
                <MovimentacaoPage
                  key="rec-semente"
                  tipo={MovimentacaoTipo.RECEBIMENTO}
                  categoria={CategoriaRecebimento.SEMENTE}
                  title="Recebimento de Semente"
                />
              }
            />

            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Route>
        </Routes>
      </HashRouter>
      <GlobalModal />
    </>
  );
};

export default App;
