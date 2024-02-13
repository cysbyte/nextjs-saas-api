import React, { FC } from "react";
import PricingPlanButton from "./PricingPlanButton";

const AudioRecorder: FC = () => {
  return (
    <div>
      <div className="border rounded-md bg-white shadow-xl w-full h-auto justify-start px-6 py-6 flex flex-col">
        <div className="border-b pb-10">
          
        </div>      
        <PricingPlanButton text={'start'} isScale={false} />


      </div>
    </div>
  );
};

export default AudioRecorder;
