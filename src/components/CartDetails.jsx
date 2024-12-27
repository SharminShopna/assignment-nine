/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const CartDetails = ({carts}) => {
    const{image, serviceName, category, pricing, counselor}= carts
    return (
      <>
      
        <div className="card bg-base-100 shadow-xl my-10">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt=""
      className="rounded-xl" />
  </figure>
  <div className="card-body items-start text-start">
    <h2 className="card-title">ServiceName: {serviceName}</h2>
    <p>Counselor: {counselor}</p>
    <p>Category: {category}</p>
    <p>Pricing: {pricing}</p>
    <div className="card-actions">
      <Link to={`/cart/${carts.id}`} className="btn btn-active btn-accent">Learn More</Link>
    </div>
  </div>
</div>
</>
    );
};

export default CartDetails;