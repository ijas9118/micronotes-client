interface StatCardProps {
  label: string;
  value: number;
  icon?: React.ReactNode;
}

const StatCard = ({ label, value, icon }: StatCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex items-center justify-between">
    <div>
      <h4 className="text-gray-500 text-sm">{label}</h4>
      <p className="text-2xl font-bold text-amber-600">{value}</p>
    </div>
    {icon && <div className="text-amber-500 text-2xl">{icon}</div>}
  </div>
);

export default StatCard;
