"use client";
import GoogleAuthButton from "@/components/shared/GoogleAuthButton";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react"; //]

const Case = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <div className="-mt-20">
        <GoogleAuthButton />
      </div>

      <div className="flex w-fit bg-white group cursor-pointer px-20 py-2 mt-6 rounded-md justify-center items-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.7261 10.1538C26.6529 10.1538 29.0682 8.81119 30.5065 7.02098C31.8091 5.3986 32.759 3.13287 32.759 0.867131C32.759 0.559439 32.7318 0.251748 32.6776 0C30.5337 0.0839161 27.9555 1.48252 26.4087 3.35664C25.1874 4.78322 24.0748 7.02098 24.0748 9.31469C24.0748 9.65035 24.129 9.98602 24.1562 10.0979C24.2919 10.1259 24.509 10.1538 24.7261 10.1538ZM17.9415 44C20.5739 44 21.7409 42.1818 25.0246 42.1818C28.3626 42.1818 29.0953 43.9441 32.0263 43.9441C34.9029 43.9441 36.8297 41.2028 38.648 38.5175C40.6833 35.4406 41.5246 32.4196 41.5789 32.2797C41.3889 32.2238 35.8799 29.9021 35.8799 23.3846C35.8799 17.7343 40.222 15.1888 40.4662 14.993C37.5896 10.7413 33.2203 10.6294 32.0263 10.6294C28.7968 10.6294 26.1644 12.6434 24.509 12.6434C22.7179 12.6434 20.3568 10.7413 17.5616 10.7413C12.2425 10.7413 6.84204 15.2727 6.84204 23.8322C6.84204 29.1469 8.85026 34.7692 11.3198 38.4056C13.4366 41.4825 15.282 44 17.9415 44Z"
            fill="#333333"
          />
        </svg>
        <p className=" ml-2">Sign up with Google</p>
      </div>
      <p className="mt-8 max-w-[78%] md:max-w-full text-center">
        <span className="text-slate-600 ">
          {" "}
          By signing up, you agree to our{" "}
        </span>
        <span className="ml-1 underline">
          <Link href="">Terms of Service</Link>
        </span>
        <span className="text-slate-600 "> and </span>
        <span className="ml-1 underline">
          <Link href="">Privacy Policy</Link>
        </span>
      </p>
    </section>
  );
};

export default Case;
