export const StatusTag = ({
  value,
  text,
  color,
}: {
  value: number;
  text: string;
  color: string;
}) => {
  return (
    <div
      className="border border-gray-300 rounded-lg p-2 flex items-center gap-2 flex-grow"
      style={{ backgroundColor: `${color}30` }}
    >
      <div
        className="rounded-full text-center lg:w-12 lg:h-12 w-8 h-8 flex items-center justify-center text-white font-medium lg:text-xl"
        style={{ backgroundColor: color }}
      >
        {value}
      </div>
      <p className="font-bold lg:text-xl text-lg" style={{ color }}>
        {text}
      </p>
    </div>
  );
};
