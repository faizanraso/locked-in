"use client";

import { useEffect, useRef, useState } from "react";
import { getTimerDisplayText } from "~/lib/functions/get-timer-display-text";
import { api } from "~/trpc/react";
import { useToast } from "../ui/use-toast";

import { Button } from "~/components/ui/button";
import AddCategoryButton from "./add-category-button";
import { CategoriesCombobox } from "./categories-combobox";
import { useRouter } from "next/navigation";

export default function LockInForm() {
  const { toast } = useToast();
  const timeInterval = useRef<any>(null);
  const [userCategory, setUserCategory] = useState<string>("");
  const [timer, setTimer] = useState<number>(0);
  const [timerDisplayText, setTimerDisplayText] = useState<string>("00:00:00");
  const [isSessionActive, setIsSessionActive] = useState<boolean>(false);
  const [allCategoriesData, setAllCategoriesData] = useState<any>();
  const [isCategoryModalOpen, setIsCategoryModalOpen] =
    useState<boolean>(false);

  const categoriesDataQuery = api.userData.getUserCategoryData.useQuery();

  useEffect(() => {
    setTimerDisplayText(getTimerDisplayText(timer));
  }, [timer]);

  useEffect(() => {
    async function refetchData() {
      const updatedData = await categoriesDataQuery.refetch();
      console.log(updatedData.data)
      setAllCategoriesData(updatedData.data);
    }

    if (!allCategoriesData || !isCategoryModalOpen) {
      refetchData();
    }
  }, [isCategoryModalOpen]);

  function handleStart() {
    if (isSessionActive) return;
    if (!userCategory) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description:
          "Looks like you forgot to select a category for your session.",
      });
      return;
    }

    setIsSessionActive(true);
    toast({
      variant: "success",
      description: "Session has begun. Time to lock in 🔒.",
    });
    timeInterval.current = setInterval(() => {
      setTimer((prev) => prev + 1000);
    }, 1000);
  }

  function handleStop() {
    if (!isSessionActive) return;
    setIsSessionActive(false);
    clearInterval(timeInterval.current);
    setTimer(0);
  }

  return (
    <section className="flex flex-col items-center justify-center gap-y-3 rounded-lg border border-neutral-800 p-8">
      <div className="w-[300px] items-center rounded-lg border border-neutral-800 bg-black px-12 py-2 text-center">
        <span className="min-w-96 text-3xl text-neutral-100">
          {timerDisplayText}
        </span>
      </div>
      <div className="flex flex-row py-2">
        <CategoriesCombobox
          userCategory={userCategory}
          setUserCategory={setUserCategory}
          allCategoriesData={allCategoriesData}
        />
        <AddCategoryButton
          toast={toast}
          allCategoriesData={allCategoriesData}
          isCategoryModalOpen={isCategoryModalOpen}
          setIsCategoryModalOpen={setIsCategoryModalOpen}
        />
      </div>
      <div className="flex flex-col gap-y-4 py-2">
        <Button
          className="w-[300px] bg-neutral-100 hover:bg-neutral-300"
          disabled={isSessionActive}
          onClick={handleStart}
        >
          Start Session
        </Button>
        <Button
          className="w-[300px] bg-red-700 text-neutral-100 hover:bg-red-900"
          disabled={!isSessionActive}
          onClick={handleStop}
        >
          Stop Session
        </Button>
      </div>
    </section>
  );
}
