import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import { Outlet } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomePage;
