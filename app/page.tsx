import { RiTwitterXLine } from "react-icons/ri";
import InteractiveForm from "./components/InteractiveForm";
import Particles from "../components/ui/particles";
import {TextAnimate} from "../components/ui/text-animate";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-[#1a1a1a] w-full">
      <Particles className="absolute inset-0 w-full h-full z-0" />
      <div className="relative z-10 flex flex-col justify-center items-center">
        <RiTwitterXLine size={50} color="white" />
        <div className="flex flex-col justify-center items-center mt-7 w-full max-w-4xl py-3">
          <TextAnimate animation="blurInUp" by="character" className="text-white text-4xl font-extrabold text-center mb-4 leading-tight sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
            Tweet Craft
          </TextAnimate>
            <p className="text-white text-center text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-4">
            Tweet Craft is an AI-powered application built with Next.js that generates tweets based on user descriptions.
            </p>
          <InteractiveForm />
        </div>
      </div>
    </div>
  );
}
