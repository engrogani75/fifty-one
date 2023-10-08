import { Outlet } from "react-router-dom";
import Nav from "../../Pages/Header/Nav";




const MainLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;