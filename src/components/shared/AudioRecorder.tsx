"use client";
import Link from "next/link";
import React, { FC, useEffect, useRef, useState } from "react";
import PlayControl from "./PlayControl";
import PricingPlanButton from "./PricingPlanButton";
import RecordControl from "./RecordControl";

type Props = {
  isDone: boolean;
}
const AudioRecorder: FC<Props> = (props) => {
  const [audio, setAudio] = useState<string>("");
  const [isDone, setIsDone] = useState<boolean>(props.isDone);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <div className="w-full">
      <div className="border rounded-md bg-white shadow-xl w-full h-auto justify-start px-6 py-3 flex flex-col">
        <div className="w-full h-auto border-b pb-3">
          <h2 className="text-base text-center font-bold whitespace-pre-line leading-8 text-black">
            {!isDone ? 'Record Audio' : 'Audio'}
          </h2>
        </div>

        <div className="py-6">
          {!isDone && (
            <div className="">
              <RecordControl
                audio={audio}
                setAudio={setAudio}
                isDone={isDone}
                setIsDone={setIsDone}
              />
            </div>
          )}

          {isDone && (
            <div className="">
              <PlayControl audio={audio} />
            </div>
          )}
        </div>
      </div>
      <Link href={"audio"} target="_blank" download>
        <div className="my-5">
          <PricingPlanButton text="Download" isScale={false} />
        </div>
      </Link>
    </div>
  );
};

export default AudioRecorder;
