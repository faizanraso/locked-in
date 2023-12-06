import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "~/lib/utils";
import { UserAuthForm } from "../_components/UserAuthForm";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <main className="flex h-screen items-center justify-center bg-gradient-to-r from-cyan-400 to-blue-500">
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-white sm:h-4/6 sm:w-4/6 md:w-3/6 lg:h-4/6 lg:w-3/6">
        <UserAuthForm className="w-4/6"/>
      </div>
    </main>
  );
}
