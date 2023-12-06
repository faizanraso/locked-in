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
      <UserAuthForm />
    </main>
  );
}
