"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { runPythonScript } from "@/lib/util";
import prisma from "@/lib/prismadb";
import { exec, spawn } from "child_process";
import { getServerSession } from "next-auth";

const group_id = "1697534675713802";
const api_key =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJHcm91cE5hbWUiOiJoZWV5byIsIlVzZXJOYW1lIjoiaGVleW8iLCJBY2NvdW50IjoiIiwiU3ViamVjdElEIjoiMTY5NzUzNDY3NTQ4MDI3MyIsIlBob25lIjoiIiwiR3JvdXBJRCI6IjE2OTc1MzQ2NzU3MTM4MDIiLCJQYWdlTmFtZSI6IiIsIk1haWwiOiJkZXZAaGVleW8ubGlmZSIsIkNyZWF0ZVRpbWUiOiIyMDI0LTAyLTExIDEwOjQ3OjA4IiwiaXNzIjoibWluaW1heCJ9.rlxFHGoLAgMgx4wgsNHoxhOL2k37PEQpsr_RxKh0pZgEAL_VuPI5bIo10l97PcV9SvkX5XxBL2koS9Jt1HMp-Ig2y8NSWo0dTyddV0QZ02KtRvsdGmpEGZGpkKJY9_Cp0j35CSvdf1OEGvF3TWusThAyvNtaCJk4Ti1yD_OrBt977PWKdFfmQ4xWjTPjTZY-i6FvCMOJbqn47CeVWBgJkqy9-cdaajciI4dq9n4ZATcgxGtVDKloO98eZiVQhMP3eM8HDp8N1LU7uERmQSRHXHrCuwoGyRg99Q3l2LeOGUfI9v2xUdtqD2ld9-1Y-PVJyMrY--tERstauCFwDxwKxw";

export const addTextToSpeech = async (formData: FormData) => {
  const voiceId = formData.get("voiceId") as string;
  const voiceName = formData.get("voiceName") as string;
  const description = formData.get("description") as string;
  const text = formData.get("text") as string;
  
  const session = await getServerSession();
  const user = await prisma.user.findFirst({
    where: {
      email: session?.user?.email?.toString(),
    },
  });

  const count = await prisma.textToSpeech.count();
  // @ts-ignore
  const new_voice = await prisma.textToSpeech.create({
    data: {
      voiceId,
      voiceName,
      description: description ? description : '',
      text,
      order: count + 1,
      author: {
        connect: {
          id: user?.id,
        },
      },
    },
  });
  console.log(new_voice)
  return {file_name: ''}

  // const response = await fetch(`http://54.95.52.19/text-to-speech`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     voice_id: voiceId,
  //     text: text,
  //   }),
  // });
  // const result = await response.json();
  // console.log(result);
  // return result;

  // const translatedTextPromise = new Promise((resolve, reject) => {
  //     const pyprog = spawn('python3', ["text-to-speech.py", voiceId, text]);
  //     pyprog.stdout.on('data', function (data) {
  //         resolve(data.toString());
  //     });
  //     pyprog.stderr.on('data', (data) => {
  //         reject(data.toString());
  //     });
  // });
  // const src = await translatedTextPromise;
  // console.log(src)
  // return src;
};

export const uploadAudio = async (formData: FormData) => {
  // const file: File | Blob | null = formData.get('file') as unknown as File | Blob
  // if (!file) {
  //   throw new Error('No file uploaded')
  // }

  const url = `https://api.minimax.chat/v1/files/upload?GroupId=${group_id}`;
  formData.set("purpose", "voice_clone");

  try {
    const result = await fetch(url, {
      method: "POST",
      headers: {
        authority: "api.minimax.chat",
        authorization: `Bearer ${api_key}`,
      },
      body: formData,
    });

    const data = await result.json();

    console.log("data", data);
    return data;
  } catch (error) {
    console.error(error);
  }

  return { success: true };
};

export const cloneAudio = async (
  fileId: string,
  voiceId: string | null = ""
) => {
  const url = `https://api.minimax.chat/v1/voice_clone?GroupId=${group_id}`;

  console.log("voiceId", voiceId);
  try {
    const result = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${api_key}`,
      },
      body: JSON.stringify({
        file_id: fileId,
        voice_id: voiceId?.trim(),
      }),
    });

    const data = await result.json();

    console.log("data", data);
    return data;
  } catch (error) {
    console.error(error);
  }

  return { success: true };
};
