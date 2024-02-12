import React, { FC } from "react";

const PricingPlanButton: FC<{ text: string }> = (props) => {
  return (
    <button className="hover:shadow-lg text-sm z-0 hover:scale-105 duration-300 active:scale-100 mx-auto mt-7 px-5 py-2 bg-indigo-600 rounded-md text-white w-full">
      {props.text}
    </button>
  );
};

export default PricingPlanButton;
