import { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
 import { GoogleAuthProvider } from "firebase/auth";
 import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
 const auth = getAuth(app);
const Login = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      offset: 100, 
      once: true, 
    });
  }, []);

  const {userLogin, setUser, setForgot} = useContext(AuthContext)
  const [error,setError] = useState({})
  const [showPassword,setShowPassword] = useState(false)
  const location = useLocation()
  // console.log(location)
  const navigate = useNavigate()
  const forgotRef = useRef()
  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({email,password})
    userLogin(email,password)
    .then((result) =>{
      const user = result.user;
      setUser(user)
      navigate(location?.state?location.state:"/");
      toast.success('login successfully')
    })
    .catch((errors) =>{
      setError({...error,login:errors.code});
      toast.error('login failed')
    })
  }
  const handleForgotPsw = () =>{
    const currentValue = forgotRef.current?.value.trim()
    setForgot(currentValue)
    navigate('/forgot')
  }
   const provider = new GoogleAuthProvider()

   const handleGoogleSignIn = () =>{
     signInWithPopup(auth,provider)
     .then(result =>{
      toast.success('successfully signIn',result)
     })
     .catch(error =>{
      toast.error('Error',error)
     })
   }
    return (
      <>
      <Helmet>
        <title>Career | Login</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
        <div className="min-h-screen flex justify-center items-center bg-teal-50" data-aos="zoom-in">
           <div className="card max-w-2xl w-full rounded-none p-10 shadow-lg">
            <h2 className="text-2xl text-center font-semibold">Login Your Account</h2>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" ref={forgotRef} placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type={showPassword?'text':'password'} placeholder="password" className="input input-bordered" required />
          <button onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute right-2 top-12">
            {
              showPassword?<FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>
            }
            
          </button>
          {
            error.login && <label className="label text-sm text-red-600">{error.login}</label>
          }
          <label className="label">
            <NavLink onClick={handleForgotPsw} className="label-text-alt link link-hover">Forgot password?</NavLink>
          </label>
        </div>
        <div className="form-control mt-6 space-y-2">
          <button className="btn bg-teal-400 text-white">Login</button>
          <div className="divider">OR</div>
          <button onClick={handleGoogleSignIn} className="btn hover:bg-teal-400 hover:text-white"><FcGoogle size={20}/> Login with Google</button>
        </div>
      </form>
      
      <p className="text-center font-semibold">Do not Have An Account? <Link to="/auth/register" className="text-red-600">Register</Link></p>
    </div> 
        </div>
        </>
    );
};

export default Login;