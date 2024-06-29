import Banner from './Banner';
import Location from './Location';
import NewsLetter from './NewsLetter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Location></Location>
            <div className="flex flex-row-reverse"><NewsLetter></NewsLetter></div>
        </div>
    );
};

export default Home;