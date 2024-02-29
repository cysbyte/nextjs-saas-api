import { cloneAudio, uploadAudio } from "@/actions/actions";
import React, { FC, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

type Props = {
    customVoiceId: string;
    setCustomVoiceId: React.Dispatch<React.SetStateAction<string>>;
    fileName: string;
    setFileName: React.Dispatch<React.SetStateAction<string>>;
    isUploading: boolean;
    setIsUploading: React.Dispatch<React.SetStateAction<boolean>>;
    file: string | Blob | File;
    setFile: React.Dispatch<React.SetStateAction<string | Blob | File>>;
}

const FileInput:FC<Props> = (props) => {
  const fileInput: any = useRef(); /* create a ref*/

  const handleSubmit = async (event: any) => {
    event.preventDefault();
      /* get current files using ref */
      try {
          props.setIsUploading(true);
          props.setFile(fileInput.current.files[0])
          props.setFileName(fileInput.current.files[0].name);
          const formData = new FormData();
          formData.set('file', fileInput.current.files[0])
          let result = await uploadAudio(formData);
          const fileId = result.file.file_id;
          const customVoiceId = "Voice_id_" + uuidv4();
          result = await cloneAudio(fileId, customVoiceId);
          props.setCustomVoiceId(customVoiceId);
          props.setIsUploading(false);
      } catch (error) {
          props.setIsUploading(false)
          console.log(error)
          alert(error)
      }
  };

  return (
    <input
      type="file"
      id="file"
      name="file"
      ref={fileInput} /* add ref*/
      onChange={handleSubmit}
      hidden
    />
  );
};

export default FileInput;
