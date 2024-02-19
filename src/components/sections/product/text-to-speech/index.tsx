"use client";

import AudioRecorder from "@/components/shared/AudioRecorder";
import PricingPlanButton from "@/components/shared/PricingPlanButton";
import React from "react";
import AddVoiceForm from "./AddVoiceForm";

const Case = () => {
  return (
    <section className="flex-[5] h-full w-full overflow-auto">
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

          <div className="w-full border-b pb-5">
            <AddVoiceForm/>
          </div>

          <div className="mb-6">
            <h2 className="mt-3 font-semibold">Voice Audio</h2>
            <p className="text-[13px] mt-2 text-slate-400">
              *You can click the generate button again to get a different voice.
            </p>
          </div>
          <div className="mt-4">
            <div>
              <AudioRecorder isDone={true} hasDownload={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Case;
