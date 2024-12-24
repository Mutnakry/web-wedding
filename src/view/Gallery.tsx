import { useEffect, useState } from "react";
import { BsCalendarDateFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 100,
            once: false,
        });
        AOS.init();
    }, []);

    // Array of images, some of which may be empty
    const images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHcm10kV9oCcrxyrPEPZlWghP-9oWyL8Sqyw&s",
        "",
        "https://media.gettyimages.com/id/102283975/photo/groom-hugging-and-lifting-bride.jpg?s=612x612&w=gi&k=20&c=Ku1BrC1gT-pRUJz-CRET1mKRThLPxOcMCoQkm29ydSU=",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTyo2-90ss8ypDh3sBkXOkWbJyyrr33FDSEA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHcm10kV9oCcrxyrPEPZlWghP-9oWyL8Sqyw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTyo2-90ss8ypDh3sBkXOkWbJyyrr33FDSEA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHcm10kV9oCcrxyrPEPZlWghP-9oWyL8Sqyw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTyo2-90ss8ypDh3sBkXOkWbJyyrr33FDSEA&s",
    ];

    // Fallback image URL
    const fallbackImage = "https://via.placeholder.com/390x400";

    return (
        <div>
            {/* Carousel Section */}
            <div className="max-w-screen-lg mx-auto md:py-12 py-6">
                <div className="items-center justify-center flex w-full">
                    <p className="md:text-4xl text-xl text-indigo-600 font-KhmerMoul">
                        សិរីមង្គលអាពាពិពាហ៍
                    </p>
                </div>
                <div className="flex-wrap-reverse flex justify-center items-center">
                    {images.map((src, index) => (
                        <div key={index} className="mb-4" data-aos="flip-up">
                            <img
                                src={src || fallbackImage}
                                alt={`Image ${index}`}
                                className=" object-cover border border-blue-600"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Gallery;
