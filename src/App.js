import React from "react";
import { Routes, Route } from "react-router-dom";

//components
import Home from "./components/Login/Home";
import Inicio from "./components/HomePage/Inicio";
//pages
import NewPromoRules from "./pages/NewPromo/NewPromo";
//import HomePage from "./pages/Inicio/HomePage";
import NewpromoModal from "./components/HomePage/NewpromoModal";
import TablaPromos from "./pages/TablaPromos/tablaPromos";
import Mecanicas from "./pages/Mecanicas/Mecanicas";
import Bingos from "./pages/Bingos/Bingos";
import MovimientosCliente from "./pages/MovimientosClientes/MovimientosCliente";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/Login/ProtectedRoute";
import Catalogo from "./pages/Catalog/Catalog";
import ProductCard from "./components/Promotions/ProductCard";
import NuevaRegla from "./pages/NewPromoNuevaRegla/NuevaRegla";
import ReportesComunicados from "./pages/Reporte de Comunicados/ReporteComunicados";
import Interno from "./pages/Directorio/Interno";
import Clientes from "./pages/Directorio/Clientes";
import ReporteClientes from "./pages/ReporteClientes/ReporteClientes";
import SistemaLealtad from "./pages/Sistema Lealtad/SistemaLealtad";
import Dashboard from "./pages/Dashboard/Dashboard";


    //import PromoconfigForm from "./components/HomePage/PromoconfigForm";
    //import NewPromoSetup from "./components/NewPromoSetup";

export default function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<ProtectedRoute><Inicio /></ProtectedRoute>} />
        <Route path="/newPromo" element ={<ProtectedRoute>< NewPromoRules/></ProtectedRoute>}/>
        <Route path="/newPromoModal" element ={<ProtectedRoute>< NewpromoModal/></ProtectedRoute>}/>
        <Route path="/tablaPromociones" element ={<ProtectedRoute><TablaPromos /></ProtectedRoute>}/>
        <Route path="/mecanicas" element ={<ProtectedRoute><Mecanicas /></ProtectedRoute>}/>
        <Route path="/bingos" element ={<ProtectedRoute><Bingos /></ProtectedRoute>}/>
        <Route path="/movimientosClientes" element ={<ProtectedRoute><MovimientosCliente /></ProtectedRoute>}/>
        <Route path="/catalogo" element ={<ProtectedRoute><Catalogo /></ProtectedRoute>}/>
        <Route path="/nuevaRegla" element ={<ProtectedRoute><NuevaRegla /></ProtectedRoute>}/>
        <Route path="/reporteComunicados" element ={<ProtectedRoute><ReportesComunicados /></ProtectedRoute>}/>
        <Route path="/directorioInterno" element ={<ProtectedRoute><Interno /></ProtectedRoute>}/>
        <Route path="/directorioClientes" element ={<ProtectedRoute><Clientes /></ProtectedRoute>}/>
        <Route path="/reporteClientes" element ={<ProtectedRoute><ReporteClientes /></ProtectedRoute>}/>
        <Route path="/sistemaLealtad" element ={<ProtectedRoute><SistemaLealtad /></ProtectedRoute>}/>
        <Route path="/dashboard" element ={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
      </Routes>
    </AuthContextProvider>
  );
}
