"use client";

import { addTextToSpeech } from "@/actions/actions";
import PricingPlanButton from "@/components/shared/PricingPlanButton";
import React, { RefObject, useRef } from "react";

const AddVoiceForm = () => {

    const ref = useRef<HTMLFormElement>(null);

    const addVoiceHandler = async (formData: FormData) => {
        await addTextToSpeech(formData);
        ref?.current?.reset();
    }

  return (
    <form ref={ref} action={addVoiceHandler} className="bg-white w-full">
      <div className="pb-3 border-b">
        <div className="mt-3 w-full">
          <label className="block text-black text-sm mb-2" htmlFor="voiceId">
            Voice ID
          </label>
          <input
            className="appearance-none border rounded-md w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:pl-2"
            id="voiceId"
            name="voiceId"
            type="text"
            placeholder="Enter voice ID"
          />
        </div>

        <div className="mt-3 w-full">
          <label className="block text-black text-sm mb-2" htmlFor="voiceName">
            Voice Names
          </label>
          <input
            className="appearance-none border rounded-md w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:pl-2"
            id="voiceName"
            name="voiceName"
            type="text"
            placeholder="Apple"
          />
        </div>

        <div className="mt-3 w-full">
          <label
            className="block text-black text-sm mb-2"
            htmlFor="description"
          >
            Voice Description
          </label>
          <textarea
            className="appearance-none border rounded-md w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:pl-2"
            id="description"
            name="description"
            rows={2}
            placeholder="Enter description here..."
          />
        </div>
      </div>

      <div>
        <h2 className="mt-3 font-semibold">Test Text</h2>
        <div className="mt-3 w-full">
          <label className="block text-black text-sm mb-2" htmlFor="text">
            Text
          </label>
          <textarea
            className="appearance-none border rounded-md w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:pl-2"
            id="text"
            name="text"
            rows={8}
            placeholder="Type or paste text here..."
          />
        </div>
        <div className="mt-1 flex justify-between">
          <p className="text-[12px] text-slate-400">0/2500</p>
          <p className="text-[12px] text-slate-400">Token remaining 9500</p>
        </div>
      </div>
      <div className="w-full mt-4">
        <PricingPlanButton text="Generate" isScale={false} />
      </div>
    </form>
  );
};

export default AddVoiceForm;
