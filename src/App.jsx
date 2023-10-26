import { Outlet } from "react-router-dom";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar/Navbar";


const App = () => {
  return (
    <div className="md:container mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;