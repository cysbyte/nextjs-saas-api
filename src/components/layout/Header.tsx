import Image from "next/image";
import Link from "next/link";
import React from "react";
import Wrapper from "@/components/shared/Wrapper";
import logo from "public/logo.png";

const Header = () => {
  return (
    <header className="h-auto z-20 sticky inset-0 backdrop-blur-md py-3 bg-white bg-opacity-90">
      <Wrapper>
        <div className="flex justify-between py-5 items-center">
          <Link className="hover:text-teal-700 duration-300" href={"/"}>
            <div>
              <Image src={logo} alt="Minimax AI Voice Generator" />
            </div>
          </Link>

          <ul className="flex h-full items-center duration-300 gap-x-4 sm:gap-x-8 text-16">
            <li className="relative group cursor-pointer hover:text-teal-700">
              <div className="flex gap-x-2 items-center">
                <p>Products</p>
                <svg
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 4.5L6.5 7.5L9.5 4.5"
                    stroke="#111827"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </li>
            <Link className="hover:text-teal-700 duration-300" href={""}>
              <li>Pricing</li>
            </Link>

            <Link className="hover:text-teal-700 duration-300" href={""}>
              <li>About</li>
            </Link>
          </ul>

          <ul className="flex h-full items-center duration-300 gap-x-4 sm:gap-x-8 text-16">
            <Link className="hover:text-teal-700 duration-300" href={""}>
              <li>Sign in</li>
            </Link>

            <Link className="px-5 py-2 hover:shadow-lg hover:scale-105 active:scale-100 duration-300 border-2 border-black rounded-md" href={""}>
              <li>Sign up</li>
            </Link>
          </ul>
        </div>
      </Wrapper>
    </header>
    // <nav className="max-w-5xl m-auto w-full px-4">
    //   <div className="flex items-center gap-8 justify-between py-4">
    //     <Link
    //       href={"/"}
    //       className="text-2xl font-semibold text-black hover:opacity-90"
    //     >
    //       Logo
    //     </Link>
    //     <div className="flex items-center gap-4">
    //       <Link
    //         href="/#features"
    //         className="font-medium text-sm text-black hover:opacity-90"
    //       >
    //         Features
    //       </Link>
    //       <Link
    //         href="/#pricing"
    //         className="font-medium text-sm text-black hover:opacity-90"
    //       >
    //         Pricing
    //       </Link>
    //       <Link
    //         href="/dashboard"
    //         className="font-medium text-sm text-white bg-black px-4 py-2 rounded-lg hover:opacity-90"
    //       >
    //         Dashboard
    //       </Link>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Header;
