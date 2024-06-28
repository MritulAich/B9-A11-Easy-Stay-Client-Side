import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src="https://i.ibb.co/8stKQQW/leonardo-20270-144078093-608136.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/PMpBtWK/sinwi-room-4092-hor-wide.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/ZzRVVX5/e4c9ac23aae94d0027de9155b985cec4c1dc7da0.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/CKSXJ72/07099cf4.jpg" />
            </div>
        </Carousel>
    );
};

export default Banner;