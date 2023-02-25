import { Outlet } from "react-router-dom";

const BodyContainer = () => {
  return (
    <div className="h-full p-2 rounded-md bg-slate-100">
      <Outlet />
    </div>
  );
};

export default BodyContainer;
