import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Carucel from "./Carucel";
import Detail from "./Detail";
import Gallery from "./Gallery";
import Location from "./Location";
import TimeWedding from "./TimeWedding";
import ImageDes from "./ImageDes";
export default function App() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 100,
            once: false,
        });
    }, []);
    return (
        <div>
            <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWGjmjS1YXRFB11MgV1A59cJJ9VXxduHtorA&s')] bg-cover bg-center text-white flex justify-center min-h-screen text-center">
                <div className="space-y-0 relative overflow-hidden">
                    <div data-aos="fade-up">
                        <div className="py-16 space-y-2">
                            <p className="text-orange-500 text-4xl font-extrabold whitespace-nowrap">
                                The Wedding Day
                            </p>
                            <p className="text-orange-500 text-xl font-semibold">
                                អបអសាទរជាមួយយើង
                            </p>
                        </div>
                        <div className="space-y-5">
                            <h2 className="text-orange-500 text-4xl font-KhmerMoul">
                                មុត ណាគ្រី
                            </h2>
                            <span className="text-orange-500 text-xl font-semibold">
                                &
                            </span>
                            <h2 className="text-orange-500 text-4xl font-KhmerMoul">
                                Mut Nakry
                            </h2>
                        </div>
                        <div className="py-8">
                            <p className="text-orange-500 text-2xl font-extrabold">
                                ១ មករា ២០២៥
                            </p>
                            <p className="text-orange-500 text-xl font-semibold pt-5">
                                <span className="sticker">💖💖</span> សូមគោរពអញ្ជើញ
                                <span className="sticker">💖💖</span>
                            </p>
                        </div>
                    </div>
                    <div className="absolute right-0" data-aos="flip-left">
                        <img
                            src="https://img.freepik.com/free-psd/beautiful-bride-groom-portrait-isolated_23-2151590620.jpg"
                            alt="Happy Couple"
                            className="h-72"
                        />
                    </div>
                </div>
            </div>

            <div>
                <Detail />
            </div>
            <div className="items-center justify-center flex w-full pb-4">
                <p className="md:text-4xl text-xl text-indigo-600 font-KhmerMoul">វិចិត្រសាល</p>
            </div>

            <div>
                <Carucel />
            </div>
            <div>
                <TimeWedding />
            </div>
            <div>
                <ImageDes />
            </div>
            <div>
                <Gallery />
            </div>
            <div>
                <Location />
            </div>

            <div className="items-center justify-center flex w-full pb-4"> 
                <p className="md:text-4xl text-xl text-indigo-600 font-KhmerMoul">ស៊ីការកុំផ្លិចចងដៃ</p>
            </div>
        </div>
    );
}
