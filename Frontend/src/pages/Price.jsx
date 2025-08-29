import { ShieldCheck, RotateCcw, Clock, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function Price() {
    const navigate = useNavigate();

    const features = [
        {
            icon: <ShieldCheck className="w-10 h-10 text-cyan-500" />,
            title: "Secure payment",
            description: "Your payment will be processed over an SSL-encrypted connection.",
        },
        {
            icon: <RotateCcw className="w-10 h-10 text-cyan-500" />,
            title: "30 Day money-back guarantee",
            description: "Write to customer service within 30 days, for a full refund.",
        },
        {
            icon: <Clock className="w-10 h-10 text-cyan-500" />,
            title: "Customer service",
            description: "Get support within 24 hours",
        },
    ];

    const reasons = [
        "Create high-quality content in 70+ languages, carefully crafted and reviewed by native speakers and language experts",
        "Keep your learning experience add-free so you can focus on learning without distractions or unwanted tracking",
        "Support ongoing app development, allowing us to add new features, fix bugs, and make the app better every day",
    ];

    const plans = [
        {
            title: "Monthly payment of $14.99",
            price: "$3.75 USD per week",
            amount: 14.99,
        },
        {
            title: "Quarterly payment of $29.99",
            price: "$2.50 USD per week",
            amount: 29.99,
        },
        {
            title: "1 Annual payment of $79.99",
            price: "$1.54 USD per week",
            amount: 79.99,
        },
    ];

    const handleBuy = (plan) => {
        navigate("/payment", { state: { plan } });
    };

    // const testimonials = [
    //     {
    //         text: `This is an incredible app. I consider myself to be language-challenged (even in my native tongue, sometimes!), but the programmers have made this app fun, challenging, but possible. I don't plan on mastering Thai by any means, but this will help me understand and speak better if I have my way and get to visit someday! Thank you, Nepali Learn app developers for your time spent in creating this fun application!`,
    //         name: "Megan Kizer",
    //         rating: "5.0",
    //         image: "https://i.pravatar.cc/100?img=1",
    //     },
    //     {
    //         text: `I have used many apps for learning Thai. This one is my favorite, I love that it uses combinations of learning styles. Sentence structures, reading, writing and listening. It also keeps me entertained!!`,
    //         name: "James Rowland",
    //         rating: "4.8",
    //         image: "https://i.pravatar.cc/100?img=2",
    //     },
    //     {
    //         text: `Very Good For Beginners! I wanted to learn Thai very long ago, I was finding an app and to my surprise I found one! This is the best app for beginners! Keep up the good work to the creator/s of this app!`,
    //         name: "Rodney piliin",
    //         rating: "4.9",
    //         image: "https://i.pravatar.cc/100?img=3",
    //     },
    // ];

    // const [currentIndex, setCurrentIndex] = useState(0);

    // const prevSlide = () => {
    //     setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    // };

    // const nextSlide = () => {
    //     setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    // };

    return (
        <div>
            <div className="bg-[#76C6FF] min-h-screen py-16 px-4">
                <h1 className="text-4xl font-bold text-center text-black mb-12">
                    Compare Pricing Plans
                </h1>

                <div className="max-w-3xl mx-auto space-y-6">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="bg-white text-black rounded-2xl p-6 flex justify-between items-center shadow-md"
                        >
                            <div>
                                <p className="text-base font-medium">{plan.title}</p>
                                <p className="text-2xl font-bold mt-2">{plan.price}</p>
                            </div>
                            <button
                                className="bg-[#133251] hover:bg-[#0f2a42] text-white text-lg font-semibold px-6 py-3 rounded-full"
                                onClick={() => handleBuy(plan)}
                            >
                                Buy now
                            </button>
                        </div>
                    ))}
                </div>
            </div>


            <div className="bg-white py-16 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
                    {features.map((item, index) => (
                        <div key={index} className="flex flex-col items-center space-y-4">
                            <div className="bg-cyan-100 p-4 rounded-full">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="text-gray-600 max-w-xs">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>



            <div className="bg-[#f2f8fd] py-16 px-4 text-center text-black">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Why Isn't the Learn Nepali App Free?
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg mb-10">
                        At NP, language learning is fun, easy, and effective – but also
                        respective of your time and privacy. Many apps rely on ads or
                        low-quality content to fuel their efforts, but Ling takes a different
                        approach.
                    </p>

                    <h3 className="text-xl sm:text-2xl font-semibold mb-6">
                        By subscribing, you're helping us:
                    </h3>

                    <div className="grid gap-6 md:grid-cols-3">
                        {reasons.map((text, index) => (
                            <div
                                key={index}
                                className="border-2 border-cyan-400 rounded-xl p-6 text-base sm:text-lg text-gray-800"
                            >
                                {text}
                            </div>
                        ))}
                    </div>

                    <p className="mt-10 text-base sm:text-lg text-gray-700">
                        Your subscription directly supports our team, and we thank you for
                        learning with us!
                    </p>
                </div>
            </div>

            {/* <div className="bg-[#FEC925] py-16 px-4">
                <div className="max-w-4xl mx-auto text-center text-black">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">
                        What Our Learners Say About <br /> Language Learning with Learn Nepali
                    </h2>

                    <div className="relative flex justify-center items-center">
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 text-black p-2 hover:bg-cyan-300 rounded-full"
                        >
                            <ChevronLeft size={32} />
                        </button>

                        <div className="bg-white rounded-3xl p-6 text-left w-full max-w-xl mx-12 shadow-lg transition duration-300 ease-in-out">
                            <Quote className="text-cyan-500 w-6 h-6 mb-4" />
                            <p className="text-gray-800 mb-6">{testimonials[currentIndex].text}</p>
                            <div className="flex items-center gap-3 mt-auto">
                                <img
                                    src={testimonials[currentIndex].image}
                                    alt={testimonials[currentIndex].name}
                                    className="w-10 h-10 rounded-full object-cover border-2 border-cyan-500"
                                />
                                <div>
                                    <p className="font-bold">{testimonials[currentIndex].name}</p>
                                    <p className="text-sm text-cyan-700">⭐ {testimonials[currentIndex].rating}</p>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={nextSlide}
                            className="absolute right-0 text-black p-2 hover:bg-cyan-300 rounded-full"
                        >
                            <ChevronRight size={32} />
                        </button>
                    </div>
                </div> 
            </div> */}



        </div>
    );
}
