"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import LockInForm from "~/components/lock-in/lock-in-form";
import Footer from "~/components/shared/footer";
import Header from "~/components/shared/header";

export default function LockIn() {
  const { data, status } = useSession();

  if (status === "unauthenticated") redirect("/");

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-grow flex-col px-8 py-10">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-200">
          Lock-In 🔒
        </h2>
        <div className="flex flex-grow items-center justify-center py-2">
          <LockInForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
