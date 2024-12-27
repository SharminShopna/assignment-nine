import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import image from "../assets/img-7.png"
import { TiArrowRight } from "react-icons/ti";
const Mentoring = () => {
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
        <title>Career | Mentoring</title>
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
      <h1 className="text-5xl font-bold mt-8 text-teal-600">Career Coaching & Mentoring</h1>
      <p className="py-6">
      Career coaching and mentoring are essential processes for personal and professional development.
      </p>
      <div>
      
      <ul>
        <p className="text-xl text-teal-700 font-semibold">1. Self-Assessment & Goal Setting:</p>
        <li className=" text-gray-600">Objective:  Understand your current skills, values, interests, and areas for development. This step lays the foundation for setting realistic and achievable career goals..</li>
        <li className=" text-gray-600">Action: Reflect on your strengths and weaknesses. Clarify your career aspirations—do you want growth in your current role, a career change, or to build leadership skills?</li>
        <li className=" text-gray-600">Coaching Tip: Use tools like SWOT analysis (Strengths, Weaknesses, Opportunities, and Threats) or career assessments to guide this process.</li>
        <p className="text-xl text-teal-700 font-semibold">2. Identifying Career Pathways:</p>
        <li className=" text-gray-600">Objective: Explore various career options that align with your strengths and goals. Understand the opportunities and challenges in your field of interest.</li>
        <li className=" text-gray-600">Action: Research different industries, roles, and career trajectories. Look at job requirements, salary ranges, and growth potential in those areas.</li>
        <li className=" text-gray-600">Mentoring Tip: Ask your mentor to share their career journey, insights about the industry, and any advice on what paths they wish they’d considered earlier.</li>
        <p className="text-xl text-teal-700 font-semibold">3. Skill Development:</p>
        <li className=" text-gray-600">Objective: Develop the technical and soft skills necessary to excel in your chosen career.</li>
        <li className=" text-gray-600">Action: Identify gaps in your current skill set. These could include leadership, communication, project management, or specialized technical skills. Engage in professional development activities like courses, certifications, or workshops.</li>
        <li className=" text-gray-600">Coaching Tip: Set SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound) for skill acquisition and track your progress.</li>

        <p className="text-xl text-teal-700 font-semibold">4. Building Your Professional Network:</p>
        <li className=" text-gray-600">Objective: Establish connections that can support your career goals, provide advice, or open doors to new opportunities.</li>
        <li className=" text-gray-600">Action: Attend industry events, webinars, and conferences. Connect with professionals on LinkedIn, participate in online forums, or seek informational interviews.</li>
        <li className=" text-gray-600">Mentoring Tip: A mentor can introduce you to people in their network who can help advance your career.</li>
        <p className="text-xl text-teal-700 font-semibold">5. Personal Branding & Visibility:</p>
        <li className=" text-gray-600">Objective: Enhance your professional reputation and visibility both online and offline.</li>
        <li className=" text-gray-600">Action: Create a strong LinkedIn profile, maintain an updated resume, and actively share your insights or achievements in industry discussions. If appropriate, start a blog or contribute articles to professional publications.</li>
        <li className=" text-gray-600">Coaching Tip: Work with your coach to develop an elevator pitch and refine your personal branding strategies.</li>

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

export default Mentoring;