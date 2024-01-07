"use client";

import { useState } from "react";

import { Button } from "~/components/ui/button";
import { CategoriesCombobox } from "./categories-combobox";

export default function LockInForm() {
  const [isSessionActive, setIsSessionActive] = useState<boolean>(false);

  return (
    <section className="flex flex-col items-center justify-center gap-y-3 rounded-lg border border-neutral-800 p-8">
      <div className="w-[300px] items-center rounded-lg border border-neutral-800 bg-black px-12 py-2 text-center">
        <span className="min-w-96 text-3xl text-neutral-100">00:00:00</span>
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
        >
          Start Session
        </Button>
        <Button
          className="w-[300px] bg-red-700 text-neutral-100 hover:bg-red-900"
          disabled={!isSessionActive}
        >
          Stop Session
        </Button>
      </div>
    </section>
  );
}
