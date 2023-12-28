import React from "react";
import { Icons } from "../ui/icons";

export default function Footer() {
  return (
    <footer aria-label="Site Footer" className="mt-10">
      <div className="flex items-center justify-between border-t border-neutral-800 px-8 py-8 text-center">
        <p className="text-xs text-neutral-400">Made by Faizan Rasool</p>
        <div className="mt-8 flex justify-center gap-3 sm:mt-0 lg:justify-end">
          <a
            href="https://github.com/faizanraso/locked-in"
            rel="noreferrer"
            target="_blank"
            className="text-neutral-400 transition hover:text-neutral-200"
          >
            <span className="sr-only">GitHub</span>
            <Icons.gitHub className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
