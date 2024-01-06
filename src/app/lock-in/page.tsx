import React from "react";
import LockInForm from "~/components/lock-in/lock-in-form";
import Footer from "~/components/shared/footer";
import Header from "~/components/shared/header";

export default function LockIn() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <main className="mb-auto">
        <div className="flex-1 space-y-4 px-8 pt-10">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-200">
              Lock-In 🔒
            </h2>
          </div>
          <div className="flex w-full items-center justify-center py-3">
            <LockInForm />
          </div>

          {/* <div className="flex w-full items-center justify-center py-3">
            in case needed
          </div> */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
