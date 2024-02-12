import Button from "@/components/shared/Button";
import Image from "next/image";
import React from "react";
import Wrapper from "../../shared/Wrapper";
import usecase from '/public/usecase.png';

const Hero = () => {
  return (
    <section className="bg-hero-pattern bg-cover h-auto">
      <Wrapper>
        <div className="flex flex-col items-center justify-center">
          <div className="mt-24 max-w-[50%] flex flex-col justify-center">
            <h1 className="mx-auto text-4xl sm:text-5xl font-bold mt-4 lg:leading-[60px]">
              AI Voice Generator
            </h1>
            <p className="mx-auto text-center mt-6 text-lg text-slate-600 max-w-xl leading-[30px]">
              Use our AI voice generator to transform text into speech online
              within a few clicks. Instantly produce natural-sounding AI voices,
              ideal for video creators, developers, and businesses. <br />
              More than 1 Billion people have heard our voices worldwide.
            </p>
            <div className="mx-auto mt-7">
              <Button text={"Get Started For Free"}/>
            </div>
            
          </div>
                  
            <Image className="mt-10 mb-20 w-[70%]" src={usecase} alt='Minimax Use Case'/>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
