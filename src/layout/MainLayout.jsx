// react router dom imports
import { Outlet } from "react-router-dom";

// component
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer>
        <a href="https://telegram.org/@yaxshiliksari_1" target="_blank">
          Telegram ✈️
        </a>{" "}
        |
        <a href="https://www.github.com/developer-mmm" target="_blank">
          Github
        </a>
      </footer>
    </>
  );
}

export default MainLayout;
