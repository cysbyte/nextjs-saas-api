import ProductSideBar from "@/components/layout/ProductSideBar";
import React from "react";
import Case from "@/components/sections/product/api-access";
import { loginIsRequiredServer } from "@/lib/auth";

const APIAccess = async () => {
  await loginIsRequiredServer();

  return (
    <main className="flex flex-row">
      <ProductSideBar productName="APIAccess" />
      {/* @ts-expect-error Async Server Component */}
      <Case />
    </main>
  );
};

export default APIAccess;
