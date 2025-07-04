export default function ValueCard({ icon, title, description }) {
  return (
    <div className="flex flex-col h-full p-4 items-center rounded-lg bg-stone-800 text-cyan-400">
      {icon}
      <span className="h-14 text-center">{title}</span>
      <span className="text-stone-500">{description}</span>
    </div>
  );
}
