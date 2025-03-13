import { IconType } from "react-icons";
interface CardProps {
  title: string;
  value: string | number;
  percentage: string;
  percentageColor: string;
  progress: number;
  icon?: IconType;
}

export default function Card({
  title,
  value,
  percentage,
  percentageColor,
  progress,
  icon: Icon,
}: CardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        {Icon ? <Icon className="h-4 w-4 text-gray-500" /> : null}
      </div>
      <div className="text-2xl font-bold">{value}</div>
      <p className={`text-xs ${percentageColor}`}>{percentage}</p>
      <div className="mt-4 h-1 w-full rounded-full bg-gray-200">
        <div
          className="h-1 rounded-full bg-blue-600"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}