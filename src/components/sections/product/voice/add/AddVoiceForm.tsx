import {
  cloneAudio,
  generateTextToSpeech,
  saveCustomVoiceId,
  uploadAudio,
} from "@/actions/actions";
import AudioRecorder from "@/components/shared/AudioRecorder";
import FileInput from "@/components/sections/product/voice/add/FileInput";
import GenerateButton from "@/components/shared/GenerateButton";
import { v4 as uuidv4 } from "uuid";
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { revalidatePath } from "next/cache";

type Props = {
  audio: string;
  setAudio: Dispatch<React.SetStateAction<string>>;
  isRecording: boolean;
  setIsRecording: Dispatch<SetStateAction<boolean>>;
  isGenerated: boolean;
  setIsGenerated: Dispatch<SetStateAction<boolean>>;
  customVoiceId: string;
  setCustomVoiceId: Dispatch<SetStateAction<string>>;
  file: string | Blob | File;
  setFile: Dispatch<React.SetStateAction<string | Blob | File>>;
  audioBlob: Blob;
  setAudioBlob: Dispatch<React.SetStateAction<Blob>>;
};

const AddVoiceForm: FC<Props> = (props) => {
  const [fileName, setFileName] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const onRecordClik = () => {
    console.log(props.isRecording);
    props.setFile("");
    props.setIsRecording(true);
    setIsDone(false);
  };

  const onUploadClick = () => {};

  useEffect(() => {
    if (isFileSelected) {
      props.setIsRecording(true);
      setIsDone(true);
    }
  }, [isFileSelected]);

  const uploadVoiceHandler = async (formData: FormData) => {
    console.log(props.file);
    if (!props.file || props.file === "") return;
    console.log(props.isRecording);
    if (props.isRecording) formData.set("file", props.file);

    try {
      let result = await uploadAudio(formData);
      const fileId = result.file.file_id;
      const customVoiceId = "Voice_id_" + uuidv4();
      result = await cloneAudio(fileId, customVoiceId);
      if (result.base_resp.status_code !== 0) {
        throw new Error(result.base_resp.status_msg);
      }
      console.log(customVoiceId);
      formData.set("voiceId", customVoiceId);
      console.log("saveCustomVoiceId");
      const user = await saveCustomVoiceId(formData);
      console.log(user);
      formData.set("text", user?.currentText as string);
      console.log(user?.currentText as string);
      console.log("generateTextToSpeech");
      const mp3_url = await generateTextToSpeech(formData, true);
      if (mp3_url) {
        console.log(mp3_url);
        props.setAudio(mp3_url);
        props.setIsGenerated(true);
      }
      //   revalidatePath("/product/voice/main/0");
      //   revalidatePath("/product/text-to-speech");
    } catch (error: any) {
      alert(error);
      console.log(error);
    }

    //ref?.current?.reset();
  };

  return (
    <>
      <form className="bg-white pb-4" action={uploadVoiceHandler}>
        <div className="pb-2">
          <h4 className="text-base font-semibold mt-2 mb-4">Reference Audio</h4>
          {!props.isRecording && (
            <div className="mt-3 rounded-md border-[2px] w-full h-[250px] flex flex-col items-center justify-center">
              {props.file && (
                <h4 className="font-base text-center mx-auto">
                  {isUploading ? "File is uploading..." : fileName}
                </h4>
              )}
              {!props.file && (
                <h4 className="font-semibold text-center mx-auto">
                  Drop file here or record audio
                </h4>
              )}
              <div className="w-[20%] mx-auto flex gap-x-3 justify-center mt-4">
                <label htmlFor="file">
                  <div className="btn-border" onClick={onUploadClick}>
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
                    audio={props.audio}
                    setAudio={props.setAudio}
                    customVoiceId={props.customVoiceId}
                    setCustomVoiceId={props.setCustomVoiceId}
                    fileName={fileName}
                    setFileName={setFileName}
                    file={props.file}
                    setFile={props.setFile}
                    isFileSelected={isFileSelected}
                    setIsFileSelected={setIsFileSelected}
                    isUploading={isUploading}
                    setIsUploading={setIsUploading}
                    isRecording={props.isRecording}
                    setIsRecording={props.setIsRecording}
                  />
                </label>

                <div className="btn-border" onClick={onRecordClik}>
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
          {props.isRecording && (
            <div className="mt-3 max-w-3xl">
              <AudioRecorder
                audio={props.audio}
                setAudio={props.setAudio}
                isDone={isDone}
                setIsDone={setIsDone}
                hasDownload={false}
                isRecording={props.isRecording}
                setIsRecording={props.setIsRecording}
                audioBlob={props.audioBlob}
                setAudioBlob={props.setAudioBlob}
                file={props.file}
                setFile={props.setFile}
                customVoiceId={props.customVoiceId}
                setCustomVoiceId={props.setCustomVoiceId}
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
              I confirm that I possess all the necessary rights and permissions
              to upload and replicate these voice samples. Furthermore, I assure
              that I will not utilize the content created by the platform for
              any unlawful, deceitful, or damaging activities. I also reaffirm
              my commitment to adhere to the Terms of Service and Privacy Policy
              of useHifi.
            </label>
          </div>
        </div>
        <div className="w-full my-4">
          <GenerateButton />
        </div>
      </form>
    </>
  );
};

export default AddVoiceForm;
