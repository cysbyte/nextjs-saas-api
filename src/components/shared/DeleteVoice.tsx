"use client";
import React, { FC } from "react";
import prisma from "@/lib/prismadb";
import { deleteTextToSpeech } from "@/actions/actions";
import { revalidatePath } from "next/cache";
import { redirect, useRouter } from "next/navigation";

type Props = {
  id: string | null;
};

const DeleteVoice: FC<Props> = (props) => {

    const router = useRouter();

  const deleteVoiceHandler = async (formData: FormData) => {
    try {
      await deleteTextToSpeech(formData);
    } catch (error) {
      console.log(error);
    }
      //revalidatePath("/product/voice/main");
      redirect('/product/voice/main');
    //ref?.current?.reset();
  };
    
    const handleCancel = () => {
        router.back();
    }

  return (
    <div className="border rounded-md bg-white shadow-xl w-full h-auto justify-start flex flex-col">
      <form action={deleteVoiceHandler}>
        <div className="mx-8">
          <h3 className=" text-xl font-semibold mt-4">Delete Voice</h3>
          <p className="text-sm text-slate-600 mt-4">
            Are you sure want to delete the voice?
          </p>
          <input type="text" name="id" id="id" value={props.id || ""} hidden />
          <div className="w-full flex justify-end my-6">
            <div className="flex gap-x-3">
                          <button
                              onClick={handleCancel}
                              className="btn-border flex-1 w-[100px]">Cancel</button>
              <button
                type="submit"
                className="btn-border flex-1 bg-indigo-600 text-white"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DeleteVoice;
