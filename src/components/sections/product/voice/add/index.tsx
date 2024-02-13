
import PricingPlanButton from "@/components/shared/PriceingPlanButton";
import React, { useState } from "react";

const Case = () => {
  return (
    <aside className="flex-[5] w-full h-screen mb-3">
      <div className="max-w-full mt-10 ml-10">
        <div className="border-b py-4">
          <h1 className="text-4xl font-semibold">Voice</h1>
          <p className="mt-3 text-base text-slate-600 leading-[30px]">
            Unlock the potential of our advanced technology to produce lifelike,
            <br />
            engaging speech across various languages.
          </p>
        </div>
        <div className="py-2">
          <h1 className="text-2xl font-semibold">Add Voice</h1>
          <p className="mt-3 text-sm text-slate-600 leading-[20px]">
            The file upload requirements are as follows:
            <li>
              The audio files to be uploaded should be in one of the following
              formats: mp3, m4a, or wav.
            </li>
            <li>
              The duration of the uploaded audio files should be at least 30
              seconds and no more than 5 minutes.
            </li>
            <li>The size of the uploaded audio files must not exceed 20 MB.</li>
          </p>
        </div>
        <div>
          <form className="bg-white w-full max-w-3xl">
            <div className="pb-3 border-b">
              <h4 className="text-base font-semibold">Reference Audio</h4>
              <div className="rounded-md border-[2px] w-full p-10">
                <h4 className="font-semibold text-center mx-auto">
                  Drop file here or record audio
                </h4>
                <div className="w-[20%] mx-auto flex gap-x-3 justify-center mt-4">
                  <label htmlFor="file">
                    <div className="flex mx-auto items-center border-[2px] rounded-md px-4 py-1 cursor-pointer">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10"
                          stroke="#0F172A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.3334 5.33333L8.00002 2L4.66669 5.33333"
                          stroke="#0F172A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 2V10"
                          stroke="#0F172A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <p>Upload</p>
                    </div>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      className="hidden"
                    />
                  </label>

                  <div className="flex mx-auto items-center border-[2px] rounded-md px-4 py-1 cursor-pointer">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10"
                        stroke="#0F172A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.3334 5.33333L8.00002 2L4.66669 5.33333"
                        stroke="#0F172A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 2V10"
                        stroke="#0F172A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <p>Record</p>
                  </div>
                </div>
              </div>
              <div className="mt-3 w-full">
                <label
                  className="block text-black text-sm mb-2 font-semibold"
                  htmlFor="voiceId"
                >
                  Voice Names
                </label>
                <input
                  className="appearance-none border rounded-md w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="voiceId"
                  type="text"
                  placeholder="Apple"
                />
              </div>

              <div className="mt-3 w-full">
                <label
                  className="block text-black text-sm mb-2 font-semibold"
                  htmlFor="voiceId"
                >
                  Voice Description
                </label>
                <textarea
                  className="appearance-none border rounded-md w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="voiceId"
                  rows={2}
                  placeholder="Enter description here..."
                />
              </div>
            </div>
            <div className="flex justify-start items-start">
            <input className="mt-1 mr-2" type="checkbox" id="agree" name="" value="true"/>
            <label htmlFor="agree" className="text-[12px] text-slate-400"> I confirm that I possess all the necessary rights and permissions to upload and replicate these voice samples. Furthermore, I assure that I will not utilize the content created by the platform for any unlawful, deceitful, or damaging activities. I also reaffirm my commitment to adhere to the Terms of Service and Privacy Policy of useHifi.</label>
            </div>
            <div className="w-full my-4">
              <PricingPlanButton text="Generate" />
            </div>
          </form>

        </div>
      </div>
    </aside>
  );
};

export default Case;
