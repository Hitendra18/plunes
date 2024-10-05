export const Dropdown = () => {
  return (
    <select
      name="time"
      id="time"
      className="bg-transparent outline-none border border-primary-blue/60 rounded-lg py-0.5 w-[150px]"
    >
      <option value="volvo">This Week</option>
      <option value="saab">This Month</option>
      <option value="mercedes">This Year</option>
      <option value="audi">All Time</option>
    </select>
  );
};
