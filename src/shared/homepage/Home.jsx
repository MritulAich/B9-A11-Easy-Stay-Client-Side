import Banner from './Banner';
import Feature from './Feature';
import Location from './Location';
import NewsLetter from './NewsLetter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Location></Location>
            <Feature></Feature>
            <div className="flex flex-row-reverse"><NewsLetter></NewsLetter></div>
        </div>
    );
};

export default Home;