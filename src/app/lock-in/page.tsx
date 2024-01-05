import React from "react";
import LockInForm from "~/components/lock-in/lock-in-form";
import Footer from "~/components/shared/footer";
import Header from "~/components/shared/header";

export default function LockIn() {
  return (
    <div className="">
      <Header />
      <LockInForm />
      <Footer />
    </div>
  );
}
