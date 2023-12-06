"use client";

import * as React from "react";
import { Button } from "~/components/ui/button";
import { Icons } from "~/components/ui/icons";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

import { cn } from "~/lib/utils";

// tslint:disable-next-line
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
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
        "flex h-full w-full flex-col rounded-xl bg-white p-10 sm:h-3/6 sm:w-4/6 md:w-3/6 lg:h-3/6 lg:w-3/6",
      )}
    >
      <div className="justify-between">
        <div className="py-3">
          <p className="text-xl">
            🔒 <span className="font-bold italic">locked in</span>
          </p>
        </div>
        <div className="py-3 text-center">
          <p className="text-xs text-gray-400">Continue to Locked In</p>
        </div>
      </div>

      <div className="flex h-full w-full flex-col justify-between py-3">
        <Button variant="outline" type="button" disabled={isLoading}>
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.gitHub className="mr-2 h-4 w-4" />
          )}{" "}
          Github
        </Button>

        <div>test</div>
      </div>
    </div>
  );
}
