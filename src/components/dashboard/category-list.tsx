import React from "react";

export default function CategoryList() {
  const data = [
    { category: "Math 1ZB3", totalTime: 87 },
    { category: "Math 1ZC3", totalTime: 2 },
    { category: "Math 1D04", totalTime: 5 },
    { category: "Side Projects", totalTime: 1 },
    { category: "Temp", totalTime: 4 },
    { category: "Temp", totalTime: 4 },
    { category: "Temp", totalTime: 4 },
    { category: "Temp", totalTime: 4 },
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
    </div>
  );
}
