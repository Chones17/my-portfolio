import GradientButton from "@/components/GradientButton";
import GreyedButton from "@/components/GreyedButton";
import SocialMediaIcon from "@/components/SocialMediaIcon";
import StatisticsCard from "@/components/StatisticsCard";

const social = [
  { id: 1, network: "linkedin" },
  { id: 2, network: "github" },
];

const statistics = [
  { id: 1, title: "Years in Tech & Leadership", statistic: "7+" },
  { id: 2, title: "Technical Projects Led & Delivered", statistic: "15+" },
  { id: 3, title: "Team Members Managed Across Functions", statistic: "150+" },
];

export default function Hero() {
  return (
    <section className="py-10 md:flex">
      <div className="flex-1/2 px-2 py-12">
        <div className="text-center md:text-left">
          <span className="block text-stone-500">Hi I am</span>
          <span className="text-xl">Travis Stirling</span>
          <h1 className="py-4 text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
            Full Stack Software Developer
          </h1>
        </div>
        <div className="text-center md:text-left space-x-2">
          {social.map((item) => {
            return <SocialMediaIcon key={item.id} network={item.network} />;
          })}
        </div>
        <div className="py-4 text-center md:text-left space-x-6">
          <GradientButton value={"Hire Me"} />
          <GreyedButton value={"Download CV"} />
        </div>
        <div className="flex my-8 py-4 rounded-lg bg-stone-800">
          {statistics.map((item) => {
            return (
              <StatisticsCard
                key={item.id}
                title={item.title}
                statistic={item.statistic}
              />
            );
          })}
        </div>
      </div>
      <div className="flex-1/2 px-2 content-center">
        <div className="h-[558px] aspect-1/2 justify-self-center md:justify-self-end bg-stone-800"></div>
      </div>
    </section>
  );
}
