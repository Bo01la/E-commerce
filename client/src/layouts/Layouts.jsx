import { Outlet } from "react-router-dom";

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

export default function Layouts() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
