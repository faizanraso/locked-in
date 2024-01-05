"use client";

import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import ComponentsGrid from "~/components/dashboard/components-grid";
import Footer from "~/components/shared/footer";
import Header from "~/components/shared/header";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";

export default function HomePage() {
  // const router = useRouter();

  // const test = api.userData.create.useMutation({
  //   onSuccess: () => {
  //     router.refresh();
  //   },
  // });

  const { data, status } = useSession();

  if (status === "unauthenticated") redirect("/");

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <main className="mb-auto">
        <div className="flex-1 space-y-4 px-8 pt-10">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-200">
              Dashboard
            </h2>
          </div>
          <ComponentsGrid />
          <div className="flex w-full items-center justify-center py-3">
            <Button className="flex gap-x-2 rounded-lg bg-neutral-200 p-2 hover:bg-neutral-400">
              Submit Feedback
            </Button>
          </div>
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
    </div>
  );
}
