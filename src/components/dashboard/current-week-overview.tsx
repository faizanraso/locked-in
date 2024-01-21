"use client";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import "react-loading-skeleton/dist/skeleton.css";

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

export function CurrentWeekOverview() {
  return (
    <>
      {data ? (
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data} layout="horizontal">
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
      ) : (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <div className="ml-4 items-center justify-center">
            <Skeleton className="mx-auto h-[350px]" />
          </div>
        </SkeletonTheme>
      )}
    </>
  );
}
