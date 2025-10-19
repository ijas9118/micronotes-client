import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", notes: 10 },
  { name: "Tue", notes: 14 },
  { name: "Wed", notes: 8 },
  { name: "Thu", notes: 17 },
  { name: "Fri", notes: 12 },
  { name: "Sat", notes: 15 },
  { name: "Sun", notes: 9 },
];

const DashboardChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">
        Notes Created This Week
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="notes"
            stroke="#f59e0b"
            strokeWidth={2}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardChart;
