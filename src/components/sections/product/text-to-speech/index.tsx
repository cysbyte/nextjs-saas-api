import PricingPlanButton from "@/components/shared/PriceingPlanButton";
import React from "react";

const Case = () => {
  return (
    <section className="flex-[5] h-screen w-full">
      <div className="max-w-3xl mt-10 ml-10">
        <div className="border-b py-2">
          <h1 className="text-4xl font-semibold">Text to Speech</h1>
          <p className="mt-3 text-base text-slate-600 leading-[30px] max max-w-screen-sm">
            Unlock the potential of our advanced technology to produce lifelike,
            engaging speech across various languages.
          </p>
        </div>

        <div className="mt-4">
          <h2 className=" font-semibold">Settings</h2>

          <div className="w-full">
            <form className="bg-white w-full">
              <div className="pb-3 border-b">
                <div className="mt-3 w-full">
                  <label
                    className="block text-black text-sm mb-2"
                    htmlFor="voiceId"
                  >
                    Voice ID
                  </label>
                  <input
                    className="appearance-none border rounded-md w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="voiceId"
                    type="text"
                    placeholder="Enter voice ID"
                  />
                </div>

                <div className="mt-3 w-full">
                  <label
                    className="block text-black text-sm mb-2"
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
                    className="block text-black text-sm mb-2"
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

              <div>
                <h2 className="mt-3 font-semibold">Test Text</h2>
                <div className="mt-3 w-full">
                  <label
                    className="block text-black text-sm mb-2"
                    htmlFor="voiceId"
                  >
                    Text
                  </label>
                  <textarea
                    className="appearance-none border rounded-md w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="voiceId"
                    rows={4}
                    placeholder="Enter voice ID"
                  />
                </div>
              </div>
              <div className="w-full mt-4">
                <PricingPlanButton text="Generate" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Case;
