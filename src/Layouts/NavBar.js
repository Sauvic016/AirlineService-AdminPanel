import SearchBar from "../components/SearchBar";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center py-6 px-5 border-gray-200 border-b-[1.5px] bg-white ">
      <div className=""></div>
      <div>
        <SearchBar />
      </div>
      <div className="bg-slate-100 p-1 rounded-full cursor-pointer">
        <PersonRoundedIcon className="text-blue-400" />
      </div>
    </div>
  );
};

export default NavBar;
