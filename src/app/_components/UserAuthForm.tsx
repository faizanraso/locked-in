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
        "flex h-full w-full flex-col rounded-xl bg-white p-10 sm:h-4/6 sm:w-4/6 md:w-3/6 lg:h-4/6 lg:w-3/6",
      )}
    >
      <div className="justify-between">
        <div className="py-3">
          <p className="text-xl font-bold">🔒 locked in</p>
        </div>
        <div className="py-3">
          <p className="text-md font-semibold">Log In</p>
          <p className="text-xs text-gray-400">Continue to Locked In</p>
        </div>
      </div>

      <div className="flex h-full w-full flex-col justify-between py-3">
        {/* <form onSubmit={onSubmit} className="flex flex-col"> */}
        {/* <div className="flex flex-col">
            <div className="py-2.5">
              <Label className="" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
                className=""
              />
            </div>
            <Button disabled={isLoading} className="font-medium">
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Continue with Email
            </Button>
          </div> */}

        {/* <div className="relative py-2.5">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-sm lowercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or
              </span>
            </div>
          </div> */}

        {/* </form> */}

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
