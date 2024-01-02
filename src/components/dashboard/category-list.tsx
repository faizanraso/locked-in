import React from "react";
import { Button } from "../ui/button";

export default function CategoryList() {
  const data = [
    { categoryName: "Math 1ZB3", hoursTracked: 87 },
    { categoryName: "Math 1ZC3", hoursTracked: 2 },
  ];

  return (
    <div className="flex flex-col justify-between">
      <div className="space-y-8">
        {data
          .sort((a, b) => {
            return b.hoursTracked - a.hoursTracked; // sort in desc order
          })
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
    </div>
  );
}
