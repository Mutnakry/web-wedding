import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Carucel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHcm10kV9oCcrxyrPEPZlWghP-9oWyL8Sqyw&s",
        "",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHcm10kV9oCcrxyrPEPZlWghP-9oWyL8Sqyw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTyo2-90ss8ypDh3sBkXOkWbJyyrr33FDSEA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHcm10kV9oCcrxyrPEPZlWghP-9oWyL8Sqyw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTyo2-90ss8ypDh3sBkXOkWbJyyrr33FDSEA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHcm10kV9oCcrxyrPEPZlWghP-9oWyL8Sqyw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTyo2-90ss8ypDh3sBkXOkWbJyyrr33FDSEA&s",
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 100,
            once: false,
        });
        // AOS.init();
    }, []);

    return (
        <div>
            {/* Carousel Section */}
            <div className="max-w-screen-lg mx-auto" data-aos="fade-up">
                <div className="relative overflow-hidden">
                    {/* Image Container */}
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images.map((src, index) => (
                            src ? (
                                <img
                                    key={index}
                                    src={src}
                                    alt=""
                                    className="h-[290px] w-auto border-2 border-red-500 object-cover"
                                />
                            ) : (
                                <div
                                    key={index}
                                    className="h-[290px] w-[290px] border-2 border-red-500 bg-gray-200 flex items-center justify-center"
                                >
                                    <p className="h-[290px] w-[290px] text-gray-500 text-center text-4xl">390 x 400</p>
                                </div>
                            )
                        ))}

                    </div>

                    {/* Navigation Buttons */}
                    <button
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
                        onClick={prevSlide}
                    >
                        &larr;
                    </button>
                    <button
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
                        onClick={nextSlide}
                    >
                        &rarr;
                    </button>
                </div>
            </div>
        </div>
    );
}
