import React from "react";
import palmplate from "./assets/another/normal_palmplate.jpg";
import palmplate2 from "./assets/another/palmplate.jpg";
import two from "./assets/another/2.jpg";
import palmplate1 from "./assets/another/palmplate2.jpg";
import tutions from "./assets/another/tutions.jpg";
import drill from "./assets/another/drill.jpg";
import classes from "./assets/another/classes.jpg";
import yoga from "./assets/another/yoga.jpg";
import functions from "./assets/another/function.jpg";

const Academics = () => {
  const images = [
    {
      id: 1,
      url: palmplate,
    },
    {
      id: 2,
      url: palmplate2,
    },
    {
      id: 3,
      url: two,
    },
    {
      id: 4,
      url: palmplate1,
    },
    {
      id: 5,
      url: tutions,
    },
    {
      id: 6,
      url: yoga,
    },
    {
      id: 7,
      url: drill,
    },
    {
      id: 8,
      url: classes,
    },
    {
      id: 9,
      url: functions,
    },
  ];

  return (
    <div className="w-full" name="academics">
      <h1 className="underline  flex justify-center font-bold text-2xl">
        Our Academics
      </h1>
      <div className="flex flex-wrap items-center mx-6 sm:mx-10 md:mx-20 lg:mx-36">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt={`Academic Image ${image.id}`}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-96 h-auto xl:h-96 m-2 rounded-md" // Adjust the width based on screen size
            // Maintain aspect ratio and cover entire container
          />
        ))}
      </div>
    </div>
  );
};

export default Academics;
