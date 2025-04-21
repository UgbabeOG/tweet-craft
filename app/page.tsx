import {
  RiTwitterXLine,
  RiInstagramLine,
  RiFacebookLine,
  RiTiktokLine,
} from "react-icons/ri";
import InteractiveForm from "./components/InteractiveForm";
import Particles from "../components/ui/particles";
import { TextAnimate } from "../components/ui/text-animate";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-[#1a1a1a] pt-6 px-2 w-full">
      <Particles className="absolute inset-0 w-full h-full z-0" />
      <div className="relative z-10 flex flex-col justify-center items-center">
        <div className="flex flex-wrap gap-4 justify-center items-center mt-4 mb-2">
          <RiTwitterXLine size={50} color="white" />{" "}
          <RiFacebookLine size={50} color="white" />{" "}
          <RiInstagramLine size={50} color="white" />{" "}
          <RiTiktokLine size={50} color="white" />
        </div>
        <div className="flex flex-col justify-center items-center mt-7 w-full max-w-4xl py-3">
          <TextAnimate
            animation="blurInUp"
            by="character"
            className="text-white text-4xl font-extrabold text-center mb-4 leading-tight sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl"
          >
            Caption Generator
          </TextAnimate>
          <p className="text-white text-center text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-4">
            Generate engaging tweets or captions for your photos effortlessly
            using AI. Simply describe your idea, and let the AI craft the
            perfect caption for you!
          </p>
          <InteractiveForm />
        </div>
      </div>
    </div>
  );
}
