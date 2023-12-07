"use client";

import * as React from "react";
import { Button } from "~/components/ui/button";
import { Icons } from "~/components/ui/icons";

import { cn } from "~/lib/utils";

export function UserAuthForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div
      className={cn(
        " z-10 m-auto h-[545px] w-[475px] flex-col items-center justify-center rounded-xl bg-white px-6 py-10 sm:px-10",
      )}
    >
      <div className="flex flex-col">
        <div className="py-3">
          <p className="text-xl">
            🔒 <span className="font-bold italic">locked in</span>
          </p>
        </div>
        <div className="py-3 text-center">
          <p className="text-xs text-gray-400">Continue to Locked In</p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-y-3 py-3">
        <Button variant="outline" type="button" disabled={isLoading}>
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.gitHub className="mr-2 h-4 w-4" />
          )}{" "}
          Github
        </Button>
        <Button variant="outline" type="button" disabled={isLoading}>
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.gitHub className="mr-2 h-4 w-4" />
          )}{" "}
          Github
        </Button>
      </div>
    </div>
  );
}
