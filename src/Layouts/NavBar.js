import SearchBar from "../components/SearchBar";

const NavBar = () => {
  return (
    <div className="flex justify-between py-6 px-5 bg-slate-50">
      <div>Logo</div>
      <div className="font-poppins font-semibold text-2xl">Hello, Admin</div>

      <div>
        <SearchBar />
      </div>
      <div>Login-adminPic</div>
    </div>
  );
};

export default NavBar;
