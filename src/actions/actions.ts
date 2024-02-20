"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { runPythonScript } from "@/lib/util";
import prisma from "@/lib/prismadb";
import { exec, spawn } from 'child_process';

// export const fetchBlogs = async () => {
//     const blogs = await prisma.blog.findMany({});
//     return blogs
// }


// export const fetchSingleBlog = async (id) => {
//     const blogs = await prisma.blog.findFirst({
//         where: {
//             id: id
//         }
//     });
//     return blogs
// }



export const addTextToSpeech = async (formData: FormData) => {

    const voiceId = formData.get('voiceId') as string;
    const voiceName = formData.get('voiceName') as string;
    const description = formData.get('description') as string;
    const text = formData.get('text') as string;

        const new_voice = prisma.textToSpeech.create({
            data: {
                voiceId,
                voiceName,
                description: description ? description : null,
                text
            }
        })

        // const translatedTextPromise = new Promise((resolve, reject) => {
        //     exec(
        //         `cd virenv && source virenv/bin/activate && python3 text-to-speech.py "${voiceId}" "${text}"`,
        //         (error, stdout, stderr) => {
        //         if (error) {
        //             console.error(error);
        //             reject(error);
        //         }
        //         resolve(stdout)
        //     });
        // })
    
    const translatedTextPromise = new Promise((resolve, reject) => {
        const pyprog = spawn('python3', ["text-to-speech.py", voiceId, text]);
        pyprog.stdout.on('data', function (data) {
            resolve(data.toString());
        });
        pyprog.stderr.on('data', (data) => {
            reject(data.toString());
        });
    });
    const src = await translatedTextPromise;
    console.log(src)
    return src;

}


