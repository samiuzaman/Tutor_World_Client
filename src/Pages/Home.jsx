import { Helmet } from "react-helmet-async";

import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Sports Equipify</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="my-12">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
