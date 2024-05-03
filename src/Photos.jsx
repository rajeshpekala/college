import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import seven from "./assets/seven.avif";
import eight from "./assets/eight.avif";
import nine from "./assets/nine.avif";
import tutions from "./assets/another/tutions.jpg";
import drill from "./assets/another/drill.jpg";
import classes from "./assets/another/classes.jpg";
import yoga from "./assets/another/yoga.jpg";
import functions from "./assets/another/function.jpg";


const images = [seven, eight, nine,yoga,tutions,drill,classes,functions];

const Photos = () => {
  const [index, setIndex] = useState(0);

  // Define the animation configuration
  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  // Auto play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1600); // Adjust autoplay speed here (1600 milliseconds = 1.6 seconds)

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div name="home" className="w-full">
      {images.map((image, i) => (
        <animated.img
          key={i}
          src={image}
          alt={`Academic Image ${i}`}
          className="w-full h-96"
          style={{
            ...springProps,
            display: i === index ? "block" : "none",
          }}
        />
      ))}
    </div>
  );
};

export default Photos;
