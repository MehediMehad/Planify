import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <nav>NavBar</nav>
      <Outlet />
    </>
  );
};

export default Main;
