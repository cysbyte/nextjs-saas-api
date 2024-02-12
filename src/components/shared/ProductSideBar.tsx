import Image from "next/image";
import React from "react";
import logo from "public/logo.png";

const ProductSideBar = () => {
  return (
    <div className="h-screen flex-[1] border-r">
      <div className="mt-6 mx-3">
        <Image className="w-69" src={logo} alt="Minimax AI Voice Generator" />
        
        <div className="mt-7 w-full rounded-md">
          <div className="flex justify-start items-center hover:bg-gray-100 p-4">
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
              
        <div className="mt-7 w-full rounded-md">
          <div className="flex justify-start items-center hover:bg-gray-100 p-4">
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
            <p className="ml-2">Voice</p>
          </div>
              </div>
              
      </div>
    </div>
  );
};

export default ProductSideBar;
