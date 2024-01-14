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
  categoriesDataQuery: any;
}

export default function AddCategoryButton({
  toast,
  categoriesDataQuery,
}: AddCategoryButtonProps) {
  const [newCategoryName, setNewCategoryName] = useState<string>("");
  const [isCategoryModalOpen, setIsCategoryModalOpen] =
    useState<boolean>(false);

  const addCategoryMutation = api.userData.createCategory.useMutation({
    onSuccess: () => console.log("done"),
  });

  function addCategory(e: { preventDefault: () => void }) {
    e.preventDefault();

    // Get all existing categories. This will be used later to avoid duplicate categories
    const existingUserCategories =
      categoriesDataQuery.data.categoriesTracked.map((categoryItem: any) => {
        return categoryItem.categoryName.toLowerCase();
      });

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

    if (addCategoryMutation.isSuccess) {
      toast({
        variant: "success",
        description: "Category successfully created ✅ ",
      });
    }

    if (addCategoryMutation.isError) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Something went wrong. Please try again.",
      });
    }

    // refetch categories data
    categoriesDataQuery.refetch();
    setIsCategoryModalOpen(false);
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
