"use client";

import {
  cloneAudio,
  uploadAudio,
  mp3ToText,
  saveCustomVoiceId,
  generateTextToSpeech,
  getText,
  deleteUploadedAudio,
} from "@/actions/actions";
import AudioRecorder from "@/components/shared/AudioRecorder";
import GenerateButton from "@/components/shared/GenerateButton";
import PricingPlanButton from "@/components/shared/PricingPlanButton";
import { v4 as uuidv4 } from "uuid";
import React, { useRef, useState, useTransition } from "react";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import FileInput from "@/components/shared/FileInput";

const Case = () => {
  const [audio, setAudio] = useState("");
  const [audioBlob, setAudioBlob] = useState<Blob>(new Blob());
  const [isRecording, setIsRecording] = useState<boolean | null>(false);
  const [customVoiceId, setCustomVoiceId] = useState('');
  const [fileName, setFileName] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  const [file, setFile] = useState<Blob | File | string>("");
  const fileInputRef = useRef<any>();
  const [status, setStatus] = useState<
    "initial" | "uploading" | "success" | "fail"
  >("initial");

  const uploadVoiceHandler = async (formData: FormData) => {
    console.log(file);
    if (!file || file === "") return;
    console.log(isRecording)
    if(isRecording) formData.set("file", file);

    try {
      // let result = await uploadAudio(formData);
      // const fileId = result.file.file_id;
      // const customVoiceId = "Voice_id_" + uuidv4();
      // result = await cloneAudio(fileId, customVoiceId);
      // console.log('start generate=====')

      if (true) {
        formData.set("voiceId", customVoiceId);

        console.log('saveCustomVoiceId')
        await saveCustomVoiceId(formData);
        console.log('getText')
        const text = await getText();
        console.log(text);
        formData.set('text', text);
        console.log('generateTextToSpeech')
        const mp3_url = await generateTextToSpeech(formData);
        if (mp3_url) {
          setIsGenerated(true);
          setAudio(mp3_url);
        }
        //revalidatePath("/product/voice/main/0");
        //revalidatePath("/product/text-to-speech");
      }

    } catch (error:any) {
      alert(error)
      console.log(error);
    }

    //ref?.current?.reset();
  };

  return (
    <aside className="flex-[5] w-full h-auto my-8">
      <div className="max-w-full mt-5 ml-10">
        <div className="border-b py-4">
          <h1 className="text-4xl font-semibold">Voice</h1>
          <p className="mt-3 text-base text-slate-600 leading-[30px]">
            Unlock the potential of our advanced technology to produce lifelike,
            <br />
            engaging speech across various languages.
          </p>
        </div>
        <div className="py-3">
          <h1 className="text-2xl font-semibold">Add Voice</h1>
          <div className="ml-0 mt-3 text-md text-slate-600 leading-[30px]">
            The file upload requirements are as follows:
            <ul className="list-disc list-inside">
              <li>
                The audio files to be uploaded should be in one of the following
                formats: mp3, m4a, or wav.
              </li>
              <li>
                The duration of the uploaded audio files should be at least 30
                seconds and no more than 5 minutes.
              </li>
              <li>
                The size of the uploaded audio files must not exceed 20 MB.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <form
            className="bg-white max-w-3xl border-b pb-4"
            action={uploadVoiceHandler}
          >
            <div className="pb-2">
              <h4 className="text-base font-semibold mt-2 mb-4">
                Reference Audio
              </h4>
              {!isRecording && (
                <div className="mt-3 rounded-md border-[2px] w-full p-20">
                  {file && (
                    <h4 className="font-base text-center mx-auto">
                      {isUploading?'File is uploading...':fileName}
                    </h4>
                  )}
                  {!file && (
                    <h4 className="font-semibold text-center mx-auto">
                      Drop file here or record audio
                    </h4>
                  )}
                  <div className="w-[20%] mx-auto flex gap-x-3 justify-center mt-4">
                    <label htmlFor="file">
                    <div className="btn-border"
                      onClick={() => setIsRecording(false)}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10"
                            stroke="#0F172A"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.3334 5.33333L8.00002 2L4.66669 5.33333"
                            stroke="#0F172A"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8 2V10"
                            stroke="#0F172A"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <p className="ml-2">Upload</p>
                      </div>
                      {/* <input
                        ref={fileInputRef}
                        type="file"
                        id="file"
                        name="file"
                        className="hidden"
                        onChange={handleFileChange}
                      /> */}
                      <FileInput
                        customVoiceId={customVoiceId}
                        setCustomVoiceId={setCustomVoiceId}
                        fileName={fileName}
                        setFileName={setFileName}
                        file={file}
                        setFile={setFile}
                        isUploading={isUploading}
                        setIsUploading={setIsUploading}
                      />
                    </label>

                    <div
                      className="btn-border"
                      onClick={() => {
                        console.log(isRecording)
                        setFile('')
                        setIsRecording(true)
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 1.33325C7.46957 1.33325 6.96086 1.54397 6.58579 1.91904C6.21071 2.29411 6 2.80282 6 3.33325V7.99992C6 8.53035 6.21071 9.03906 6.58579 9.41413C6.96086 9.78921 7.46957 9.99992 8 9.99992C8.53043 9.99992 9.03914 9.78921 9.41421 9.41413C9.78929 9.03906 10 8.53035 10 7.99992V3.33325C10 2.80282 9.78929 2.29411 9.41421 1.91904C9.03914 1.54397 8.53043 1.33325 8 1.33325Z"
                          stroke="#0F172A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.6667 6.66675V8.00008C12.6667 9.23776 12.175 10.4247 11.2999 11.2999C10.4247 12.1751 9.23772 12.6667 8.00004 12.6667C6.76236 12.6667 5.57538 12.1751 4.70021 11.2999C3.82504 10.4247 3.33337 9.23776 3.33337 8.00008V6.66675"
                          stroke="#0F172A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 12.6667V14.6667"
                          stroke="#0F172A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <p className="ml-2">Record</p>
                    </div>
                  </div>
                </div>
              )}
              {isRecording && (
                <div className="mt-3 max-w-3xl">
                  <AudioRecorder
                    audio={audio}
                    setAudio={setAudio}
                    isDone={false}
                    hasDownload={false}
                    isRecording={isRecording}
                    setIsRecording={setIsRecording}
                    audioBlob={audioBlob}
                    setAudioBlob={setAudioBlob}
                    file={file}
                    setFile={setFile}
                    customVoiceId={customVoiceId}
                    setCustomVoiceId={setCustomVoiceId}
                  />
                </div>
              )}
            </div>

            <div>
              <div className="mt-3 w-full">
                <label
                  className="block text-black text-sm mb-2 font-semibold"
                  htmlFor="voiceName"
                >
                  Voice Name
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
                  className="block text-black text-sm mb-2 font-semibold"
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
              <div className="flex justify-start items-start mt-5">
                <input
                  className="mt-1 mr-2"
                  type="checkbox"
                  id="agree"
                  name=""
                  value="true"
                />
                <label htmlFor="agree" className="text-[12px] text-slate-400">
                  {" "}
                  I confirm that I possess all the necessary rights and
                  permissions to upload and replicate these voice samples.
                  Furthermore, I assure that I will not utilize the content
                  created by the platform for any unlawful, deceitful, or
                  damaging activities. I also reaffirm my commitment to adhere
                  to the Terms of Service and Privacy Policy of useHifi.
                </label>
              </div>
            </div>
            <div className="w-full my-4">
              <GenerateButton />
            </div>
          </form>

          {isGenerated && <div className="bg-white w-full max-w-3xl">
            <div className="pb-2">
              <div className="mb-6">
                <h2 className="mt-4 font-semibold">Clone Voice</h2>
                <p className="text-[13px] mt-2 text-slate-400">
                  *You can click the generate button again to get a different
                  voice.
                </p>
              </div>
              <AudioRecorder
                audio={audio}
                setAudio={setAudio}
                isDone={true}
                hasDownload={true}
                isRecording={isRecording}
                setIsRecording={setIsRecording}
                audioBlob={audioBlob}
                setAudioBlob={setAudioBlob}
                file={file}
                setFile={setFile}
                downloadTitle='Save Voice'
                customVoiceId={customVoiceId}
                setCustomVoiceId={setCustomVoiceId}
              />
            </div>

          </div>
          }
        </div>
      </div>
    </aside>
  );
};

export default Case;
