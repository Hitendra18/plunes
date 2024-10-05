import { FaSearch } from "react-icons/fa";

export const SearchBar = () => {
  return (
    <div className="border border-gray-400 flex items-center gap-2 rounded-lg px-2 py-1 w-[250px]">
      <FaSearch className="text-gray-500" />
      <input
        type="text"
        placeholder="Search..."
        className="w-fit outline-none"
      />
    </div>
  );
};
