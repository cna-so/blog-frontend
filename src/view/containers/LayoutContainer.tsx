import React, { ReactNode } from "react";
import Header from "@/view/components/header";

const LayoutContainer = ({ children }: { children: ReactNode }) => {
  return (
    <section className="container mx-auto px-4">
      <Header />
      <div className="w-full">{children}</div>
    </section>
  );
};

export default LayoutContainer;
