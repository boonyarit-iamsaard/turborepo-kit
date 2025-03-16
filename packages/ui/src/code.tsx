import type { ReactNode } from "react";

type CodeProps = {
  children: ReactNode;
  className?: string;
};

export function Code({ children, className }: CodeProps) {
  return <code className={className}>{children}</code>;
}
