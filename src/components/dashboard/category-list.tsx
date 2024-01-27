/* eslint-disable */

import React, { useState } from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Button } from "../ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { cn } from "~/lib/utils/tailwind-merge";

interface CategoryListProps {
  userCategoriesData: any;
}

export default function CategoryList({
  userCategoriesData,
}: CategoryListProps) {
  // if (!categoriesData) return;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const maxPage = Math.ceil(userCategoriesData?.length / 6);

  function getNextPage() {
    setCurrentPage(currentPage + 1);
  }

  function getPreviousPage() {
    setCurrentPage(currentPage - 1);
  }

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="space-y-7">
        {userCategoriesData ? (
          userCategoriesData
            ?.sort(
              (
                a: { durationTracked: number },
                b: { durationTracked: number },
              ) => {
                return b.durationTracked - a.durationTracked; // sort in desc order
              },
            )
            .slice((currentPage - 1) * 6, (currentPage - 1) * 6 + 6)
            .map((item: { name: string; durationTracked: number }) => (
              <div className="flex items-center" key={item.name}>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {item.name}
                  </p>
                </div>
                <div className="ml-auto font-medium">
                  {item.durationTracked} hours
                </div>
              </div>
            ))
        ) : (
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <div className="space-y-">
              {Array.from({ length: 6 }, (_, index) => (
                <div
                  key={index}
                  className={cn(index === 5 ? "text-xl" : "pb-5 text-xl")}
                >
                  <Skeleton />
                </div>
              ))}
            </div>
          </SkeletonTheme>
        )}
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 ">
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => getPreviousPage()}
          disabled={!userCategoriesData || currentPage === 1}
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => getNextPage()}
          disabled={!userCategoriesData || currentPage === maxPage}
        >
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
