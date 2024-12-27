
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ExtaSection = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200, 
      offset: 100, 
      once: true, 
    });
  }, []);
    return (
    <div className="bg-gradient-to-r from-teal-50 to-teal-50 my-8 py-20 px-6 lg:px-16" data-aos="flip-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-teal-600">
            Build Your Dream Career
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-gray-600">
            Explore professional opportunities and unlock your potential with our tailored career services. From guidance to job search, we are here to help!
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10" data-aos="flip-up">
          <div className="bg-white shadow-xl rounded-xl p-8 text-center transform hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-gray-700">Career Counseling</h3>
            <p className="mt-4 text-gray-500">
              Personalized career advice to help you make informed decisions.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-xl p-8 text-center transform hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-gray-700">Resume Building</h3>
            <p className="mt-4 text-gray-500">
              Craft a professional resume that stands out to employers.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-xl p-8 text-center transform hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-gray-700">Job Search Assistance</h3>
            <p className="mt-4 text-gray-500">
              Access exclusive job opportunities matched to your skills.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-xl p-8 text-center transform hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-gray-700">Interview Preparation</h3>
            <p className="mt-4 text-gray-500">
              Master the art of interviews with expert guidance.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-xl p-8 text-center transform hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-gray-700">Skill Development</h3>
            <p className="mt-4 text-gray-500">
              Upgrade your skills with our specialized training sessions.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-xl p-8 text-center transform hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-gray-700">Networking Support</h3>
            <p className="mt-4 text-gray-500">
              Connect with professionals in your desired industry.
            </p>
          </div>
        </div>
        <div className="mt-20 text-center">
          <button className="px-8 py-4 bg-teal-400 text-white text-lg font-bold rounded-lg shadow-lg hover:bg-teal-600 transition">
            Get Started Today
          </button>
        </div>
      </div>
    </div>

    );
};

export default ExtaSection;