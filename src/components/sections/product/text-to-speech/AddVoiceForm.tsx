"use client";

import { addTextToSpeech } from "@/actions/actions";
import GenerateButton from "@/components/shared/GenerateButton";
import PricingPlanButton from "@/components/shared/PricingPlanButton";
import { PythonShell } from 'python-shell';
import React, { Dispatch, FC, RefObject, SetStateAction, useRef, useState } from "react";

type Props = {
  audio: string;
  setAudio: Dispatch<React.SetStateAction<string>>;
}

const AddVoiceForm:FC<Props> = (props) => {

    const ref = useRef<HTMLFormElement>(null);

  const addVoiceHandler = async (formData: FormData) => {

    const src = await addTextToSpeech(formData);
    if (src) {
      props.setAudio(src.toString().replace('public', ''));
    }
    
    //ref?.current?.reset();
    }

  return (
    <form ref={ref} action={addVoiceHandler} className="bg-white w-full">
      <div className="pb-3 border-b">
        <div className="mt-3 w-full">
          <label className="block text-black text-sm mb-2" htmlFor="voiceId">
            Voice ID
          </label>
          <input
            className="input-border"
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
            className="input-border focus:outline-none focus:shadow-outline"
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
            className="input-border focus:outline-none focus:shadow-outline"
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
            className="input-border focus:outline-none focus:shadow-outline"
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
      <GenerateButton/>
    </form>
  );
};

export default AddVoiceForm;
