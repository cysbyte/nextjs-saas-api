import Link from "next/link";
import React, { FC } from "react";

const VoiceItemBox: FC = () => {
  return (
    <div>
      <div className="border rounded-md bg-gray-100 shadow-xl basis-4/12 w-full md:h-[200px] md:w-[360px] h-auto px-4 flex flex-col justify-center items-center hover:bg-gray-100 hover:scale-[1.02] active:scale-100 duration-300">
        <div className="mx-auto w-full">
          <div className="flex items-center justify-between px-2">
            <div className="flex">
              <h4 className="font-normal text-base text-black">Voice Name</h4>
            </div>
            <div className="border-[2px] rounded-md px-1 py-1 text-sm text-slate-400">
              ID001
            </div>
          </div>

          <p className="text-[13px] mx-auto mt-2 text-start px-2 text-slate-400">
            No description
          </p>
        </div>
        <div className="flex justify-between mt-6 w-full gap-x-5">
        
          <div className="flex-1">
            <Link href='/product/voice/record'>
            <div className="btn-border">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1.33325C7.46957 1.33325 6.96086 1.54397 6.58579 1.91904C6.21071 2.29411 6 2.80282 6 3.33325V7.99992C6 8.53035 6.21071 9.03906 6.58579 9.41413C6.96086 9.78921 7.46957 9.99992 8 9.99992C8.53043 9.99992 9.03914 9.78921 9.41421 9.41413C9.78929 9.03906 10 8.53035 10 7.99992V3.33325C10 2.80282 9.78929 2.29411 9.41421 1.91904C9.03914 1.54397 8.53043 1.33325 8 1.33325Z"
                  stroke="#0F172A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.6667 6.66675V8.00008C12.6667 9.23776 12.175 10.4247 11.2998 11.2999C10.4247 12.1751 9.23769 12.6667 8.00001 12.6667C6.76233 12.6667 5.57535 12.1751 4.70018 11.2999C3.82501 10.4247 3.33334 9.23776 3.33334 8.00008V6.66675"
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

              <p className="ml-1">Use</p>
              </div>
            </Link>
            </div>
            

          <div className="flex-1 items-center">
            <div className="btn-border">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.58334 2L12.9167 8L3.58334 14V2Z"
                  fill="black"
                  stroke="#0F172A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.26386 1.41478C3.47791 1.29792 3.73869 1.30726 3.94383 1.43913L13.2772 7.43913C13.468 7.5618 13.5833 7.77308 13.5833 7.99992C13.5833 8.22676 13.468 8.43804 13.2772 8.5607L3.94383 14.5607C3.73869 14.6926 3.47791 14.7019 3.26386 14.5851C3.04982 14.4682 2.91666 14.2438 2.91666 13.9999V1.99992C2.91666 1.75605 3.04982 1.53164 3.26386 1.41478ZM4.24999 3.22103V12.7788L11.6838 7.99992L4.24999 3.22103Z"
                  fill="black"
                />
              </svg>

              <p className="ml-1">Preview</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceItemBox;
