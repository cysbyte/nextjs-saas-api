"use client";
import Link from "next/link";
import React, { FC, useEffect, useRef, useState } from "react";
import PlayControl from "./PlayControl";
import PricingPlanButton from "./PricingPlanButton";
import RecordControl from "./RecordControl";

type Props = {
  isDone: boolean;
  hasDownload: boolean;
}
const AudioRecorder: FC<Props> = (props) => {
  const [audio, setAudio] = useState<string>("");
  const [isDone, setIsDone] = useState<boolean>(props.isDone);
  const [audioBlob, setAudioBlob] = useState<Blob>();
  const [audioChunks, setAudioChunks] = useState<any>([]);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <div className="w-full">
      <div className="border rounded-md bg-white shadow-xl w-full h-auto justify-start flex flex-col">

        <div className="">
          {!isDone && (
            <div className="">
              <RecordControl
                audioBlob={audioBlob}
                setAudioBlob={setAudioBlob}
                audioChunks={audioChunks}
                setAudioChunks={setAudioChunks}
                audio={audio}
                setAudio={setAudio}
                isDone={isDone}
                setIsDone={setIsDone}
              />
            </div>
          )}

          {isDone && (
            <div className="">
              <PlayControl
                audioBlob={audioBlob}
                setAudioBlob={setAudioBlob}
                audioChunks={audioChunks}
                setAudioChunks={setAudioChunks}
                audio={audio}
                setAudio={setAudio}
                isDone={isDone}
                setIsDone={setIsDone} />
            </div>
          )}
        </div>
      </div>
      {props.hasDownload && <Link href={audio} target="_blank" download>
        <div className="my-5">
          <PricingPlanButton text="Download" isScale={false} />
        </div>
      </Link>
      }
    </div>
  );
};

export default AudioRecorder;
