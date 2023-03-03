import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "booking":
      data = {
        title: "Total Bookings",
      };
      break;
    case "user":
      data = {
        title: "Total Registered Users",
      };
      break;
    case "revenue":
      data = {
        title: "Total Earnings",
      };
      break;
    case "email":
      data = {
        title: "Total emails Sent",
      };
      break;
    default:
      break;
  }

  return (
    <div className="shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] bg-white w-full p-8 rounded-lg">
      <h2>{data.title}</h2>
      <p className="font-semibold text-2xl">123,345</p>
      <p>
        See Details <ChevronRightRoundedIcon />
      </p>
    </div>
  );
};

export default Widget;
