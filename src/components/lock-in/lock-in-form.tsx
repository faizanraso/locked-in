import React from "react";
import { CategoriesCombobox } from "./categories-combobox";

export default function LockInForm() {
  return (
    <section className="flex flex-col items-center justify-center gap-y-3 w-full bg-white">
      <div className="rounded-lg bg-neutral-900 px-12 py-4 w-[300px]">
        <span className="min-w-96 text-3xl">1:02:32</span>
      </div>
      <div className="">
        <CategoriesCombobox />
      </div>
    </section>
  );
}
