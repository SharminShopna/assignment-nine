import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../firebase/firebase.config";
import { toast } from "react-toastify";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
const auth = getAuth(app);
const ForgotPsw = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      offset: 100, 
      once: true, 
    });
  }, []);
    const {forgot} = useContext(AuthContext)
    const handleForgotPsw = (e) =>{
        e.preventDefault();
        const email = forgot
    
        sendPasswordResetEmail(auth, email)
          .then(() => {
            toast.success("Check your email, we sent a reset password link");
          })
          .catch((error) => {
            toast.error("Error sending reset email: " + error.message);
          });
    }
  
    return (
        <>
        <Helmet>
        <title>Career | ForgotPsw</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
        <header className="w-11/12 mx-auto my-6">
            <Header></Header>
        </header>
        
        <div className="card py-24 mt-24  bg-teal-50 items-center justify-center flex shrink-0 shadow-2xl" data-aos="zoom-in-down">
        <div>
          <h2 className="text-3xl text-teal-600 text-center font-semibold">Forget Password</h2>
        </div>
            <form onSubmit={handleForgotPsw} className="card-body">
          <div className="form-control">
             <label className="label">
                <span className="label-text">Email</span>
             </label>
               <input value={forgot} type="email" placeholder="email" className="input input-bordered" required />
           </div>
          <div className="form-control mt-6">
             <button className="btn bg-teal-400 text-white">Reset</button>
          </div>
          </form>
       </div> 
       <Footer></Footer> 
        </>
    );
};

export default ForgotPsw;