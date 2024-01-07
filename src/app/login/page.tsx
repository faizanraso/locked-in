import type { Metadata } from "next";

import { redirect } from "next/navigation";
import { UserLoginForm } from "~/components/user-auth/user-login-form";
import { getServerAuthSession } from "~/server/auth";

export const metadata: Metadata = {
  title: "locked-in",
  description: "Log in to locked-in",
};

export default async function LoginPage() {
  const data = await getServerAuthSession();

  if (data?.user) redirect("/dashboard");

  return (
    <main className="absolute flex min-h-screen w-screen items-center justify-center overflow-hidden bg-black">
      <UserLoginForm />
    </main>
  );
}
