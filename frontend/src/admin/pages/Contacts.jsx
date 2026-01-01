import { useEffect, useState } from "react";
import API from "../../services/api";
import AdminLayout from "../components/AdminLayout";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    API.get("/contact")
      .then(res => {
        if (Array.isArray(res.data)) {
          setContacts(res.data);
        } else {
          setError("Invalid server response");
        }
      })
      .catch(() => setError("Failed to load contacts"));
  }, []);

  return (
    <AdminLayout>
      <h1>Contact Messages</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {contacts.length === 0 ? (
        <p>No messages found</p>
      ) : (
        contacts.map(c => (
          <div key={c._id} className="card">
            <h4>{c.name} ({c.email})</h4>
            <p>{c.message}</p>
          </div>
        ))
      )}
    </AdminLayout>
  );
}
