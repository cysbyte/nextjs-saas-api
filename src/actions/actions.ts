"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();


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

    // collect info from form using formData
    const voiceId = formData.get('voiceId') as string;
    const voiceName = formData.get('voiceName') as string;
    const description = formData.get('description') as string;
    const text = formData.get('text') as string;


    // push the data into the DB
    const new_blog = await prisma.textToSpeech.create({
        data: {
            voiceId,
            voiceName,
            description: description ? description : null,
            text
        }
    })

    revalidatePath('/product/voice/main')
    redirect('/product/voice/main')

}


