import { RiTwitterXLine } from "react-icons/ri";
import InteractiveForm from "./components/InteractiveForm";
import Particles from "../components/ui/particles";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-[#1a1a1a] w-full">
      <Particles className="absolute inset-0 w-full h-full z-0" />
      <div className="relative z-10 flex flex-col justify-center items-center">
        <RiTwitterXLine size={50} color="white" />
        <div className="flex flex-col justify-center items-center mt-7 w-full max-w-4xl py-3">
          <p className="text-white text-4xl font-extrabold">Idea to tweet in seconds.</p>
          <p className="text-white text-2xl">Tweet Craft is your superhuman tweet-writing expert.</p>
          <InteractiveForm />
        </div>
      </div>
    </div>
  );
}
