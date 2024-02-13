"use client";
import Link from "next/link";
import React, { useState } from "react";
import AddVoiceBox from "./AddVoiceBox";
import MyCreatedBox from "./MyCreatedBox";
import VoiceItemBox from "./VoiceItemBox";

const Case = () => {
  const [myCreatedBoxList, setMyCreatedBoxList] = useState([
    <MyCreatedBox />,
    <MyCreatedBox />,
    <MyCreatedBox />,
    <MyCreatedBox />,
    <MyCreatedBox />,
    <MyCreatedBox />,
  ]);
  const [voiceItemBoxList, setVoiceItemBoxList] = useState([
    <VoiceItemBox />,
    <VoiceItemBox />,
    <VoiceItemBox />,
    <VoiceItemBox />,
    <VoiceItemBox />,
    <VoiceItemBox />,
    <VoiceItemBox />,
    <VoiceItemBox />,
    <VoiceItemBox />,
    <VoiceItemBox />,
  ]);

  return (
    <aside className="flex-[5] w-full h-auto overflow-auto">
      <div className="max-w-full mt-10 ml-10">
        <div className="border-b py-4">
          <h1 className="text-4xl font-semibold">Voice</h1>
          <p className="mt-3 text-base text-slate-600 leading-[30px]">
            Unlock the potential of our advanced technology to produce lifelike,<br/>
            engaging speech across various languages.
          </p>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-x-2 gap-y-2">
          <Link href="/product/voice/add">
            <AddVoiceBox />
          </Link>

          {myCreatedBoxList.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          {voiceItemBoxList.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Case;
