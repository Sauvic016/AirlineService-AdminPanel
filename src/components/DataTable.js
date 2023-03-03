import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className=" flex items-center gap-5">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton py-[2px] px-2 rounded-md text-blue-600 border-blue-200 border">View</div>
            </Link>
            <div
              className="cursor-pointer py-[2px] px-2 rounded-md text-red-600 border-red-200 border focus:outline-none"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable h-[600px] ">
      <div className="datatableTitle bg-white text-lg text-gray-400 flex items-center justify-between pb-3 px-3">
        Add New User
        <Link to="/users/new" className="text-green-600  font-medium border p-2 rounded-md shadow-md cursor-pointer">
          Add New
        </Link>
      </div>
      <DataGrid
        className="bg-white"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
