import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "./Fontstyle.css"
import Footer from "../Components/Footer";


const MainPage = () => {
    return (
        <div className="manrope">
           <div className="container md:mx-auto mt-4 md:px-0 px-4 ">
             <Navbar></Navbar>
             <Outlet></Outlet>
           
             
           </div>
             <Footer></Footer>
            
        </div>
    );
};

export default MainPage;