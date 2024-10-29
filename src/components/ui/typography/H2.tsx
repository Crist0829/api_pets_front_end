import { PropsWithChildren } from "react";

export function TypographyH2({ children }: PropsWithChildren) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}