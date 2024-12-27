
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ThirdSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      offset: 100, 
      once: true, 
    });
  }, []);
    return (
    <div className="relative bg-gray-50 py-20 px-6 lg:px-16" data-aos="flip-up">
      
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: 'url("https://i.ibb.co.com/N7vDyXt/4173705.jpg")',
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto">
        
        <div className="text-center" data-aos="flip-up">
          <h1 className="text-5xl font-extrabold text-teal-600">
            Discover Your Career Potential
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Embark on a journey of self-discovery and professional growth. Find tailored guidance, build your skills, and achieve the career you deserve.
          </p>
        </div>

        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" data-aos="flip-up">
         
          <div className="bg-white shadow-2xl rounded-lg p-8 transition transform hover:scale-105">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2a10 10 0 11-10 10A10 10 0 0112 2zm1 15v-4h-2v4H7l5-5 5 5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Personalized Guidance
            </h3>
            <p className="mt-2 text-gray-600">
              Receive expert advice tailored to your unique skills and goals.
            </p>
          </div>
          
          <div className="bg-white shadow-2xl rounded-lg p-8 transition transform hover:scale-105">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-8 h-8 text-green-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2a10 10 0 11-10 10A10 10 0 0112 2zm0 7a2 2 0 100 4 2 2 0 000-4zm1 6h-2v3h2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Career Workshops
            </h3>
            <p className="mt-2 text-gray-600">
              Enhance your knowledge and skills with hands-on training sessions.
            </p>
          </div>
          
          <div className="bg-white shadow-2xl rounded-lg p-8 transition transform hover:scale-105">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2a10 10 0 11-10 10A10 10 0 0112 2zm4 10h-3v3h-2v-3H8v-2h3V7h2v3h3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Networking Opportunities
            </h3>
            <p className="mt-2 text-gray-600">
              Build connections with industry leaders and peers to grow your career.
            </p>
          </div>
        </div>

       
        <div className="mt-20 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-teal-400 to-teal-600 text-white text-lg font-bold rounded-lg shadow-lg hover:opacity-90 transition">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};


export default ThirdSection;
