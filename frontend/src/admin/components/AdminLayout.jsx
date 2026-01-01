import { NavLink, useNavigate } from "react-router-dom";
import "../admin.css"

export default function AdminLayout({ children }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="admin-layout">
      <aside>
        <h2>Admin</h2>

        <NavLink to="/admin">Dashboard</NavLink>
        <NavLink to="/admin/visitors">Visitors</NavLink>
        <NavLink to="/admin/contacts">Contacts</NavLink>
        <NavLink to="/admin/portfolio">Portfolio</NavLink>

        <button
          onClick={logout}
          style={{
            marginTop: "auto",
            padding: "10px",
            background: "#ef4444",
            border: "none",
            borderRadius: "6px",
            color: "#fff",
            cursor: "pointer"
          }}
        >
          Logout
        </button>
      </aside>

      <main>{children}</main>
    </div>
  );
}
