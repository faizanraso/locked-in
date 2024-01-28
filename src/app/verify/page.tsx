import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";

export default function VerifyPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="w-full max-w-md space-y-6 rounded-lg border border-neutral-800 bg-transparent bg-opacity-25 p-8 text-center shadow-lg backdrop-blur-lg backdrop-filter">
        <h1 className="text-2xl font-bold text-neutral-200">
          Verify Your Email
        </h1>
        <p className="text-sm text-neutral-400">
          We've sent a verification link to your email. Please check your inbox
          and click the link to verify your email.
        </p>
      </div>
    </div>
  );
}
