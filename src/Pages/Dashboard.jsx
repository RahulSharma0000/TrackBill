import React, { useState } from 'react';
import {
  PieChart, Pie, Cell,
  BarChart, XAxis, YAxis, CartesianGrid, Bar, ResponsiveContainer, LabelList
} from 'recharts';

const COLORS = ['#6366F1', '#F59E0B', '#10B981', '#EF4444'];

// Sample category-wise data for monthly and weekly
const pieDataMonthly = [
  { name: 'Food', value: 4000 },
  { name: 'Travel', value: 1500 },
  { name: 'Bills', value: 2500 },
  { name: 'Shopping', value: 1000 }
];

const pieDataWeekly = [
  { name: 'Food', value: 800 },
  { name: 'Travel', value: 300 },
  { name: 'Bills', value: 700 },
  { name: 'Shopping', value: 200 }
];

// Sample bar data for monthly and weekly
const barDataMonthly = [
  { label: 'Jan', amount: 800 },
  { label: 'Feb', amount: 600 },
  { label: 'Mar', amount: 400 },
  { label: 'Apr', amount: 700 }
];

const barDataWeekly = [
  { label: 'Mon', amount: 150 },
  { label: 'Tue', amount: 200 },
  { label: 'Wed', amount: 180 },
  { label: 'Thu', amount: 220 },
  { label: 'Fri', amount: 190 },
  { label: 'Sat', amount: 250 },
  { label: 'Sun', amount: 300 }
];

const DashBoard = () => {
  const [showWeekly, setShowWeekly] = useState(false);

  const toggleMode = () => setShowWeekly(!showWeekly);

  const pieData = showWeekly ? pieDataWeekly : pieDataMonthly;
  const barData = showWeekly ? barDataWeekly : barDataMonthly;

  return (
    <div className=" max-w-screen-xl mt-10">
    

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mb-6">
        <div className="bg-white rounded-2xl shadow-md p-6 text-center sm:text-left">
          <h2 className="text-sm font-semibold text-gray-500">Total Spend</h2>
          <p className="text-2xl pt-2 font-bold text-indigo-600 mt-1">₹10,000</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 text-center sm:text-left">
          <h2 className="text-sm font-semibold text-gray-500">This Week</h2>
          <p className="text-2xl pt-2 font-bold text-emerald-600 mt-1">₹2,000</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 text-center sm:text-left">
          <h2 className="text-sm font-semibold text-gray-500">This Month</h2>
          <p className="text-2xl pt-2 font-bold text-yellow-600 mt-1">₹6,500</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-600">
              {showWeekly ? 'Weekly Category-wise' : 'Monthly Category-wise'}
            </h2>
            <button
              onClick={toggleMode}
              className="px-4 py-1 text-sm rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition"
            >
              Switch to {showWeekly ? 'Monthly' : 'Weekly'}
            </button>
          </div>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  label={({ name, value }) => `${name}: ₹${value}`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-600 mb-4 text-center lg:text-left">
            {showWeekly ? 'Weekly Expenses' : 'Monthly Expenses'}
          </h2>
          <div className="w-full h-[300px]">
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
