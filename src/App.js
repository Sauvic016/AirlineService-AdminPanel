import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";
import Flights from "./pages/Flights";
import Bookings from "./pages/Bookings";
import Users from "./pages/Users";
import Cities from "./pages/Cities";
import Settings from "./pages/Settings";

function App() {
  return <RouterProvider router={appRouter} />;
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <DashBoard />,
      },
      {
        path: "/flights",
        element: <Flights />,
      },
      {
        path: "/bookings",
        element: <Bookings />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/cities",
        element: <Cities />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default App;
