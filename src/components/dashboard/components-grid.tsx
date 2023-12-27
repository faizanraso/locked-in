import React from "react";

import { Overview } from "~/components/dashboard/graph";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import CategoryList from "./category-list";

export default function ComponentsGrid() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-neutral-200">
              Total Time "Locked-In"
            </CardTitle>
            <svg
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-muted-foreground text-neutral-400"
            >
              <path
                d="M12 6L12 12L18 12"
                stroke="#a3a3a3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#a3a3a3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neutral-200">123 Hours</div>
            {/* <p className="text-xs text-muted-foreground text-neutral-400">
              +25 hours in the past week
            </p> */}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-neutral-200">
              Avg Session Length
            </CardTitle>
            <svg
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-muted-foreground text-neutral-400"
            >
              <path
                d="M12 6L12 12L18 12"
                stroke="#a3a3a3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#a3a3a3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neutral-200">
              54 minutes
            </div>
            {/* <p className="text-xs text-muted-foreground text-neutral-400">
              +10 min in the past week
            </p> */}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-neutral-200">
              Total Sessions
            </CardTitle>
            <svg
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-muted-foreground text-neutral-400"
            >
              <path
                d="M10 3L6 21"
                stroke="#a3a3a3"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                d="M20.5 16H2.5"
                stroke="#a3a3a3"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                d="M22 7H4"
                stroke="#a3a3a3"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                d="M18 3L14 21"
                stroke="#a3a3a3"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neutral-200">52</div>
            {/* <p className="text-xs text-muted-foreground text-neutral-400">
              +3 in the past week
            </p> */}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-neutral-200">
              Categories Tracked
            </CardTitle>
            <svg
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-muted-foreground text-neutral-400"
            >
              <path
                d="M8 6L20 6"
                stroke="#a3a3a3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M4 6.01L4.01 5.99889"
                stroke="#a3a3a3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M4 12.01L4.01 11.9989"
                stroke="#a3a3a3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M4 18.01L4.01 17.9989"
                stroke="#a3a3a3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M8 12L20 12"
                stroke="#a3a3a3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M8 18L20 18"
                stroke="#a3a3a3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neutral-200">4</div>
            {/* <p className="text-xs text-muted-foreground text-neutral-400">
              +1 new category in the past week
            </p> */}
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-7 lg:col-span-4">
          <CardHeader>
            <CardTitle className="text-neutral-200">Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-7 h-full lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-neutral-200">Breakdown</CardTitle>
            <CardDescription className="text-neutral-400">
              Some interesting description here
            </CardDescription>
          </CardHeader>
          <CardContent className="overflow-y-auto">
            <CategoryList />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
