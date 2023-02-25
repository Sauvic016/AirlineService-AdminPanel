import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";

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
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default App;
