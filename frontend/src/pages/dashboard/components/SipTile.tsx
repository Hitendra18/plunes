export const SipTile = ({
  value,
  text,
  color,
}: {
  value: number;
  text: string;
  color: string;
}) => {
  return (
    <div className="flex justify-between px-4 py-2 items-center border-y">
      <p className="font-medium w-[150px]">{text}</p>
      <div
        className="border px-6 py-1 rounded"
        style={{ backgroundColor: `${color}30`, borderColor: color, color }}
      >
        {value}
      </div>
      <button className="px-6 py-1 text-white font-medium bg-primary-blue rounded hover:bg-blue-600 transition-all duration-300">
        View
      </button>
    </div>
  );
};
