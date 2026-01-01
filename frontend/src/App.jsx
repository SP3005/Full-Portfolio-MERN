import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const AdminLogin = lazy(() => import("./admin/pages/AdminLogin"));
const Dashboard = lazy(() => import("./admin/pages/Dashboard"));
const Visitors = lazy(() => import("./admin/pages/Visitors"));
const Contacts = lazy(() => import("./admin/pages/Contacts"));
const PortfolioEdit = lazy(() => import("./admin/pages/PortfolioEdit"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/visitors" element={<Visitors />} />
          <Route path="/admin/contacts" element={<Contacts />} />
          <Route path="/admin/portfolio" element={<PortfolioEdit />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
