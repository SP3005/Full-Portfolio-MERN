import { useEffect, useState } from "react";
import API from "../../services/api";
import AdminLayout from "../components/AdminLayout";

export default function PortfolioEdit() {
  const [form, setForm] = useState({});

  useEffect(() => {
    API.get("/portfolio").then(res => setForm(res.data || {}));
  }, []);

  const save = () => {
    API.put("/portfolio", form);
    alert("Saved");
  };

  return (
    <AdminLayout>
      <h1>Edit Portfolio</h1>

      <input
        value={form.profile?.name || ""}
        onChange={e =>
          setForm({
            ...form,
            profile: { ...form.profile, name: e.target.value }
          })
        }
        placeholder="Name"
      />

      <button onClick={save}>Save</button>
    </AdminLayout>
  );
}
