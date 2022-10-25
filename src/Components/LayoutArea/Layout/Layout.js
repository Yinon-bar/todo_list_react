import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";

import "./Layout.css";

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <Aside />
      <Main />
      <Footer />
    </div>
  );
}

export default Layout;
