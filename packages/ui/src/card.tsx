import type { ReactNode } from "react";

type CardProps = {
  className?: string;
  title: string;
  children: ReactNode;
};

export function Card({ className, title, children }: CardProps) {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
