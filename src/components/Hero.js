import { SocialIcon } from "react-social-icons";
import { Button } from "@headlessui/react";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="flex-1/2 px-10 py-12 lg:px-16">
        <h1 className="flex flex-col text-stone-300">
          <span className="text-center md:text-left text-stone-500">
            Hi I am
          </span>
          <span className="text-center md:text-left text-xl">
            Travis Stirling
          </span>
          <span className="mt-4 text-center md:text-left text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
            Full Stack Software Developer
          </span>
        </h1>
        <div className="flex justify-center my-4 md:justify-start">
          <SocialIcon
            network="linkedin"
            bgColor="#1E1E1E"
            fgColor="#8A8A8A"
            className="scale-75 -left-1 rounded-full border-2 border-stone-600 hover:border-stone-400"
          />
          <SocialIcon
            network="github"
            bgColor="#1E1E1E"
            fgColor="#8A8A8A"
            className="scale-75 -right-1 rounded-full border-2 border-stone-600 hover:border-stone-400"
          />
        </div>
        <div className="flex space-x-6 justify-center md:justify-start">
          <Button className="rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-600 px-4 py-2 text-sm text-white data-hover:from-cyan-500 data-hover:to-cyan-700 data-hover:data-active:from-cyan-700">
            Hire Me
          </Button>
          <Button className="rounded-lg border-2 border-stone-400 px-4 py-2 text-sm text-stone-400 data-hover:border-stone-300 data-hover:data-active:text-stone-300">
            Download CV
          </Button>
        </div>
        <div className="flex mt-6 mb-12 py-4 rounded-lg bg-stone-800">
          <div className="flex-1/3 border-r-1 border-r-stone-300">
            <div className="flex flex-col justify-self-center text-stone-300">
              <span className="text-xl text-cyan-400">5+</span>
              <span className="text-sm">Experiences</span>
            </div>
          </div>
          <div className="flex-1/3 border-r-1 border-r-stone-300">
            <div className="flex flex-col justify-self-center">
              <span className="text-xl text-cyan-400">15+</span>
              <span className="text-sm">Projects</span>
            </div>
          </div>
          <div className="flex-1/3">
            <div className="flex flex-col justify-self-center">
              <span className="text-xl text-cyan-400">40+</span>
              <span className="text-sm">Clients</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1/2 px-10 py-12 lg:px-16 content-end">
        <div className="bg-stone-800 rounded-full aspect-square w-[64%] sm:w-90 justify-self-center"></div>
      </div>
    </section>
  );
}
