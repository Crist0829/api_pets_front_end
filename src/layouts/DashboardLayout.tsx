import { NavBar } from "@/components/navbar/NavBar";
import { PropsWithChildren } from "react";


function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="">
      <NavBar />
      <main className="w-11/12 max-w-[1240px] mx-auto pt-1">{children}</main>
    </div>
  );
}

export { DashboardLayout };
