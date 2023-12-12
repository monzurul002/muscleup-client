import Banner from "../Banner/Banner";
import EmailSubscription from "../EmailSubscription/EmailSubscription";
import LetestCourse from "../LetestCourse/LetestCourse";
import PopularCourse from "../PopularCourses/PopularCourse";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularCourse></PopularCourse>
            <LetestCourse></LetestCourse>
            <EmailSubscription></EmailSubscription>
        </div>
    );
};

export default Home;