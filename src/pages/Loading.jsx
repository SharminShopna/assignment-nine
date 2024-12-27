import { Helmet } from "react-helmet";


const Loading = () => {
    return (
        <>
        <Helmet>
        <title>Career | Loading</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
        <div className="flex min-h-screen justify-center items-center">
            <span className="loading loading-dots loading-lg"></span>
        </div>
        </>
    );
};

export default Loading;