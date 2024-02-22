import Link from "next/link";
import React from "react";
import AddVoiceBox from "./AddVoiceBox";
import MyCreatedBox from "./MyCreatedBox";
import VoiceItemBox from "./VoiceItemBox";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Case = () => {
  // const voices = await prisma.textToSpeech.findMany({});
  // console.log(voices)

  const voiceItemBoxList=[
    { id: 0, box: <VoiceItemBox /> },
    { id: 1, box: <VoiceItemBox /> },
    { id: 2, box: <VoiceItemBox /> },
    { id: 3, box: <VoiceItemBox /> },
    { id: 4, box: <VoiceItemBox /> },
    { id: 5, box: <VoiceItemBox /> },
    { id: 6, box: <VoiceItemBox /> },
    { id: 7, box: <VoiceItemBox /> },
    { id: 8, box: <VoiceItemBox /> },
    { id: 9, box: <VoiceItemBox /> },
  ];

  return (
    <aside className="flex-[5] w-full h-auto overflow-auto">
      <div className="max-w-full mt-14 ml-10">
        <div className="border-b py-4">
          <h1 className="text-4xl font-semibold">Voice Clone</h1>
          <p className="mt-3 text-base text-slate-600 leading-[30px]">
            Unlock the potential of our advanced technology to produce lifelike,<br/>
            engaging speech across various languages.
          </p>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-x-2 gap-y-2 w-[1100px] overflow-auto">
          <Link href="/product/voice/add">
            <AddVoiceBox />
          </Link>
          <MyCreatedBox/>
          <MyCreatedBox/>
          <MyCreatedBox/>
          <MyCreatedBox/>
          <MyCreatedBox/>
          <MyCreatedBox />
          <VoiceItemBox/>
          <VoiceItemBox/>
          <VoiceItemBox/>
          <VoiceItemBox/>
          <VoiceItemBox/>
          <VoiceItemBox/>
          <VoiceItemBox/>
          <VoiceItemBox/>
          <VoiceItemBox/>
          <VoiceItemBox/>

          {/* {myCreatedBoxList.map((item, index) => (
            <div key={item.id}>{item.box}</div>
          ))}
          {voiceItemBoxList.map((item, index) => (
            <div key={item.id}>{item.box}</div>
          ))} */}
        </div>
      </div>
    </aside>
  );
};

export default Case;
