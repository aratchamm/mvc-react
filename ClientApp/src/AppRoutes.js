import { Home } from "./components/Home";
import { Status } from "./components/Status";
import Login from "./components/Login";
import { SignUp } from "./components/SignUp";

const AppRoutes = [
  {
    index: true,
    element: <Login />
  },
  {
    path: '/status',
    element: <Status />
  },
  {
    path: '/Home',
    element: <Home />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/login',
    element: <Login />
  }
];

export default AppRoutes;
