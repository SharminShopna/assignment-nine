import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      offset: 100, 
      once: true, 
    });
  }, []);

    return (
        <>
        <Helmet>
        <title>Career | About</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <header className="w-11/12 mx-auto my-6">
        <Header></Header>
      </header>
           <div className="mt-24">
            <h1 className="text-3xl text-center text-teal-600 font-semibold py-4">Empower Your Career Journey<br></br> for Greatest Success</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 py-10 px-10" data-aos="flip-up">
            <div className="card card-compact bg-teal-50 shadow-xl p-5">
       <div className="card-body">
    <h2 className="card-title">Personality Development</h2>
    <p>Enhance your confidence, communication skills, and personal growth for success in every aspect of life.</p>
    <div className="card-actions justify-end">
      <Link to="/dev" className="btn bg-teal-400">Explore</Link>
    </div>
    </div>
     </div>
     <div className="card card-compact bg-teal-50 shadow-xl">
       <div className="card-body">
    <h2 className="card-title">Career Coaching &<br></br> Mentoring</h2>
    <p>Unless your potential, achieve your goals and excel in life with our expert guidance and support.</p>
    <div className="card-actions justify-end">
      <Link to="/mentor" className="btn bg-teal-400">Explore</Link>
    </div>
    </div>
     </div>
     <div className="card card-compact bg-teal-50 shadow-xl">
       <div className="card-body">
    <h2 className="card-title">Restart Your Career</h2>
    <p>Unlock new opportunities, fulfill your career aspirations and confidently relaunch your career.</p>
    <div className="card-actions justify-end">
      <Link to="/restart" className="btn bg-teal-400">Explore</Link>
    </div>
    </div>
     </div>
            </div>

           </div>
           <Footer></Footer> 
        </>
    );
};

export default About;