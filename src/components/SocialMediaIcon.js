import { SocialIcon } from "react-social-icons";

export default function SocialMediaIcon({ network }) {
  return (
    <SocialIcon
      network={network}
      bgColor="#1E1E1E"
      fgColor="#8A8A8A"
      className="md:-left-1 scale-75 rounded-full border-2 border-stone-600 hover:border-stone-400"
    />
  );
}
