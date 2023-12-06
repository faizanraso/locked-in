import type { Metadata } from "next";

// import { cn } from "~/lib/utils";
import { UserAuthForm } from "../_components/UserAuthForm";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <main className="relative flex h-screen items-center justify-center bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-25 brightness-100 contrast-150"></div>
      <UserAuthForm />
    </main>
  );
}
