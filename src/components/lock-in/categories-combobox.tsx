"use client";

import { useEffect, useState } from "react";

import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "~/components/ui/command";
import { cn } from "~/lib/utils/tailwind-merge";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

interface CategoriesComboboxProps {
  userCategory: string;
  setUserCategory: any;
  allCategoriesData: any;
  disabled: boolean;
}

export function CategoriesCombobox({
  userCategory,
  setUserCategory,
  allCategoriesData,
  disabled,
}: CategoriesComboboxProps) {
  const [open, setOpen] = useState(false);
  const [allCategories, setAllCategories] = useState<any>([]);
  let categoriesArr: any[];

  useEffect(() => {
    if (allCategoriesData) {
      categoriesArr = allCategoriesData.map((category: { name: string }) => ({
        value: category.name.toLowerCase(),
        label: category.name,
      }));

      setAllCategories(categoriesArr);
    }
  }, [allCategoriesData]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="text-neutral-200">
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[250px] justify-between text-neutral-200"
          disabled={disabled}
        >
          {userCategory
            ? allCategories.find(
                (category: { value: string; label: string }) =>
                  category.label === userCategory,
              )?.label
            : "Select category..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 text-neutral-200 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0 text-neutral-200">
        <Command className="">
          <CommandInput placeholder="Search category..." />
          <CommandEmpty>No category found.</CommandEmpty>
          <CommandGroup>
            {allCategories.map((category: { value: string; label: string }) => (
              <CommandItem
                key={category.value}
                value={category.value}
                onSelect={() => {
                  setUserCategory(
                    category.label === userCategory ? "" : category.label,
                  );
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    userCategory === category.label
                      ? "opacity-100"
                      : "opacity-0",
                  )}
                />
                {category.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
