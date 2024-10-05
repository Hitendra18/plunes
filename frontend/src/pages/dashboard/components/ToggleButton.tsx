import { useState } from "react";

export const ToggleButton: React.FC = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const toggleHandler = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <button
      onClick={toggleHandler}
      className={`flex items-center justify-between lg:w-16 w-14 lg:h-8 h-6 px-1 rounded-full cursor-pointer transition-all ${
        isToggled ? "bg-secondary-green" : "bg-gray-300"
      }`}
    >
      <div
        className={`lg:w-6 lg:h-6 w-4 h-4 rounded-full transition-transform ${
          isToggled ? "lg:translate-x-8 translate-x-8 bg-white" : "bg-white"
        }`}
      />
    </button>
  );
};
