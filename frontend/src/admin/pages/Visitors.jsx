import { useEffect, useState } from "react";
import API from "../../services/api";
import AdminLayout from "../components/AdminLayout";

export default function Visitors() {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    API.get("/visitor/list")
      .then(res => setVisitors(res.data))
      .catch(err => console.error("Visitor API error", err));
  }, []);

  return (
    <AdminLayout>
      <h1>Visitors</h1>

      {visitors.length === 0 ? (
        <p>No visitors found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>City</th>
              <th>Device</th>
              <th>Browser</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {visitors.map(v => (
              <tr key={v._id}>
                <td>{v.country}</td>
                <td>{v.city}</td>
                <td>{v.device}</td>
                <td>{v.browser}</td>
                <td>{new Date(v.visitedAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </AdminLayout>
  );
}
