import { SocialIcon } from "react-social-icons";

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
            className="scale-75 -left-1 rounded-full border-2 border-stone-800 hover:border-stone-600"
          />
          <SocialIcon
            network="github"
            bgColor="#1E1E1E"
            fgColor="#8A8A8A"
            className="scale-75 -right-1 rounded-full border-2 border-stone-800 hover:border-stone-600"
          />
        </div>
      </div>
      <div className="flex-1/2 px-10 py-12 lg:px-16"></div>
    </section>
  );
}
