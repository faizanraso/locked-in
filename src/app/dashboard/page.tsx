import React from "react";
import ComponentsGrid from "~/components/dashboard/components-grid";
import Footer from "~/components/shared/footer";
import Header from "~/components/shared/header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-200">
              Dashboard
            </h2>
          </div>
          <ComponentsGrid />
        </div>
      </main>
      <Footer />
    </>
  );
}
