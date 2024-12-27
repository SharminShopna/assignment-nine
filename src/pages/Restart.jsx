import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { TiArrowRight } from "react-icons/ti";
import Footer from "../components/Footer";
import image from "../assets/img-6.png"
const Restart = () => {
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
        <title>Career | RestartCareer</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
        <header className="w-11/12 mx-auto my-6">
            <Header></Header>
        </header>
        <div className="hero bg-base-200 min-h-[600px] mt-24" data-aos="flip-up">
       <div className="hero-content flex-col lg:flex-row-reverse">
       <img
      src={image}
      className="rounded-lg shadow-2xl w-[400px] h-[600px]" />
      <div>
      <h1 className="text-5xl font-bold mt-8 text-teal-600">Restart Your Career</h1>
      <p className="py-6">
      Restarting your career can be an exciting and challenging journey.
      </p>
      <div>
      
      <ul>
        <p className="text-xl text-teal-700 font-semibold">1. Assess Your Current Situation and Goals:</p>
        <li className=" text-gray-600">Self-Reflection: Take time to reflect on why you want to restart your career. Are you seeking more fulfillment, better work-life balance, or growth in a different area? Understanding your motivations is key.</li>
        <li className=" text-gray-600">Identify Strengths & Gaps: Evaluate your skills, experiences, and any gaps that need to be addressed. This can help you clarify the direction you want to take.</li>
        <li className=" text-gray-600">Set Clear Goals: Establish both short-term and long-term career goals. For example, do you need further education or skills development, or are you ready to take on a new role immediately?</li>
        <p className="text-xl text-teal-700 font-semibold">2. Update Your Skills and Knowledge:</p>
        <li className=" text-gray-600">Learning & Development: In today’s fast-paced world, industries evolve, and new technologies emerge constantly. Consider upskilling or reskilling through courses, certifications, workshops, or even online learning platforms like Coursera or LinkedIn Learning.</li>
        <li className=" text-gray-600">Stay Current: Read industry-related blogs, attend webinars, or join professional groups to stay up-to-date with trends, tools, and best practices in your field.</li>
        <li className=" text-gray-600">Soft Skills Matter Too: Along with technical skills, focus on improving essential soft skills like communication, leadership, time management, and emotional intelligence.</li>
        <p className="text-xl text-teal-700 font-semibold">3. Expand Your Professional Network:</p>
        <li className=" text-gray-600">Reconnect & Build Connections: Reach out to former colleagues, mentors, or industry peers. Networking is crucial when restarting a career, as it opens doors to new opportunities and insider knowledge.</li>
        <li className=" text-gray-600">Attend Events & Join Communities: Participate in industry-specific networking events, seminars, and online communities (like LinkedIn groups or professional associations).</li>
        <li className=" text-gray-600">Seek Informational Interviews: Set up informational interviews with people in roles or industries you are interested in. This provides insights and can help you expand your network further.</li>

        <p className="text-xl text-teal-700 font-semibold">4. Revamp Your Personal Brand:</p>
        <li className=" text-gray-600">Update Your Resume & LinkedIn: Tailor your resume and LinkedIn profile to reflect your current goals and achievements. Highlight transferable skills if you are switching industries or positions.</li>
        <li className=" text-gray-600">Create a Portfolio or Blog: If applicable, showcase your work in an online portfolio or blog. This is especially useful if you’re in a creative field or tech industry.</li>
        <li className=" text-gray-600">Refine Your Elevator Pitch: Be ready to describe your career restart in a concise and compelling way. This is important for networking and job interviews.</li>
        <p className="text-xl text-teal-700 font-semibold">5. Stay Flexible and Persistent:</p>
        <li className=" text-gray-600">Be Open to New Opportunities: Career restarts may require flexibility. Consider freelance, part-time, or temporary roles as stepping stones to larger opportunities.</li>
        <li className=" text-gray-600">Expect Challenges: Understand that restarting a career might come with setbacks, rejections, or slow progress. Stay persistent and adjust your strategy when necessary.</li>
        <li className=" text-gray-600">Focus on the Bigger Picture: Keep your long-term vision in mind while being patient with the process. Each step you take, no matter how small, is progress toward your goal.</li>

       </ul>
      </div>
      <Link to="/about" className="btn bg-teal-600 text-white">Go Back <TiArrowRight size={24}/></Link>
      </div>
      </div>
        </div>
            <Footer></Footer>
        </>
    );
};

export default Restart;