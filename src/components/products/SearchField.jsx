import { MdSearch } from "react-icons/md";

const SearchField = ({ setSearch }) => {
  return (
    <div className="relative">
      <MdSearch className="absolute text-3xl transform -translate-y-1/2 left-2 top-1/2" />
      <input
        type="text"
        className="w-full py-5 pl-10 shadow bg-greyBg/5 focus:outline-none"
        placeholder="Search Your Product"
        onChange={(e) => setSearch(e.target.value)}
      />
      <i className="absolute right-0 w-20 mr-[-2rem] text-xl transform -translate-y-1/2 fa-solid fa-barcode top-1/2"></i>
    </div>
  );
};

export default SearchField;
