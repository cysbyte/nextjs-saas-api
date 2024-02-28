import Header from "@/components/layout/Header";
import { loginIsRequiredServer } from "@/lib/auth";

import { createCheckoutLink, createCustomerIfNull, hasSubscription } from "@/lib/stripe";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    // await loginIsRequiredServer();
    // const customer = await createCustomerIfNull();
    
    // const hasSub = await hasSubscription()
    // console.log(hasSub)

  return (
    <div className="">
      <Header />
      <div className="max-w-5xl m-auto w-full px-4">{children}</div>
    </div>
  );
}