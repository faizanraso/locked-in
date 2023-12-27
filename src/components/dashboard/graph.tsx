"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Sat",
    total: Math.floor(Math.random() * 15 + 2),
  },
  {
    name: "Sun",
    total: Math.floor(Math.random() * 15 + 2),
  },
  {
    name: "Mon",
    total: Math.floor(Math.random() * 15 + 2),
  },
  {
    name: "Tues",
    total: Math.floor(Math.random() * 15 + 2),
  },
  {
    name: "Wed",
    total: Math.floor(Math.random() * 15 + 2),
  },
  {
    name: "Thurs",
    total: Math.floor(Math.random() * 15 + 2),
  },
  {
    name: "Fri",
    total: Math.floor(Math.random() * 15 + 2),
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#a3a3a3"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#a3a3a3"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar
          dataKey="total"
          fill="#e5e5e5"
          radius={[4, 4, 0, 0]}
          className=""
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
