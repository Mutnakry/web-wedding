import { useEffect, useState } from "react";
import { BsCalendarDateFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Detail: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 100,
            once: false,
        });
        AOS.init();
    }, []);

    // State for holding the selected date, typed as string or null
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    // Function to handle button click and set the current date
    const handleButtonClick = () => {
        const currentDate = new Date().toLocaleDateString(); // Get current date
        setSelectedDate(currentDate); // Set selected date in state
    };

    return (
        <div>
            {/* Carousel Section */}
            <div className="max-w-screen-lg mx-auto md:py-12 py-6">
                <div className="items-center justify-center flex w-full"  data-aos="fade-up">
                    <p className="md:text-4xl text-xl text-indigo-600 font-KhmerMoul">សិរីមង្គលអាពាពិពាហ៍</p>
                </div>
                <div className="grid grid-cols-2 py-6 px-4">
                    <div className="space-y-2 md:text-xl text-md" data-aos="fade-right">
                        <p className=" text-indigo-600 font-medium">លោក ឆាយ​ ក្រាញ់</p>
                        <p className=" text-indigo-600 font-medium">លោកស្រី ដឿន ចាន់គួយ</p>
                    </div>
                    <div className="space-y-2 md:text-xl text-md text-right" data-aos="fade-left">
                        <p className="text-indigo-600 font-medium">លោក ភាស​ រយោម</p>
                        <p className="text-indigo-600 font-medium">លោកស្រី ភាស ចេញម៉ោម</p>
                    </div>
                </div>

                <div className="space-y-2 md:text-xl text-md py-6 px-4"  data-aos="fade-up">
                    <p className=" text-indigo-600 font-medium ">សម្តេច ទ្រង ឯកឧត្ដម អ្នកឧកញ៉ា ឧកញ៉ា លោកស្រី លោកជុំទាវ អ្នកនាងកញ្ញា សូមអញ្ចើញចូលរួមជាអធិបតី និងភ្ញាវកិត្តយល ដើម្បីប្រសិទភាពសិរីសួស្តី ជ័យមង្គល ក្នុងកម្មវីធី សិរីមង្គលអាពាពិពាហ៍ របស់ខ្ញុំ​។​</p>
                </div>

                <div className="grid grid-cols-3 py-14 px-4 justify-center items-center"  data-aos="zoom-in">
                    <div className="space-y-2 md:text-xl text-md text-center">
                        <p className=" text-indigo-600 font-medium">កូនប្រុសនាម</p>
                        <p className=" text-indigo-600 font-medium">មុត ណាគ្រី</p>
                    </div>
                    <img src="https://static.vecteezy.com/system/resources/previews/010/254/801/non_2x/nj-initial-wedding-monogram-logo-vector.jpg" alt="Wedding logo" />
                    <div className="space-y-2 md:text-xl text-md text-center" data-aos="zoom-in-up">
                        <p className="text-indigo-600 font-medium">កូនស្រីនាម</p>
                        <p className="text-indigo-600 font-medium">ម៉ែ មីអូន</p>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full py-8" data-aos="fade-up">
                    <div className="space-y-4 text-center">
                        <p className="md:text-4xl text-xl text-indigo-600 font-medium">ដែលនិងប្រព្រឹតទៅចាប់ពីម៉ោង ៤ ល្ងច</p>
                        <p className="md:text-4xl text-xl text-indigo-600 font-medium">ថ្ងៃអាទីត្យ ទី១ ខែមករា ឆ្នាំ២០២៥</p>

                        {/* Button that triggers the display of date */}
                        <button
                            className="text-sm flex items-center justify-center space-x-2 py-2 px-4 border border-blue-600 rounded-lg text-center text-blue-600 mx-auto"
                            onClick={handleButtonClick}
                        >
                            <span>កក់ទុកក្នុងប្រតិទិន</span>
                            <BsCalendarDateFill />
                        </button>

                        {/* Display the selected date */}
                        {selectedDate && (
                            <p className="mt-4 text-indigo-600">
                                 {selectedDate}
                            </p>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Detail;
