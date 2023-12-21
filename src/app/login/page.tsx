import type { Metadata } from "next";

import { UserAuthForm } from "../../components/user-auth-form";

export const metadata: Metadata = {
  title: "locked-in",
  description: "Log in to locked-in",
};

export default function LoginPage() {
  return (
    <main className="absolute flex min-h-screen w-screen items-center justify-center overflow-hidden bg-black">
      <UserAuthForm />
    </main>
  );
}
