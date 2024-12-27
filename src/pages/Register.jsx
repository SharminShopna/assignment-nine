import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from 'react-helmet';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import AOS from "aos";
import "aos/dist/aos.css";

const auth = getAuth(app);
const Register = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      offset: 100, 
      once: true, 
    });
  }, []);
  const Passregex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const {createNewUser,setUser, updateUserProfile} = useContext(AuthContext)
  const [showPassword,setShowPassword] = useState(false)
  // const[error,setError] = useState({})
  const navigate = useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    // console.log({name,photo,email,password})
    if (!Passregex.test(password)) {
      toast.error("Password is invalid");
      return;
    }
    createNewUser(email,password)
    .then((result) =>{
      const user = result.user
      setUser(user)
      toast.success('Successfully Register')
      
      // console.log(user)
      updateUserProfile({displayName:name,photoURL:photo})
      .then(() =>{
        navigate("/");
        toast.success('Success profile update')
      })
      .catch(err =>{
        toast.error('Failed profile update',err)
      })
      
    })
    .catch((error) =>{
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage)
    })

  }
  const provider = new GoogleAuthProvider()

  const handleGoogleSignIn = () =>{
    signInWithPopup(auth,provider)
    .then(result =>{
     toast.success('successfully google signIn',result)
    })
    .catch(error =>{
     toast.error('Error',error)
    })
  }
    return (
      <>
      <Helmet>
        <title>Career | Register</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
        <div className="min-h-screen mt-20 flex justify-center items-center bg-teal-50" data-aos="zoom-in-up">
           <div className="card max-w-2xl w-full rounded-none p-10">
            <h2 className="text-2xl text-center font-semibold">Register Your Account</h2>
      <form onSubmit={handleSubmit} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input name="photo" type="text" placeholder="Photo-url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
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
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-teal-400 text-white">Register</button>
          <div className="divider">OR</div>
          <button onClick={handleGoogleSignIn} className="btn hover:bg-teal-400 hover:text-white"><FcGoogle size={20}/> Login with Google</button>
        </div>
      </form>
      <p className="text-center font-semibold">Already Have An Account? {""} <Link to="/auth/login" className="text-red-600">Login</Link></p>
    </div> 
        </div>
        </>
    );
};

export default Register;