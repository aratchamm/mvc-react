import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Status } from "./components/Status";
import { SignUp } from "./components/SignUp";

const AppRoutes = [
  {
    index: true,
    element: <Login />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
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
