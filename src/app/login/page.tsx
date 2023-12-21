import type { Metadata } from "next";

// import { cn } from "~/lib/utils";
import { UserAuthForm } from "../../components/user-auth-form";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <main className="absolute flex min-h-screen w-screen items-center justify-center overflow-hidden bg-black">
      <UserAuthForm />
    </main>
  );
}
