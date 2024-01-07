import React from "react";
import { Button } from "~/components/ui/button";
import { CategoriesCombobox } from "./categories-combobox";

export default function LockInForm() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-y-3">
      <div className="w-[300px] items-center rounded-lg border border-neutral-800 bg-black px-12 py-4 text-center">
        <span className="min-w-96 text-3xl text-neutral-100">1:02:32</span>
      </div>
      <div className="flex flex-row">
        <CategoriesCombobox />
        <Button className="ml-[10px] w-[40px] items-center justify-center rounded-full border border-neutral-800 bg-black text-xl text-neutral-100 hover:bg-neutral-800">
          +
        </Button>
      </div>
    </section>
  );
}
