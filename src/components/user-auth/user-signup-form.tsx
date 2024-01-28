"use client";

import React, { useState } from "react";

import { Button } from "~/components/ui/button";
import { Icons } from "~/components/ui/icons";
import { signIn } from "next-auth/react";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import Link from "next/link";

type LoginTypes = "" | "github" | "email" | "google";

export function UserSignupForm() {
  const [isLoading, setIsLoading] = useState<LoginTypes>("");
  const [email, setEmail] = useState<string>("");

  async function signInWithGithub() {
    setIsLoading("github");
    await signIn("github", {
      callbackUrl: `${window.location.origin}/dashboard`,
    });
  }

  async function signInWithGoogle() {
    setIsLoading("google");
    await signIn("google", {
      callbackUrl: `${window.location.origin}/dashboard`,
    });
  }

  async function signInWithEmail(e: { preventDefault: () => void }) {
    e.preventDefault();
    setIsLoading("email");
    await signIn("email", {
      email,
      callbackUrl: `${window.location.origin}/dashboard`,
    });
  }

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-between p-10">
      <div>
        <p className="text-2xl font-semibold text-neutral-200">
          🔒 <span className="italic">locked-in</span>
        </p>
      </div>

      <div className="grid w-full flex-col items-center justify-center gap-6 p-5">
        <h1 className="text-center text-3xl font-bold text-neutral-200">
          Create your account
        </h1>
        <form onSubmit={signInWithEmail} className="">
          <div className="grid gap-3">
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                required
                placeholder="name@example.com"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading !== ""}
                className="w-80 py-6"
              />
            </div>
            <Button
              type="submit"
              // onClick={signInWithEmail}
              disabled={!email}
              className="w-80 bg-neutral-200 py-6 hover:bg-neutral-300"
            >
              {isLoading == "email" && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Continue
            </Button>
          </div>
        </form>

        <div className="flex items-center justify-center">
          <span className="text-sm font-medium text-neutral-200">
            Already have an account?{" "}
            <Link className="text-neutral-400" href={"/login"}>
              Log in
            </Link>
          </span>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-y-3">
          <Button
            className="flex w-80 items-center justify-center gap-x-2 rounded-lg border border-neutral-800 bg-black py-6 text-neutral-200 hover:bg-neutral-800"
            type="button"
            onClick={signInWithGithub}
            disabled={isLoading !== ""}
          >
            {isLoading !== "github" ? (
              <Icons.gitHub className="mr-2 h-4 w-4" />
            ) : (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Continue With Github
          </Button>
          <Button
            className="justify flex w-80 items-center gap-x-2 rounded-lg border border-neutral-800 bg-black py-6 text-neutral-200 hover:bg-neutral-800"
            type="button"
            onClick={signInWithGoogle}
            disabled={isLoading !== ""}
          >
            {isLoading !== "google" ? (
              <Icons.google className="mr-2 h-4 w-4" />
            ) : (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Continue With Google
          </Button>
        </div>
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
