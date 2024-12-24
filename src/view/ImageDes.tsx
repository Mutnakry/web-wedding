import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ImageDes: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 100,
            once: false,
        });
    }, []);

    // Array of images, some of which may be empty
    const images = [
        { id: 1, description: "មោះង ៥:៣០ រសៀល អញ្ជើញភ្ញាវកិត្ដយលសេពសោយ្យអា", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHcm10kV9oCcrxyrPEPZlWghP-9oWyL8Sqyw&s" },
        { id: 2, description: "មោះង 4:៣០ រសៀល អញ្ជើញភ្ញាវកិត្ដយលសេពសោយ្យអា មោះង 4:៣០ រសៀល អញ្ជើញភ្ញាវកិត្ដយលសេពសោយ្យអាមោះង 4:៣០ រសៀល អញ្ជើញភ្ញាវកិត្ដយលសេពសោយ្យអា", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHcm10kV9oCcrxyrPEPZlWghP-9oWyL8Sqyw&s" }
    ];

    // Fallback image URL
    const fallbackImage = "https://via.placeholder.com/390x400";

    return (
        <div>
            {/* Carousel Section */}
            <div className="max-w-screen-lg mx-auto md:py-12 py-6">
                <div className="items-center justify-center flex w-full mb-6">
                    <p className="md:text-4xl text-xl text-indigo-600 font-KhmerMoul">
                        សិរីមង្គលអាពាពិពាហ៍
                    </p>
                </div>
                <div className="flex flex-wrap justify-center items-center">
                    {images.map((imageObj, index) => (
                        <div key={index} className="mb-4 ">
                            {/* Check if index is even */}
                            {index % 2 === 0 ? (
                                <div className="flex border border-blue-500 rounded-lg" data-aos="fade-up-right">
                                    <img
                                        src={imageObj.image || fallbackImage}
                                        alt={`Image ${index}`}
                                        className="object-cover border border-blue-600 rounded-l-lg"
                                    />
                                    <p className="mt-2 text-center">{imageObj.description}</p>
                                </div>
                            ) : (
                                // Check if index is odd
                                <div className="flex border border-blue-500 rounded-lg" data-aos="fade-left">
                                    <p className="mt-2 text-center">{imageObj.description}</p>
                                    <img
                                        src={imageObj.image || fallbackImage}
                                        alt={`Image ${index}`}
                                        className="object-cover border border-blue-600 rounded-r-lg"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageDes;
