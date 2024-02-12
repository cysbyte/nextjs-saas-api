import Image from "next/image";
import React from "react";
import logo from "public/logo.png";
import Link from "next/link";

const ProductSideBar = () => {
  return (
    <div className="h-screen flex-[1] border-r">
      <div className="mt-6 mx-3">
        <Link className="hover:text-teal-700 duration-300" href={"/"}>
          <div>
            <Image
              className="w-[69] ml-4"
              src={logo}
              alt="Minimax AI Voice Generator"
            />
          </div>
        </Link>

        <div className="mt-6 w-full rounded-md">
          <div className="flex justify-start items-center hover:bg-gray-100 p-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1.33331C7.46957 1.33331 6.96086 1.54403 6.58579 1.9191C6.21071 2.29417 6 2.80288 6 3.33331V7.99998C6 8.53041 6.21071 9.03912 6.58579 9.41419C6.96086 9.78927 7.46957 9.99998 8 9.99998C8.53043 9.99998 9.03914 9.78927 9.41421 9.41419C9.78929 9.03912 10 8.53041 10 7.99998V3.33331C10 2.80288 9.78929 2.29417 9.41421 1.9191C9.03914 1.54403 8.53043 1.33331 8 1.33331Z"
                stroke="#0F172A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.6667 6.66669V8.00002C12.6667 9.2377 12.175 10.4247 11.2999 11.2999C10.4247 12.175 9.23772 12.6667 8.00004 12.6667C6.76236 12.6667 5.57538 12.175 4.70021 11.2999C3.82504 10.4247 3.33337 9.2377 3.33337 8.00002V6.66669"
                stroke="#0F172A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 12.6667V14.6667"
                stroke="#0F172A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="ml-2">Text to Speech</p>
          </div>
        </div>

        <div className="mt-2 w-full rounded-md">
          <div className="flex justify-start items-center hover:bg-gray-100 p-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_297_1487)">
                <path
                  d="M14.4267 2.42666L13.5733 1.57332C13.4983 1.49753 13.409 1.43737 13.3106 1.39631C13.2122 1.35525 13.1066 1.33411 13 1.33411C12.8934 1.33411 12.7878 1.35525 12.6894 1.39631C12.591 1.43737 12.5017 1.49753 12.4267 1.57332L1.57332 12.4267C1.49753 12.5017 1.43737 12.591 1.39631 12.6894C1.35525 12.7878 1.33411 12.8934 1.33411 13C1.33411 13.1066 1.35525 13.2122 1.39631 13.3106C1.43737 13.409 1.49753 13.4983 1.57332 13.5733L2.42666 14.4267C2.5012 14.5033 2.59035 14.5642 2.68882 14.6057C2.78729 14.6473 2.8931 14.6687 2.99999 14.6687C3.10688 14.6687 3.21269 14.6473 3.31116 14.6057C3.40963 14.5642 3.49878 14.5033 3.57332 14.4267L14.4267 3.57332C14.5033 3.49878 14.5642 3.40963 14.6057 3.31116C14.6473 3.21269 14.6687 3.10688 14.6687 2.99999C14.6687 2.8931 14.6473 2.78729 14.6057 2.68882C14.5642 2.59035 14.5033 2.5012 14.4267 2.42666Z"
                  stroke="#0F172A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.33337 4.66669L11.3334 6.66669"
                  stroke="#0F172A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.33337 4V6.66667"
                  stroke="#0F172A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.6666 9.33331V12"
                  stroke="#0F172A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.66663 1.33331V2.66665"
                  stroke="#0F172A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.66667 5.33331H2"
                  stroke="#0F172A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 10.6667H11.3334"
                  stroke="#0F172A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.33333 2H6"
                  stroke="#0F172A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_297_1487">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className="ml-2">Voice</p>
          </div>
        </div>

        <div className="mt-2 w-full rounded-md">
          <div className="flex justify-start items-center hover:bg-gray-100 p-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_297_1502)">
                <path
                  d="M14.0001 1.33331L12.6667 2.66665M12.6667 2.66665L14.6667 4.66665L12.3334 6.99998L10.3334 4.99998M12.6667 2.66665L10.3334 4.99998M7.59339 7.73998C7.93762 8.07962 8.21126 8.48401 8.39856 8.92984C8.58587 9.37568 8.68313 9.85416 8.68475 10.3377C8.68637 10.8213 8.59231 11.3004 8.408 11.7475C8.22369 12.1946 7.95277 12.6008 7.61082 12.9427C7.26888 13.2847 6.86268 13.5556 6.4156 13.7399C5.96852 13.9242 5.48939 14.0183 5.00582 14.0167C4.52224 14.015 4.04376 13.9178 3.59792 13.7305C3.15209 13.5432 2.74771 13.2695 2.40806 12.9253C1.74015 12.2338 1.37057 11.3076 1.37892 10.3462C1.38728 9.38479 1.7729 8.46514 2.45273 7.78531C3.13256 7.10548 4.0522 6.71986 5.01359 6.71151C5.97498 6.70315 6.90119 7.07273 7.59273 7.74065L7.59339 7.73998ZM7.59339 7.73998L10.3334 4.99998"
                  stroke="#0F172A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_297_1502">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className="ml-2">API Access</p>
          </div>
        </div>

        <div className="mt-2 w-full rounded-md">
          <div className="flex justify-start items-center hover:bg-gray-100 p-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3334 3.33331H2.66671C1.93033 3.33331 1.33337 3.93027 1.33337 4.66665V11.3333C1.33337 12.0697 1.93033 12.6666 2.66671 12.6666H13.3334C14.0698 12.6666 14.6667 12.0697 14.6667 11.3333V4.66665C14.6667 3.93027 14.0698 3.33331 13.3334 3.33331Z"
                stroke="#0F172A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.33337 6.66669H14.6667"
                stroke="#0F172A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="ml-2">Subscription</p>
          </div>
        </div>

        <div className="mt-2 w-full rounded-md">
          <div className="flex justify-start items-center hover:bg-gray-100 p-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3334 2.66669H2.66671C1.93033 2.66669 1.33337 3.26364 1.33337 4.00002V12C1.33337 12.7364 1.93033 13.3334 2.66671 13.3334H13.3334C14.0698 13.3334 14.6667 12.7364 14.6667 12V4.00002C14.6667 3.26364 14.0698 2.66669 13.3334 2.66669Z"
                stroke="#0F172A"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.6667 4.66669L8.68671 8.46669C8.48089 8.59564 8.24292 8.66403 8.00004 8.66403C7.75716 8.66403 7.51919 8.59564 7.31337 8.46669L1.33337 4.66669"
                stroke="#0F172A"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="ml-2">Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSideBar;
