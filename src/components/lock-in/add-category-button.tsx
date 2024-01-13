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
import { api } from "~/trpc/react";

interface AddCategoryButtonProps {
  toast: any;
}

export default function AddCategoryButton({ toast }: AddCategoryButtonProps) {
  const [newCategoryName, setNewCategoryName] = useState<string>("");
  const [isCategoryModalOpen, setIsCategoryModalOpen] =
    useState<boolean>(false);

  const addCategoryMutation = api.userData.createCategory.useMutation({
    onSuccess: () => console.log("done"),
  });

  function addCategory(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (newCategoryName.length < 3) return //return failiure modal;
    addCategoryMutation.mutate({ categoryName: newCategoryName });
    setIsCategoryModalOpen(false);

    // return completion toast

    //mutation.success() or mutation.isError()
  }

  return (
    <Dialog open={isCategoryModalOpen} onOpenChange={setIsCategoryModalOpen}>
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
        <Input onChange={(e) => setNewCategoryName(e.target.value)} />
        <div className="flex w-full items-center justify-center">
          <Button
            size={"sm"}
            variant={"outline"}
            className="h-10 w-32 px-4"
            onClick={addCategory}
            disabled={addCategoryMutation.isLoading}
          >
            {addCategoryMutation.isLoading ? (
              <Icons.spinner className="h-4 w-4 animate-spin" />
            ) : (
              "Add Category"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
