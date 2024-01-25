"use client";

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
import { cn } from "~/lib/utils/tailwind-merge";

interface AddCategoryButtonProps {
  toast: any;
  allCategoriesData: any;
  isCategoryModalOpen: any;
  setIsCategoryModalOpen: any;
  disabled: boolean;
}

export default function AddCategoryButton({
  toast,
  allCategoriesData,
  isCategoryModalOpen,
  setIsCategoryModalOpen,
  disabled,
}: AddCategoryButtonProps) {
  const [newCategoryName, setNewCategoryName] = useState<string>("");

  const addCategoryMutation = api.userData.createCategory.useMutation({
    onSuccess: () => {
      toast({
        variant: "success",
        description: "Category successfully created ✅ ",
      });
      setIsCategoryModalOpen(false);
    },
    onError: () =>
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Something went wrong. Please try again.",
      }),
  });

  function addCategory(e: { preventDefault: () => void }) {
    e.preventDefault();

    // Get all existing categories. This will be used later to avoid duplicate categories
    const existingUserCategories = allCategoriesData.map(
      (categoryItem: { name: string }) => {
        return categoryItem.name.toLowerCase();
      },
    );

    if (newCategoryName.length < 2) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description:
          "Looks like your category name is invalid. Make sure it is 3 or more characters.",
      });
      return;
    }

    // Check if the category already exists
    if (existingUserCategories.includes(newCategoryName.toLowerCase())) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description:
          "Looks like this category already exists, no need to create it again.",
      });
      return;
    }

    addCategoryMutation.mutate({ categoryName: newCategoryName });
  }

  return (
    <Dialog open={isCategoryModalOpen} onOpenChange={setIsCategoryModalOpen}>
      <DialogTrigger
        disabled={disabled}
        className={cn(
          "ml-[10px] w-[40px] items-center justify-center rounded-full border bg-black text-lg font-medium text-neutral-100",
          disabled
            ? "border-neutral-900 text-neutral-500"
            : "border-neutral-800 hover:bg-neutral-800",
        )}
      >
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
