"use client";

import * as React from "react";
import { Button } from "~/components/ui/button";
import { Icons } from "~/components/ui/icons";
import { signIn } from "next-auth/react";

import { cn } from "~/lib/utils";

export function UserAuthForm() {
  async function signInWithGithub() {
    await signIn("github", {
      callbackUrl: `${window.location.origin}/dashboard`,
    });
  }

  async function signInWithGoogle() {
    await signIn("google", {
      callbackUrl: `${window.location.origin}/dashboard`,
    });
  }

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-between p-10">
      <div>
        <p className="text-xl font-semibold text-neutral-200">
          🔒 <span className="italic">locked-in</span>
        </p>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-y-3 p-5">
        <Button
          className="flex w-72 items-center justify-center gap-x-2 rounded-lg border border-neutral-800 bg-black py-6 text-neutral-200 hover:bg-neutral-800"
          type="button"
          onClick={signInWithGithub}
        >
          <Icons.gitHub className="mr-2 h-4 w-4" />
          Continue With Github
        </Button>
        <Button
          className="justify flex w-72 items-center gap-x-2 rounded-lg border border-neutral-800 bg-black py-6 text-neutral-200 hover:bg-neutral-800"
          type="button"
          onClick={signInWithGoogle}
        >
          <Icons.google className="mr-2 h-4 w-4" />
          Continue With Google
        </Button>
      </div>

      <div className="flex flex-row items-center justify-center gap-x-3 py-3">
        <span
          onClick={() => alert("test")}
          className="cursor-pointer text-xs font-medium text-neutral-400 transition duration-150 hover:underline"
        >
          Help
        </span>
        <span className="text-xs font-medium text-neutral-400">|</span>
        <span
          onClick={() => alert("test")}
          className="cursor-pointer text-xs font-medium text-neutral-400 transition duration-150 hover:underline"
        >
          Privacy
        </span>
        <span className="text-xs font-medium text-neutral-400">|</span>
        <span
          onClick={() => alert("test")}
          className="cursor-pointer text-xs font-medium text-neutral-400 transition duration-150 hover:underline"
        >
          Terms
        </span>
      </div>
    </section>
  );
}
