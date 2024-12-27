import { Link, useLoaderData, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaRegComments } from "react-icons/fa6";
import { useState } from "react"; 
import { Helmet } from "react-helmet";

const CareerDetails = () => {
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const handleCommentSubmit = () => {
    if (comment) {
      setCommentsList((prevComments) => [...prevComments, comment]);
      setComment("");
    }
  };

  const data = useLoaderData();
  const { id } = useParams();
  const cart = data.find(carts => carts.id === parseInt(id));
  const {
    serviceName,
    briefDescription,
    pricing,
    duration,
    counselor,
    rating,
    image
  } = cart;

  return (
    <>
    <Helmet>
        <title>Career | CareerDetails</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <header className="w-11/12 mx-auto my-6">
        <Header />
      </header>
      <section>
        <div className="card bg-teal-50 shadow-xl mt-24">
          <figure className="px-10 pt-10">
            <img
              src={image}
              alt=""
              className="rounded-xl w-96 h-60" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">serviceName: {serviceName}</h2>
            <p>Description: {briefDescription}</p>
            <p>Counselor: {counselor}</p>
            <p>Pricing: {pricing}</p>
            <p>Duration: {duration}</p>
            <p className="text-center items-center flex justify-center">{rating} 
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              </div>
            </p>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write a comment"
                className="flex-grow p-2 border rounded-lg shadow-sm"
              />
              <button
                onClick={handleCommentSubmit}
                className="bg-teal-400 text-white px-4 py-2 rounded-lg hover:bg-teal-600"
              >
                Comment
              </button>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold">All Comments:</h4>
              {commentsList.length === 0 ? (
                <p className="text-gray-500">No comments yet.</p>
              ) : (
                <div className="space-y-2">
                  {commentsList.map((item, index) => (
                    <div
                      key={index}
                      className="p-3 bg-gray-100 rounded-lg flex items-center gap-2"
                    >
                      <FaRegComments className="text-gray-500" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="">
              <Link to="/" className="btn bg-teal-400 text-white">Go Back</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CareerDetails;
