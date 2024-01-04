import React, { useState } from "react";

import { Button } from "../ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

interface CategoryListProps {
  categoriesData: any;
}

export default function CategoryList({ categoriesData }: CategoryListProps) {
  if (!categoriesData) return;

  const [breakdownPage, setBreakdownPage] = useState<number>(0);
  const maxPage = Math.floor(categoriesData.length / 6);

  function getNextPage() {
    setBreakdownPage(breakdownPage + 1);
  }

  function getPreviousPage() {
    setBreakdownPage(breakdownPage - 1);
  }

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="space-y-7">
        {categoriesData
          ?.sort((a: any, b: any) => {
            return b.hoursTracked - a.hoursTracked; // sort in desc order
          })
          .slice(breakdownPage * 6, breakdownPage * 6 + 6)
          .map((item: any) => (
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
