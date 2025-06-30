import React, { useState, useEffect } from 'react';
import {
  PieChart, Pie, Cell,
  BarChart, XAxis, YAxis, CartesianGrid, Bar, ResponsiveContainer, LabelList
} from 'recharts';
import { getReceipts } from '../utils/LocalStorage';

const COLORS = ['#6366F1', '#F59E0B', '#10B981', '#EF4444'];

const DashBoard = () => {
  const [showWeekly, setShowWeekly] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const [barData, setBarData] = useState([]);
  const [weeklyTotal, setWeeklyTotal] = useState(0);
  const [monthlyTotal, setMonthlyTotal] = useState(0);
  const [totalSpend, setTotalSpend] = useState(0);

  useEffect(() => {
    const allReceipts = getReceipts();
    const now = new Date();
    const weeklyStart = new Date(now);
    weeklyStart.setDate(now.getDate() - 6);
    const monthlyStart = new Date(now.getFullYear(), now.getMonth(), 1);

    let weekTotal = 0;
    let monthTotal = 0;
    let spendTotal = 0;

    allReceipts.forEach((r) => {
      const date = new Date(r.date);
      const amount = Number(r.amount);
      spendTotal += amount;
      if (date >= weeklyStart && date <= now) weekTotal += amount;
      if (date >= monthlyStart && date <= now) monthTotal += amount;
    });

    setWeeklyTotal(weekTotal);
    setMonthlyTotal(monthTotal);
    setTotalSpend(spendTotal);

    const filtered = allReceipts.filter((r) => {
      const date = new Date(r.date);
      if (showWeekly) {
        const oneWeekAgo = new Date(now);
        oneWeekAgo.setDate(now.getDate() - 6);
        return date >= oneWeekAgo && date <= now;
      } else {
        return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
      }
    });

    const categoryMap = {};
    filtered.forEach(r => {
      if (!categoryMap[r.category]) categoryMap[r.category] = 0;
      categoryMap[r.category] += Number(r.amount);
    });
    const pieData = Object.entries(categoryMap).map(([name, value]) => ({ name, value }));

    let barChartData = [];
    if (showWeekly) {
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const weeklyMap = {};
      days.forEach(d => weeklyMap[d] = 0);
      filtered.forEach(r => {
        const d = new Date(r.date);
        const day = days[d.getDay()];
        weeklyMap[day] += Number(r.amount);
      });
      barChartData = days.map(d => ({ label: d, amount: weeklyMap[d] }));
    } else {
      const monthlyMap = {};
      filtered.forEach(r => {
        const d = new Date(r.date);
        const key = `${d.getFullYear()}-${d.getMonth() + 1}`;
        if (!monthlyMap[key]) monthlyMap[key] = 0;
        monthlyMap[key] += Number(r.amount);
      });
      barChartData = Object.entries(monthlyMap).map(([label, amount]) => ({ label, amount }));
    }

    setCategoryData(pieData);
    setBarData(barChartData);
  }, [showWeekly]);

  return (
    <div className="w-full "> {/* ✅ Center layout on all screens */}
      {/* Header Card */}
      <div className="bg-blue-500 w-full mb-4 rounded-xl flex flex-col items-start justify-center p-4 sm:p-6 shadow--md">
        <h1 className="text-3xl sm:text-xl text-white font-semibold">Monthly Total</h1>
        <h2 className="text-2xl sm:text-3xl text-white font-bold mt-2">
          ₹{monthlyTotal.toLocaleString()}
        </h2>
      </div>


    
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-20 mb-6">
        {/* ✅ Responsive grid with spacing adjustments */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 text-center sm:text-left">
          <h2 className="text-sm font-semibold text-gray-500">Total Spend</h2>
          <p className="text-2xl font-bold text-indigo-600 mt-2">
            ₹{totalSpend.toLocaleString()}
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 text-center sm:text-left">
          <h2 className="text-sm font-semibold text-gray-500">This Week</h2>
          <p className="text-2xl font-bold text-emerald-600 mt-2">
            ₹{weeklyTotal.toLocaleString()}
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 text-center sm:text-left">
          <h2 className="text-sm font-semibold text-gray-500">This Month</h2>
          <p className="text-2xl font-bold text-yellow-600 mt-2">
            ₹{monthlyTotal.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-20">
        {/* Pie Chart Card */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base sm:text-lg font-semibold text-gray-600">
              {showWeekly ? 'Weekly Category-wise' : 'Monthly Category-wise'}
            </h2>
            <button
              onClick={() => setShowWeekly(!showWeekly)}
              className="px-4 py-2 text-sm rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition"
            >
              Switch to {showWeekly ? 'Monthly' : 'Weekly'}
            </button>
          </div>
          <div className="h-[250px] sm:h-[300px]"> {/* ✅ Responsive chart height */}
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  label={({ name, value }) => `${name}: ₹${value}`}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart Card */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6">
          <h2 className="text-base sm:text-lg font-semibold text-gray-600 mb-4 text-center lg:text-left">
            {showWeekly ? 'Weekly Expenses' : 'Monthly Expenses'}
          </h2>
          <div className="h-[250px] sm:h-[300px]"> {/* ✅ Responsive chart height */}
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis />
                <Bar dataKey="amount" fill="#3B82F6" radius={[4, 4, 0, 0]}>
                  <LabelList dataKey="amount" position="top" formatter={(val) => `₹${val}`} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
