import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profiles from "./pages/Profiles";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Watch } from "./pages/Watch";
import TestComponent from "./components/TestComponet";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  { path: "/profiles", element: <Profiles /> },
  { path: "/netflix-and-chill", element: <Dashboard /> },
  { path: "/watch", element: <Watch /> },
]);
function App() {
  return (
    <div className="h-full w-full">
      <RouterProvider router={router} />
      <ToastContainer autoClose={5000} position="bottom-right" />
      
    </div>
  );
}

export default App;
