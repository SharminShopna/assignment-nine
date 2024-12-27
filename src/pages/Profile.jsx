import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

const Profile = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      offset: 100, // Trigger animations 100px from the element
      once: true, // Run animation only once
    });
  }, []);
    const{user,newProfile} = useContext(AuthContext)
    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = new FormData(e.target);
     const name = form.get("name");
     const photo = form.get("photo");
     newProfile({displayName:name,photoURL:photo})
    }
    return (
        <>
        <Helmet>
        <title>Career | Profile</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
        <header className="w-11/12 mx-auto my-6">
            <Header></Header>
        </header>
        
        <div className="bg-teal-50 flex flex-col text-center items-center justify-center py-10 space-y-2 card shadow-xl mt-20" data-aos="fade-up-right">
        <div>
          <h1 className="text-5xl text-teal-600 text-center font-semibold py-5">Your Profile</h1>
        </div>
           
           <img className="w-60 h-60 rounded-full" src={user.photoURL} alt="" />
           <h2 className="text-3xl font-semibold text-gray-500">Name: {user.displayName}</h2>
           <h2 className="text-3xl font-semibold text-gray-500">User-Email: {user.email}</h2>
           <h2 className="font-thin"><span className="font-semibold">Photo-URL:</span> {user.photoURL}</h2>
           <p className="text-gray-500 w-3/4">Hello! I’m an aspiring software developer with a strong interest in web technologies. I have experience in HTML, CSS, and JavaScript, and I’m currently learning React and Node.js. My goal is to become a skilled full-stack developer and contribute to meaningful projects that solve real-world problems.</p>
           <form onSubmit={handleSubmit} className="card-body w-3/6">
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
        <div className="flex items-start justify-start">
            <button className="btn bg-teal-400 text-white w-full">Update</button>
        </div>
        </form>
        </div>
           <Footer></Footer> 
        </>
    );
};

export default Profile;

