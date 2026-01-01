import { useEffect, useState } from "react";
import API from "../../services/api";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie
} from "recharts";
import AdminLayout from "../components/AdminLayout";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [advanced, setAdvanced] = useState(null);

  useEffect(() => {
    API.get("/visitor/analytics").then(res => setData(res.data));
  }, []);

  

useEffect(() => {
  API.get("/visitor/advanced").then(res => setAdvanced(res.data));
}, []);


  if (!data) return null; // no loading spinner (data is fast)

  return (
    <AdminLayout>
      <h1>Dashboard</h1>

      <div className="stats">
        <div className="card">Total Visitors: {data.total}</div>
      </div>

      <h3>Daily Visitors</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data.daily}>
          <XAxis dataKey="_id" />
          <YAxis />
          <Tooltip />
          <Line dataKey="count" />
        </LineChart>
      </ResponsiveContainer>

      <h3>Visitors by Country</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data.countries} dataKey="count" nameKey="_id" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      {advanced && (
  <>
    <div className="chart-box">
      <h3>Visitors by Device</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={advanced.devices}
            dataKey="count"
            nameKey="_id"
            fill="#facc15"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>

    <div className="chart-box">
      <h3>Visitors by Browser</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={advanced.browsers}
            dataKey="count"
            nameKey="_id"
            fill="#38bdf8"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </>
)}

    </AdminLayout>
  );
}
