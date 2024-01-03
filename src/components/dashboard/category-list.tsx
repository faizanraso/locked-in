import React, { useState } from "react";

import { Button } from "../ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

export default function CategoryList() {
  const data = [
    { categoryName: "Test", hoursTracked: 10 },
    { categoryName: "Test", hoursTracked: 9 },
    { categoryName: "Test", hoursTracked: 8 },
    { categoryName: "Test", hoursTracked: 7 },
    { categoryName: "Test", hoursTracked: 6 },
    { categoryName: "Test", hoursTracked: 5 },
    { categoryName: "Test", hoursTracked: 4 },
    { categoryName: "Test", hoursTracked: 3 },
    { categoryName: "Test", hoursTracked: 2 },
    { categoryName: "Test", hoursTracked: 1 },
    { categoryName: "Test", hoursTracked: 0 },
  ];

  const [breakdownPage, setBreakdownPage] = useState<number>(0);
  const maxPage = Math.floor(data.length / 6);

  function getNextPage() {
    setBreakdownPage(breakdownPage + 1);
  }

  function getPreviousPage() {
    setBreakdownPage(breakdownPage - 1);
  }

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="space-y-7">
        {data
          .sort((a, b) => {
            return b.hoursTracked - a.hoursTracked; // sort in desc order
          })
          .slice(breakdownPage * 6, breakdownPage * 6 + 6)
          .map((item) => (
            <div className="flex items-center" key={item.categoryName}>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {item.categoryName}
                </p>
              </div>
              <div className="ml-auto font-medium">
                {item.hoursTracked} hours
              </div>
            </div>
          ))}
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 ">
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => getPreviousPage()}
          disabled={!breakdownPage}
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => getNextPage()}
          disabled={breakdownPage === maxPage}
        >
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
