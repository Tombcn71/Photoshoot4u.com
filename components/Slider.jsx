
"use client"
import React, { useState } from 'react';

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { image: 'image1.jpg' },
        { image: 'image2.jpg' },
        { image: 'image3.jpg' },
        // Add more slides as needed
    ];

    const handlePrevClick = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    const handleNextClick = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-full h-full relative">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute top-0 left-0 w-full h-full bg-cover bg-center ${index === currentSlide ? '' : 'hidden'
                                    }`}
                                style={{ backgroundImage: `url(${slide.image})` }}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full flex justify-center mb-4">
                <button className="bg-white py-2 px-4 text-gray-700 hover:bg-gray-100" onClick={handlePrevClick}>
                    Prev
                </button>
                <button className="bg-white py-2 px-4 text-gray-700 hover:bg-gray-100 ml-4" onClick={handleNextClick}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Slider;
