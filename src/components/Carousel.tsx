import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Button from "./Button";

const Carousels = () => {
    return (
        <div>
            <Carousel
                autoPlay
                showThumbs={false}
                transitionTime={500}
                infiniteLoop
            >
                <div className="flex justify-center items-center h-[800px]" style={{ backgroundImage: 'url("src/assets/images/home-slider/1.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div>
                        <p className="text-white text-8xl font-bold uppercase my-10">Start Your<br /> sea adventure here!</p>
                        <p className="text-white text-3xl uppercase mb-20">Set Sail for Your Dreams, Feel the Joy of Freedom</p>
                        <Button title="Explore Our Invertory!" />
                    </div>
                </div>
                <div className="flex justify-center items-center h-full" style={{ backgroundImage: 'url("src/assets/images/home-slider/2.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div>
                        <p className="text-white text-8xl font-bold uppercase my-10">Start Your<br /> sea adventure here!</p>
                        <p className="text-white text-3xl uppercase mb-20">Set Sail for Your Dreams, Feel the Joy of Freedom</p>
                        <Button title="Explore Our Invertory!" />
                    </div>
                </div>
                <div className="flex justify-center items-center h-full" style={{ backgroundImage: 'url("src/assets/images/home-slider/3.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div>
                        <p className="text-white text-8xl font-bold uppercase my-10">Start Your<br /> sea adventure here!</p>
                        <p className="text-white text-3xl uppercase mb-20">Set Sail for Your Dreams, Feel the Joy of Freedom</p>
                        <Button title="Explore Our Invertory!" />
                    </div>
                </div>
                <div className="flex justify-center items-center h-full" style={{ backgroundImage: 'url("src/assets/images/home-slider/4.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div>
                        <p className="text-white text-8xl font-bold uppercase my-10">Start Your<br /> sea adventure here!</p>
                        <p className="text-white text-3xl uppercase mb-20">Set Sail for Your Dreams, Feel the Joy of Freedom</p>
                        <Button title="Explore Our Invertory!" />
                    </div>
                </div>
                <div className="flex justify-center items-center h-full" style={{ backgroundImage: 'url("src/assets/images/home-slider/5.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div>
                        <p className="text-white text-8xl font-bold uppercase my-10">Start Your<br /> sea adventure here!</p>
                        <p className="text-white text-3xl uppercase mb-20">Set Sail for Your Dreams, Feel the Joy of Freedom</p>
                        <Button title="Explore Our Invertory!" />
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Carousels;