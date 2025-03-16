"use client";

import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`bg-slate-800 text-white rounded-md px-3 py-2 h-10 ${className}`}
    >
      {children}
    </button>
  );
};
