"use client";

import { useEffect, useRef, useState } from "react";

import { Button } from "~/components/ui/button";
import { CategoriesCombobox } from "./categories-combobox";

export default function LockInForm() {
  let timeInterval = useRef<any>(null);
  const [timer, setTimer] = useState<number>(0);
  const [timerDisplayText, setTimerDisplayText] = useState<string>("00:00:00");
  const [isSessionActive, setIsSessionActive] = useState<boolean>(false);

  function handleStart() {
    if (isSessionActive) return;
    setIsSessionActive(true);
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

  useEffect(() => {
    getTimerDisplayText();
  }, [timer]);

  function getTimerDisplayText() {
    let seconds = Math.floor(timer / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    setTimerDisplayText(
      `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`,
    );
  }

  return (
    <section className="flex flex-col items-center justify-center gap-y-3 rounded-lg border border-neutral-800 p-8">
      <div className="w-[300px] items-center rounded-lg border border-neutral-800 bg-black px-12 py-2 text-center">
        <span className="min-w-96 text-3xl text-neutral-100">
          {timerDisplayText}
        </span>
      </div>
      <div className="flex flex-row py-2">
        <CategoriesCombobox />
        <Button className="ml-[10px] w-[40px] items-center justify-center rounded-full border border-neutral-800 bg-black text-lg font-medium text-neutral-100 hover:bg-neutral-800">
          +
        </Button>
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
