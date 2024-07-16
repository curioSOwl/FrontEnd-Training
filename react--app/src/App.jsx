import CreateEmployee from "./CreateEmployee";
import LoginEmployee from "./LoginEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import EmployeeList from "./components/EmployeeList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import HomeLayout from "./layouts/homeLayout";
import EmployeeDetails from "./components/EmployeeDetails";
import { Provider } from "react-redux";
import store from "./store/store";

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
        element: <EmployeeList />,
      },
      {
        path: "create",
        element: <CreateEmployee />,
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
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
};

export default App; //components are named in capital letters usually
