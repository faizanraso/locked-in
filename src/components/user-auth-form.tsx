"use client";

import * as React from "react";
import { Button } from "~/components/ui/button";
import { Icons } from "~/components/ui/icons";
import { signIn } from "next-auth/react";

import { cn } from "~/lib/utils";

export function UserAuthForm() {
  async function signInWithGithub() {
    await signIn("github", { callbackUrl: window.location.origin });
  }

  async function signInWithGoogle() {
    await signIn("google", { callbackUrl: window.location.origin });
  }

  return (
    <div
      className={cn(
        "relative z-10 m-auto h-fit w-[475px] flex-col items-center justify-center rounded-xl border border-neutral-800 bg-black px-6 py-10 text-black sm:px-10",
      )}
    >
      <div className="flex flex-col">
        <div className="py-3">
          <p className="text-xl font-semibold text-neutral-200">
            🔒 <span className="italic">locked-in</span>
          </p>
        </div>
        <div className="py-3 text-center">
          <p className="text-xs font-medium text-neutral-400">
            Continue to Locked In
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-y-3 pb-6 pt-3">
        <Button
          className="flex gap-x-2 rounded-lg border border-neutral-800 bg-black p-2 text-neutral-200 hover:bg-neutral-800"
          type="button"
          onClick={signInWithGithub}
        >
          <Icons.gitHub className="mr-2 h-4 w-4" />
          Continue With Github
        </Button>
        <Button
          className="flex gap-x-2 rounded-lg border border-neutral-800 bg-black p-2 text-neutral-200 hover:bg-neutral-800"
          type="button"
          onClick={signInWithGoogle}
        >
          <Icons.google className="mr-2 h-4 w-4" />
          Continue With Google
        </Button>
      </div>

      <div className="absolute bottom-0 flex flex-row gap-x-3 py-3">
        <span
          onClick={() => alert("test")}
          className="cursor-pointer text-xs font-medium text-neutral-400 transition duration-150 hover:underline"
        >
          Help
        </span>
        <span
          onClick={() => alert("test")}
          className="cursor-pointer text-xs font-medium text-neutral-400 transition duration-150 hover:underline"
        >
          Privacy
        </span>
        <span
          onClick={() => alert("test")}
          className="cursor-pointer text-xs font-medium text-neutral-400 transition duration-150 hover:underline"
        >
          Terms
        </span>
      </div>
    </div>
  );
}
