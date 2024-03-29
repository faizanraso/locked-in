import React from "react";
import { api } from "~/trpc/react";

import { CurrentWeekOverview } from "~/components/dashboard/current-week-overview";
import CategoryList from "./category-list";
import { Icons } from "../ui/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { displayConvertedTime } from "~/lib/helper";

export default function ComponentsGrid() {
  const { isLoading, data: userData } =
    api.userData.getDashboardData.useQuery();

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-neutral-200">
              Total Time "Locked-In"
            </CardTitle>
            <Icons.clock className="h-4 w-4 text-muted-foreground text-neutral-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neutral-200">
              {isLoading ? (
                <Skeleton />
              ) : (
                displayConvertedTime(
                  userData?.UserLISessions
                    ? userData?.UserLISessions.reduce(
                        (acc, curr) => acc + curr.duration,
                        0,
                      )
                    : 0,
                )
              )}
            </div>
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
            <Icons.clock className="h-4 w-4 text-muted-foreground text-neutral-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neutral-200">
              {isLoading ? (
                <Skeleton />
              ) : userData?.UserLISessions.length ? (
                displayConvertedTime(
                  userData?.UserLISessions.reduce(
                    (acc, curr) => acc + curr.duration,
                    0,
                  ) / userData.UserLISessions.length,
                )
              ) : (
                0
              )}
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
            <Icons.hash className="h-4 w-4 text-muted-foreground text-neutral-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neutral-200">
              {isLoading ? <Skeleton /> : userData?.UserLISessions.length}
            </div>
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
            <Icons.list className="h-4 w-4 text-muted-foreground text-neutral-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neutral-200">
              {isLoading ? <Skeleton /> : userData?.userCategories.length}
            </div>
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
            <CurrentWeekOverview />
          </CardContent>
        </Card>
        <Card className="col-span-7 flex h-full min-h-96 flex-col lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-neutral-200">Breakdown</CardTitle>
            <CardDescription className="text-neutral-400">
              Some interesting description here
            </CardDescription>
          </CardHeader>
          <CardContent className="flex h-full flex-col justify-between">
            <CategoryList userCategoriesData={userData?.userCategories} />
          </CardContent>
        </Card>
      </div>
    </SkeletonTheme>
  );
}
