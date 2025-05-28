import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "./Fontstyle.css"


const MainPage = () => {
    return (
        <div className="manrope">
           <div className="container mx-auto mt-4">
             <Navbar></Navbar>
             <Outlet></Outlet>
           </div>
            
        </div>
    );
};

export default MainPage;