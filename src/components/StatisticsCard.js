export default function StatisticsCard({ title, statistic }) {
  return (
    <div className="flex-1/3 p-4 border-r-1 border-r-stone-300 last:border-r-0">
      <div className="flex flex-col max-w-30 justify-self-center">
        <span className="text-xl text-cyan-400">{statistic}</span>
        <span className="text-sm">{title}</span>
      </div>
    </div>
  );
}
