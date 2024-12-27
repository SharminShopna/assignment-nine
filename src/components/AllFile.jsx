import CartSection from "./CartSection";
import ExtaSection from "./ExtaSection";
import Main from "./Main";
import ThirdSection from "./ThirdSection";


const AllFile = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Main></Main>
            <CartSection></CartSection>
            <ExtaSection></ExtaSection>
            <ThirdSection></ThirdSection>
        </div>
    );
};

export default AllFile;