import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

export default function Layouts({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
