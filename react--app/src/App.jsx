import CreateEmployee from "./CreateEmployee";
import LoginEmployee from "./LoginEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import EmployeeList from "./components/EmployeeList";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import NotFound from "./pages/NotFound";
import HomeLayout from "./layouts/homeLayout";
import EmployeeDetails from "./components/EmployeeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginEmployee />,
    errorElement: <NotFound />,
  },
  {
    path: "/employee",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        loader: async () => redirect("create"),
      },
      {
        path: "create",
        element: <CreateEmployee />,
      },
      {
        path: "list",
        element: <EmployeeList />,
      },
      {
        path: "edit/:id",
        element: <UpdateEmployee />,
      },
      {
        path: "details/:id",
        element: <EmployeeDetails />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App; //components are named in capital letters usually
