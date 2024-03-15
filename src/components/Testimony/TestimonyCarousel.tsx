import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonies = [
  {
    name: "Omos George",
    subject: "God's Grace",
    context:
      "I thank the Lord for His abundant grace in my life. Through the prayers of this church, I have experienced His miraculous healing.",
  },
  {
    name: "Jane Doe",
    subject: "Divine Guidance",
    context:
      "God led me to this church, and I have found a family here. The sermons have touched my heart, and I am grateful for the spiritual growth I've experienced.",
  },
  {
    name: "John Smith",
    subject: "Prayer Answered",
    context:
      "I asked for prayers for my family, and God answered in ways I couldn't have imagined. Thank you to this church for standing with me in faith.",
  },
  {
    name: "Emily Johnson",
    subject: "Faith Strengthened",
    context:
      "My faith was wavering, but through the worship and fellowship here, I have been uplifted. God's presence is truly felt in this place.",
  },
];

const TestimonyCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = () => {
    const newIndex =
      currentIndex === 0 ? Testimonies.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex =
      currentIndex === Testimonies.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="bg-gray-100/50 py-6 mb-16 relative ">
        {/* circle */}
        <div className="h-[203px] w-[203px] bg-green-700 rounded-full absolute md:left-20"></div>

        <div className="md:w-[60%] w-[80%] mx-auto my-10 md:my-12 relative">
          {Testimonies.map((testimony, index) => (
            <div
              key={index}
              className={`${
                index === currentIndex ? "block shadow-lg" : "hidden"
              } px-4 md:px-10 py-10 flex flex-col space-y-5 items-center text-center text-gray-500 bg-white`}
            >
              <p className="text-m md:w-[70%] font-light">
                {testimony.context}
              </p>
              <h3 className="text-gray-600 font-bold">{testimony.name}</h3>
            </div>
          ))}
        </div>

        <div className="wrap bottom-3 right-[40%] md:right-[46%] absolute flex space-x-3">
          <div
            className="border-2 px-1 py-1 bg-green-700  group hover:scale-105 transition-all duration-75  h-[30px] w-[30px]  flex items-center  justify-center rounded-full group cursor-pointer"
            onClick={prevSlide}
          >
            <IoIosArrowBack className=" text-sm text-white group-hover:scale-105 transition-all duration-75" />
          </div>

          <div
            className="border-2 px-1 py-1 bg-green-700 group hover:scale-105 transition-all duration-75  h-[30px] w-[30px]  flex items-center  justify-center rounded-full group cursor-pointer"
            onClick={nextSlide}
          >
            <IoIosArrowForward className=" text-sm text-white group-hover:scale-105 transition-all duration-75" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonyCarousel;
