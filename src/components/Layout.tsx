import React from "react";
import { NavLink, Outlet } from "react-router";
import {
  Truck,
  Home,
  ArrowUpCircle,
  ArrowDownCircle,
  ChevronDown,
  Tractor,
  Wheat,
  Combine,
  Package,
} from "./icons";

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }: { isActive: boolean }) =>
      `flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
        isActive
          ? "bg-gray-700 text-white"
          : "text-gray-400 hover:bg-gray-700 hover:text-white"
      }`
    }
  >
    {icon}
    <span className="ml-3">{label}</span>
  </NavLink>
);

const Accordion: React.FC<{
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-700 hover:text-white rounded-md"
      >
        <div className="flex items-center">
          {icon}
          <span className="ml-3">{title}</span>
        </div>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <div className="pl-8 mt-1 space-y-1">{children}</div>}
    </div>
  );
};

const Layout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      <aside className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
        <div className="h-16 flex items-center justify-center border-b border-gray-700">
          <Truck className="w-8 h-8 text-emerald-400" />
          <h1 className="ml-2 text-xl font-bold">Guarita PB01</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <NavItem
            to="/dashboard"
            icon={<Home className="w-5 h-5" />}
            label="Dashboard"
          />

          <Accordion
            title="Embarques"
            icon={<ArrowUpCircle className="w-5 h-5" />}
          >
            <NavItem
              to="/emb/soja"
              icon={<Combine className="w-5 h-5" />}
              label="Soja"
            />
            <NavItem
              to="/emb/milho"
              icon={<Wheat className="w-5 h-5" />}
              label="Milho"
            />
            <NavItem
              to="/emb/alg-pluma"
              icon={<Package className="w-5 h-5" />}
              label="Alg. Pluma"
            />
            <NavItem
              to="/emb/diversos"
              icon={<Package className="w-5 h-5" />}
              label="Diversos"
            />
          </Accordion>

          <Accordion
            title="Recebimentos"
            icon={<ArrowDownCircle className="w-5 h-5" />}
          >
            <NavItem
              to="/rec/ssp"
              icon={<Tractor className="w-5 h-5" />}
              label="SSP"
            />
            <NavItem
              to="/rec/kcl"
              icon={<Tractor className="w-5 h-5" />}
              label="KCL"
            />
            <NavItem
              to="/rec/ureia"
              icon={<Tractor className="w-5 h-5" />}
              label="Ureia"
            />
            <NavItem
              to="/rec/calcario"
              icon={<Tractor className="w-5 h-5" />}
              label="Calcário"
            />
            <NavItem
              to="/rec/diversos"
              icon={<Tractor className="w-5 h-5" />}
              label="Diversos"
            />
            <NavItem
              to="/rec/semente"
              icon={<Tractor className="w-5 h-5" />}
              label="Semente"
            />
          </Accordion>
        </nav>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
