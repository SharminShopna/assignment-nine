import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


const AuthLayout = () => {
    return (
        <>
            <header className="w-11/12 mx-auto my-6">
                <Header></Header>
            </header>
            
            <Outlet></Outlet>
            <div>
            <Footer></Footer>
            </div>
        </>
    );
};

export default AuthLayout;