import React from 'react';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const gymSalesData = [
  { year: 2020, basic: 120, standard: 802, premium: 45 },
  { year: 2021, basic: 1240, standard: 950, premium: 604 },
  { year: 2022, basic: 1620, standard: 2110, premium: 136 },
  { year: 2023, basic: 1580, standard: 730, premium: 600 },
  { year: 2024, basic: 2000, standard: 1520, premium: 900 },
];

// Prepare PieChart data for 2024
const latestYearData = gymSalesData[gymSalesData.length - 1];
const pieData = [
  { name: 'Basic', value: latestYearData.basic },
  { name: 'Standard', value: latestYearData.standard },
  { name: 'Premium', value: latestYearData.premium },
];

const COLORS = ['#8884d8', '#ff4d4d', '#82ca9d'];

const Result = () => {
  return (
    <div className="max-w-[1200px] min-w-[200px] mx-auto mt-10 p-5">
    
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={gymSalesData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line dataKey="basic" stroke="#8884d8" />
          <Line dataKey="standard" stroke="red" />
          <Line dataKey="premium" stroke="green" />
        </LineChart>
      </ResponsiveContainer>

     
      <div className="mt-5">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={gymSalesData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="basic" fill="#8884d8" />
            <Bar dataKey="standard" fill="red" />
            <Bar dataKey="premium" fill="green" />
          </BarChart>
        </ResponsiveContainer>
      </div>

    
      <div className="mt0">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Result;
