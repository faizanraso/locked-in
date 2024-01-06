import type { Metadata } from "next";

import { UserAuthForm } from "../../components/login/user-auth-form";
import { getServerAuthSession } from "~/server/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "locked-in",
  description: "Log in to locked-in",
};

export default async function LoginPage() {
  const data = await getServerAuthSession();

  if (data?.user) redirect("/dashboard");

  return (
    <main className="absolute flex min-h-screen w-screen items-center justify-center overflow-hidden bg-black">
      <UserAuthForm />
    </main>
  );
}
