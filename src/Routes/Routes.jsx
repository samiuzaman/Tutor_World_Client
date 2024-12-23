import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Forgot from "../Pages/Forgot";
import TutorDetails from "../Pages/TutorDetails";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import FindTutors from "../Pages/FindTutors";
import AddTutorials from "../Pages/AddTutorials";
import MyTutorials from "../Pages/MyTutorials";
import MyBookedTutor from "../Pages/MyBookedTutor";
import Category from "../components/HomeLayout/Category";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Category></Category>,
          },
        ],
      },
      {
        path: "/findTutors",
        element: <FindTutors></FindTutors>,
        loader: () => fetch("http://localhost:5000/alltutorial"),
      },
      {
        path: "/tutorDetails/:id",
        element: (
          <PrivetRoute>
            <TutorDetails></TutorDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/alltutorial/${params.id}`),
      },
      {
        path: "/addTutorials",
        element: (
          <PrivetRoute>
            <AddTutorials></AddTutorials>
          </PrivetRoute>
        ),
      },
      {
        path: "/myTutorials",
        element: (
          <PrivetRoute>
            {" "}
            <MyTutorials></MyTutorials>{" "}
          </PrivetRoute>
        ),
      },
      {
        path: "/myBookedTutors",
        element: (
          <PrivetRoute>
            {" "}
            <MyBookedTutor></MyBookedTutor>{" "}
          </PrivetRoute>
        ),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login/forgot",
        element: <Forgot></Forgot>,
      },
    ],
  },
]);

export default routes;
