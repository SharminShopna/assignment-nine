import { useEffect, useState } from "react";

import CartDetails from "./CartDetails";
import AOS from "aos";
import "aos/dist/aos.css";


const CartSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      offset: 100, // Trigger animations 100px from the element
      once: true, // Run animation only once
    });
  }, []); 
    
    const [card, setCard] = useState([]);
    useEffect(() => {
      const fetchCard = async () => {
        const url = "data.json";
        const res = await fetch(url);
        const data = await res.json();
        setCard(data);
      };
      fetchCard();
    }, []);
    return (
      <>
      <div className="text-center mt-12 space-y-3">
        <h2 className="text-5xl text-teal-600 font-semibold">Career Counseling</h2>
        <p className="text-gray-400 ">Choosing a profession or get advice on breaking into a new field with career counseling.</p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="fade-down">
            {
                card.map((carts,idx) =>
               <CartDetails key={idx} carts={carts}></CartDetails>
                )
            }
        </div>
        </>
    );
};

export default CartSection;