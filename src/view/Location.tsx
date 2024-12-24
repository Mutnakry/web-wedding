import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import QR from '../assets/image.png'

const Location: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 100,
            once: false,
        });
    }, []);

    return (
        <div>
            {/* Location Section */}
            <div className="max-w-screen-lg mx-auto md:py-12 py-6">
                <div className="items-center justify-center flex w-full mb-6">
                    <p className="md:text-4xl text-xl text-indigo-600 font-black">
                        ផែនទី
                    </p>
                </div>
                <div className="relative w-full" data-aos="fade-up">
                    <a
                        href="https://www.google.com/maps?q=13.593179999071735,103.08018100950827" // Google Maps link
                        target="_blank" // Open in new tab
                        rel="noopener noreferrer" // Security for opening external links
                    >
                        {/* <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d535172.204315719!2d103.08018100950827!3d13.593179999071735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311017c59dc877d3%3A0x987aa918f4f42d43!2z4Z6f4Z694Z6T4Z6a4Z674Z6A4Z-S4Z6B4Z6H4Z624Z6P4Z634Z6i4Z6E4Z-S4Z6C4Z6a!5e1!3m2!1skm!2sus!4v1734964911594!5m2!1skm!2sus"
                            width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe> */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7816.914422969655!2d104.90931665719125!3d11.590716730304038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109522c5a83ff8d%3A0x8d7a9b53236beb4f!2z4Z6c4Z634Z6Y4Z624Z6T4Z6W4Z634Z6X4Z6W4Z6Q4Z-S4Z6Y4Z64IOGen-GfguGek-Gen-Geu-GegQ!5e0!3m2!1skm!2sus!4v1735008321579!5m2!1skm!2sus"
                            width="100%" height="450" style={{ border: 0 }} loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62533.934431051406!2d104.888676!3d11.596884!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dbc9e3b59%3A0x38292b60e41fe526!2sOne%20Kitchen!5e0!3m2!1skm!2sus!4v1735008501711!5m2!1skm!2sus" ></iframe>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15633.483607762852!2d104.888676!3d11.596884!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109522c5a83ff8d%3A0x8d7a9b53236beb4f!2z4Z6c4Z634Z6Y4Z624Z6T4Z6W4Z634Z6X4Z6W4Z6Q4Z-S4Z6Y4Z64IOGen-GfguGek-Gen-Geu-GegQ!5e0!3m2!1skm!2sus!4v1735008409214!5m2!1skm!2sus"></iframe>
                    </a>
                </div>
                <div className="p-12 flex justify-center items-center">
                    <div className="text-center p-2 border">
                        <p className="md:text-4xl text-xl text-indigo-600 font-medium">ចងដៃនៅទីនេះ</p>
                        <img src={QR} alt="QR Code" />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Location;
