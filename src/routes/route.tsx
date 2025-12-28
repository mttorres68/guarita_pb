import { Route, Routes } from "react-router";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Layout from "./components/Layout";
import MovementPage from "@/pages/movement-page/MovementPage";
import { boardingRoutes, receivingRoutes } from "@/lib/utils";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="*" index element={<Home />} />
          {boardingRoutes.map((route) => (
            <Route
              path={route.url}
              element={
                <MovementPage
                  key={route.title}
                  title={route.title}
                  typeMovement={route.typeMovement}
                  category={route.category}
                />
              }
            />
          ))}
          {receivingRoutes.map((route) => (
            <Route
              path={route.url}
              element={
                <MovementPage
                  key={route.title}
                  title={route.title}
                  typeMovement={route.typeMovement}
                  category={route.category}
                />
              }
            />
          ))}

          <Route path="sobre" element={<About />} />
        </Route>

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
