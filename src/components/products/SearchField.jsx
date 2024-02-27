import { MdSearch } from "react-icons/md";

const SearchField = () => {
  return (
    <div className="relative">
      <MdSearch className="absolute text-3xl transform -translate-y-1/2 left-2 top-1/2" />
      <input
        type="text"
        className="w-full py-5 pl-10 shadow bg-greyBg/5 focus:outline-none"
        placeholder="Search Your Product"
      />
    </div>
  );
};

export default SearchField;
