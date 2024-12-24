import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Stats from "../components/HomeLayout/Stats";
import Banner from "../components/HomeLayout/Banner";
import Connect from "../components/HomeLayout/Connect";
import Help from "../components/HomeLayout/Help";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Sports Equipify</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="">
        <Banner></Banner>
        <Stats></Stats>
        <Outlet></Outlet>
        <Help></Help>
        <Connect></Connect>
      </div>
    </div>
  );
};

export default Home;
