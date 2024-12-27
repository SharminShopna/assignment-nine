import { Helmet } from "react-helmet";


const Error = () => {
    return (
        <>
          <Helmet>
        <title>Career | Error</title>
        <meta name="description" content="Helmet application" />
      </Helmet>  
      <div className="text-center py-56 space-y-4">
        <h1 className="text-7xl font-bold text-red-700">404</h1>
        <h2 className="text-3xl font-semibold">opps! This is Error</h2>
      </div>
        </>
    );
};

export default Error;