"use client";

import { useRouter } from "next/navigation";
import React from "react";
import ComponentsGrid from "~/components/dashboard/components-grid";
import Footer from "~/components/shared/footer";
import Header from "~/components/shared/header";
import { api } from "~/trpc/react";

export default function HomePage() {
  const router = useRouter();

  const test = api.userData.create.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  return (
    <>
      <Header />
      <main className="">
        <div className="flex-1 space-y-4 px-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-200">
              Dashboard
            </h2>
          </div>
          <ComponentsGrid />
          {/* <button
            onClick={(e) => {
              e.preventDefault();
              test.mutate({ categoryName: "test" });
            }}
            className="bg-white p-5 text-black"
          >
            TEST
          </button> */}
        </div>
      </main>
      <Footer />
    </>
  );
}
