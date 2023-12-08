"use client";

import * as React from "react";
import { Button } from "~/components/ui/button";
import { Icons } from "~/components/ui/icons";
import { signIn } from "next-auth/react";

import { cn } from "~/lib/utils";

export function UserAuthForm() {
  function signInWithGithub() {
    signIn("github", { callbackUrl: window.location.origin });
  }

  function signInWithGoogle() {
    signIn("google", { callbackUrl: window.location.origin });
  }

  return (
    <div
      className={cn(
        "relative z-10 m-auto h-fit w-[475px] flex-col items-center justify-center rounded-xl bg-white px-6 py-10 sm:px-10",
      )}
    >
      <div className="flex flex-col">
        <div className="py-3">
          <p className="text-xl">
            🔒 <span className="font-bold italic">locked in</span>
          </p>
        </div>
        <div className="py-3 text-center">
          <p className="text-xs font-medium text-gray-400">
            Continue to Locked In
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-y-3 pb-6 pt-3">
        <Button variant="outline" type="button" onClick={signInWithGithub}>
          <Icons.gitHub className="mr-2 h-4 w-4" />
          Continue With Github
        </Button>
        <Button variant="outline" type="button" onClick={signInWithGoogle}>
          <Icons.google className="mr-2 h-4 w-4" />
          Continue With Google
        </Button>
      </div>

      <div className="absolute bottom-0 flex flex-row gap-x-3 py-3">
        <span
          onClick={() => alert("test")}
          className="cursor-pointer text-xs font-medium text-gray-500 transition duration-150 hover:underline"
        >
          Help
        </span>
        <span
          onClick={() => alert("test")}
          className="cursor-pointer text-xs font-medium text-gray-500 transition duration-150 hover:underline"
        >
          Privacy
        </span>
        <span
          onClick={() => alert("test")}
          className="cursor-pointer text-xs font-medium text-gray-500 transition duration-150 hover:underline"
        >
          Terms
        </span>
      </div>
    </div>
  );
}
