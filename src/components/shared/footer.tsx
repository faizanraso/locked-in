import React from "react";
import { Icons } from "../ui/icons";

export default function Footer() {
  return (
    <footer aria-label="Site Footer" className="items-center justify-center ">
      <div className="flex items-center justify-between border-t border-neutral-800 px-8 py-5 text-center">
        <p className="text-xs text-neutral-400">Made by Faizan Rasool</p>
        <div className="flex items-center justify-center gap-3 lg:justify-end">
          <button className="text-neutral-400 transition hover:text-neutral-200">
            <Icons.feedback className="h-5 w-5" />
          </button>
          <a
            href="https://github.com/faizanraso/locked-in"
            rel="noreferrer"
            target="_blank"
            className="text-neutral-400 transition hover:text-neutral-200"
          >
            <span className="sr-only">GitHub</span>
            <Icons.gitHub className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
