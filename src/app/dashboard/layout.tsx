import Header from "@/components/layout/Header";
import { authOptions } from "@/pages1/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import React from "react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
    const session = await getServerSession(authOptions)
    if (session) {
        console.log('user is logged in!')
    } else {
        redirect('/api/auth/signin')
    }
  return (
    <div className="max-w-5xl m-auto w-full px-4">
      <Header />
      {children}
    </div>
  );
};

export default DashboardLayout;
