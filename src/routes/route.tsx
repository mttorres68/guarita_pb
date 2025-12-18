import { Route, Routes } from "react-router";
import Home from "../pages/home/Home";
import About from "../pages/about/About";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="sobre" element={<About />} />

        {/* <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route> */}

        {/* <Route path="concerts">
    <Route index element={<ConcertsHome />} />
    <Route path=":city" element={<City />} />
    <Route path="trending" element={<Trending />} />
    </Route> */}
      </Routes>
    </>
  );
};

export default AppRoutes;
