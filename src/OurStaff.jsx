import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import one from "./assets/1.jpeg";
import two from "./assets/2.jpeg";
import three from "./assets/3.jpeg";
import four from "./assets/4.jpeg";
import five from "./assets/5.jpeg";

const images = [one, two, three, four, five];
const textContent = [
  " Sri RaviTeja",
  "Sri Mahesh",
  "Sri Nagarjuna",
  "Sri Venkatesh",
  "Sri Rajesh",
];
const textContent1 = [
  " History 3  years Exp",
  "Zoology 6 Years Exp",
  "Telugu 10 Years Exp",
  "Mathematics 4 Years Exp",
  "Physics 7 Years Exp",
];

const OurStaff = () => {
  const [index, setIndex] = useState(0);

  // Define the animation configuration
  const slideProps = useSpring({
    transform: `translateX(-${(100 / images.length) * index}%)`, // Slide horizontally
    config: { tension: 120, friction: 20 }, // Animation config
  });

  // Function to handle slide change
  const handleSlideChange = (nextIndex) => {
    setIndex(nextIndex);
  };

  // Auto play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Adjust autoplay speed here (3000 milliseconds = 3 seconds)

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(interval);
  }, [index]); // Include index in the dependency array

  return (
    <div className="w-full" name="staff">
      <h1 className="underline flex justify-center font-bold text-2xl">
        Our Beloved Staff
      </h1>
      <div className="relative overflow-hidden">
        <animated.div
          className="flex"
          style={{
            width: `${images.length * 100}%`,
            ...slideProps,
          }}
        >
          {images.map((image, i) => (
            <div key={i} className="w-full">
              <img
                src={image}
                alt={`Academic Image ${i}`}
                className="mx-auto"
              />
              <div className="text-center font-bold text-xl">
                {textContent[i]}
              </div>
              <div className="text-center font-semibold text-lg">
                {textContent1[i]}
              </div>
            </div>
          ))}
        </animated.div>
      </div>
      <div className="flex justify-center mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => handleSlideChange(i)}
            className={`w-3 h-3 bg-gray-400 rounded-full mx-2 ${
              index === i ? "bg-gray-800" : ""
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default OurStaff;
