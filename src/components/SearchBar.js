const SearchBar = () => {
  return (
    <div>
      <input
        type="text"
        className="bg-slate-200 outline-none px-3 py-1 rounded-lg cursor-text placeholder:text-xs"
        placeholder="Search anything..."
      />
    </div>
  );
};

export default SearchBar;
