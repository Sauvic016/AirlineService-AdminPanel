import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  return (
    <div className="flex items-center border-[1.5px] border-gray-300 rounded-lg bg-transparent w-80 ">
      <SearchIcon className="bg-transparent cursor-text text-slate-400 text-xs pl-2 pt-[0.25px] mx-2 " />
      <input
        type="text"
        className="bg-transparent outline-none cursor-text rounded-lg placeholder:text-xs text-xs py-2 w-full"
        placeholder="Search anything..."
      />
    </div>
  );
};

export default SearchBar;
