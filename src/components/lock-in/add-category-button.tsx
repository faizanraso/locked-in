import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

interface AddCategoryButtonProps {
  toast: any;
}

export default function AddCategoryButton({ toast }: AddCategoryButtonProps) {
  const [categoryName, setCategoryName] = useState<string>("");
  let isLoading = true;

  return (
    <Dialog>
      <DialogTrigger className="ml-[10px] w-[40px] items-center justify-center rounded-full border border-neutral-800 bg-black text-lg font-medium text-neutral-100 hover:bg-neutral-800">
        +
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a new category</DialogTitle>
          <DialogDescription className="pb-1 pt-3">
            Enter a name for a new category you'd like to track.
          </DialogDescription>
        </DialogHeader>
        <Input onChange={(e) => setCategoryName(e.target.value)} />
        <div className="flex w-full items-center justify-center">
          <Button size={"sm"} variant={"outline"} className="h-10 px-4">
            Add Category
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
