import {
  createCustomerIfNull,
  hasSubscription
} from "@/lib/stripe";

import ProductSideBar from "@/components/layout/ProductSideBar";
import Case from "@/components/sections/product/subscription";
import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession(authConfig);
  const customer = await createCustomerIfNull();
  const hasSub = await hasSubscription();
  //const checkoutLink = await createCheckoutLink(String(customer));

  return (
    <main className="flex flex-row">
      <ProductSideBar productName="Subscription" />
      <Case />
    </main>
  );
}
