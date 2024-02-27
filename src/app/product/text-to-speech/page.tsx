import Header from "@/components/layout/Header";
import PriceingPlan from "@/components/sections/price/PriceingPlan";
import ProductSideBar from "@/components/layout/ProductSideBar";
import React from "react";
import Case from "@/components/sections/product/text-to-speech";
import { authConfig, loginIsRequiredServer } from "@/lib/auth";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prismadb";

const TextToSpeech = async () => {
  await loginIsRequiredServer();

  const session = await getServerSession(authConfig);
  if (!session) return;
  console.log(session?.user?.email?.toString())
  // console.log(session)
  //@ts-ignore
  const user = await prisma.User.findFirst({
    where: {
      email: session?.user?.email?.toString(),
    },
  });

  console.log('user----', user)
  console.log(user?.id.toString())

  //@ts-ignore
  const voiceNames = await prisma.TextToSpeech.findMany({
    where: {
      authorId: user?.id.toString()
    },
    select: {
      voiceName: true,
      mp3_url: true,
    }

  });
  console.log('voiceNames', voiceNames);

  return (
    <main className="flex flex-row">
      <ProductSideBar productName="TextToSpeech" />
      <Case voiceNames={voiceNames} />
    </main>
  );
};

export default TextToSpeech;
