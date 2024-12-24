import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHeart } from "react-icons/fa";

const TimeWedding: React.FC = () => {
    const [timetype, setTimetype] = useState<string>('1មករា'); // Initial state is "1មករា"

    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 100,
            once: false,
        });
    }, []);

    // Function to handle button clicks and switch the time type
    const handleTimeClick = (time: string) => {
        setTimetype(time);
    };

    return (
        <div>
            {/* Location Section */}
            <div className="max-w-screen-lg mx-auto md:py-12 py-6">
                <div className="items-center justify-center flex w-full mb-6" data-aos="fade-up">
                    <p className="md:text-4xl text-xl text-indigo-600 font-black">
                        អបអសាទរជាមួយយើង
                    </p>
                </div>

                {/* Buttons to switch between time */}
                <div className="flex justify-center mb-6">
                    <button
                        onClick={() => handleTimeClick('1មករា')}
                        className={`py-2 px-4 mr-4 border border-blue-600 text-blue-600 rounded ${timetype === '1មករា' ? 'bg-blue-500 text-white' : ''}`}
                    >
                        1មករា
                    </button>
                    <button
                        onClick={() => handleTimeClick('2មករា')}
                        className={`py-2 px-4 border border-blue-600 text-blue-600 rounded ${timetype === '2មករា' ? 'bg-blue-500 text-white' : ''}`}
                    >
                        2មករា
                    </button>
                </div>


                {/* Conditional Rendering based on selected time */}
                <div className="flex justify-center items-center w-full mb-6" data-aos="fade-up">
                    {timetype === '1មករា' ? (
                        <div className="text-center">
                            <div className="flex justify-center"> <FaHeart className="text-red-500 text-4xl mb-4" /></div>
                            <div className="bg-blue-700 w-1 h-10 mx-auto mb-4"></div>
                            <p data-aos="fade-right">មោះង ២:០០ រសៀល</p>
                            <p data-aos="fade-right">ពិធីក្រុងពាលី</p>
                            <div className="bg-blue-700 w-1 h-10 mx-auto my-4"></div>
                            <p data-aos="fade-left">មោះង ៣:០០ រសៀល</p>
                            <p data-aos="fade-left">ពិធីសូត្រមន្ដចម្រើនព្រះបរិត្ដ</p>
                            <div className="bg-blue-700 w-1 h-10 mx-auto my-4"></div>
                            <p data-aos="fade-right">មោះង ៥:០០ រសៀល</p>
                            <p data-aos="fade-right">ពិធីកាន់ខាន់ស្លា</p>
                            <p data-aos="fade-right">ពិធីសូត្រមន្ដចម្រើនព្រះបរិត្ដ</p>
                            <div className="bg-blue-700 w-1 h-10 mx-auto my-4"></div>
                            <p data-aos="fade-left">មោះង ៥:៣០ រសៀល</p>
                            <p data-aos="fade-left">អញ្ជើញភ្ញាវកិត្ដយលសេពសោយ្យអាហា</p>
                        </div>
                    ) : timetype === '2មករា' ? (
                        <div className="text-center">
                            <div className="flex justify-center"> <FaHeart className="text-red-500 text-4xl mb-4" /></div>
                            <div className="bg-blue-700 w-1 h-10 mx-auto mb-4"></div>
                            <p data-aos="fade-left">មោះង ៧:០០ រសៀល</p>
                            <p data-aos="fade-left">ពិធីក្រុងពាលី</p>
                            <div className="bg-blue-700 w-1 h-10 mx-auto my-4"></div>
                            <p data-aos="fade-right">មោះង ៩:០០ រសៀល</p>
                            <p data-aos="fade-right">ពិធីសូត្រមន្ដចម្រើនព្រះបរិត្ដ</p>
                            <div className="bg-blue-700 w-1 h-10 mx-auto my-4"></div>
                            <p data-aos="fade-left">មោះង ១០:០០ រសៀល</p>
                            <p data-aos="fade-left">ពិធីកាន់ខាន់ស្លា</p>
                            <p data-aos="fade-left">ពិធីសូត្រមន្ដចម្រើនព្រះបរិត្ដ</p>
                            <div className="bg-blue-700 w-1 h-10 mx-auto my-4"></div>
                            <p data-aos="fade-right">មោះង ១១:៣០ រសៀល</p>
                            <p data-aos="fade-right">អញ្ជើញភ្ញាវកិត្ដយលសេពសោយ្យអាហា</p>
                        </div>
                    ) : null}
                </div>

            </div>
        </div>
    );
};

export default TimeWedding;
