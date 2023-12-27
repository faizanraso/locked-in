import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";

import React from "react";
import { Button } from "../ui/button";

export default function CategoryList() {
  const data = [
    { category: "Math 1ZB3", totalTime: 87 },
    { category: "Math 1ZC3", totalTime: 2 },
    { category: "Math 1D04", totalTime: 5 },
    { category: "Side Projects", totalTime: 1 },
    { category: "Temp", totalTime: 4 },
    { category: "Temp", totalTime: 4 },
  ];

  return (
    <div className="space-y-8 overflow-y-auto">
      {data
        .sort((a, b) => {
          return b.totalTime - a.totalTime; // sort in desc order
        })
        .map((item) => (
          <div className="flex items-center" key={item.category}>
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                {item.category}
              </p>
            </div>
            <div className="ml-auto font-medium">{item.totalTime} hours</div>
          </div>
        ))}
      <div className="flex flex-row items-center justify-center space-x-2">
        {/* <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex"
          //   onClick={() => table.setPageIndex(0)}
          //   disabled={!table.getCanPreviousPage()}
        >
          <DoubleArrowLeftIcon className="h-4 w-4" />
        </Button> */}
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          //   onClick={() => table.previousPage()}
          //   disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          //   onClick={() => table.nextPage()}
          //   disabled={!table.getCanNextPage()}
        >
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
        {/* <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex"
          //   onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          //   disabled={!table.getCanNextPage()}
        >
          <DoubleArrowRightIcon className="h-4 w-4" />
        </Button> */}
      </div>
    </div>
  );
}
