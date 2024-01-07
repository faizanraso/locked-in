import type { Metadata } from "next";

import { redirect } from "next/navigation";
import { UserSignupForm } from "~/components/user-auth/user-signup-form";
import { getServerAuthSession } from "~/server/auth";

export const metadata: Metadata = {
  title: "locked-in",
  description: "Create Your Account",
};

export default async function LoginPage() {
  const data = await getServerAuthSession();

  if (data?.user) redirect("/dashboard");

  return (
    <main className="absolute flex min-h-screen w-screen items-center justify-center overflow-hidden bg-black">
      <UserSignupForm />
    </main>
  );
}
