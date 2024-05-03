import yoga from "./assets/another/yoga.jpg";
import management from "./assets/another/management.jpg";
import principal from "./assets/another/principal.jpg";
import functions from "./assets/another/function.jpg";

const AboutUs = () => {
  return (
    <div className="mt-14  w-full" name="about">
      <h1 className="underline  flex justify-center font-bold text-2xl ">
        About Us
      </h1>
      <h2 className="font-semibold text-xl mt-4 mx-2">
        Welcome to{" "}
        <span className="underline text-xl ">
          Sai Vineeth Institutions
        </span>
        , where academic excellence meets vibrant campus life. Founded on a
        bedrock of innovation and inclusivity, Mother Theresa Educational
        Socities is dedicated to nurturing intellectual curiosity, fostering
        personal growth, and preparing students to thrive in an ever-changing
        world. At Mother Theresa Educational Socities, our commitment to
        excellence is reflected in our diverse array of programs spanning the
        arts, sciences, humanities, and professional fields. Whether you're
        exploring the frontiers of scientific research, honing your artistic
        talents, or preparing for a career in business or technology, you'll
        find the resources and support you need to succeed.
      </h2>
      
      <div className="flex items-center flex-col mt-10">
        <img src={management} className="rounded-lg w-96 h-72" />
        <h2 className="text-lg font-bold">Our Beloved </h2>
        <span className="text-xl font-bold">Management</span>
      </div>

      <div className="flex items-center flex-col mt-2">
        <img src={principal} className="rounded-lg w-80 h-72 " />
        <h2 className="text-lg font-bold">Our Beloved Principal</h2>
        <span className="text-xl font-bold">Annepu Kailasha Rao</span>
      </div>
      <h1 className="font-bold text-2xl ml-10 mt-5" name="facilities">Facilities We provide</h1>

      <ul className="text-xl font-semibold ml-10 xl:flex xl:flex-row flex flex-col items-center">
        <div className="m-4 w-full md:w-1/2 lg:w-1/4">
          <img
            className="rounded-lg max-w-full h-64"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLXTRryTpwgOzIaHm71JQk678W92lAAafrBw&usqp=CAU"
            alt="Experienced Faculty"
          />
          <li className="m-1">Experienced Faculty</li>
        </div>
        <div className="m-4 w-full md:w-1/2 lg:w-1/4">
          <img
            className="rounded-lg max-w-full h-64"
            src={yoga}
            alt="Yoga Classes"
          />
          <li className="m-1">Yoga Classes</li>
        </div>
        <div className="m-4 w-full md:w-1/2 lg:w-1/4">
          <img
            className="rounded-lg max-w-full h-64"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHYF_Z6QXU5a4d-rC3X5TI-5_tZz_C5rBmrA&usqp=CAU"
            alt="School Buses"
          />
          <li className="m-1">School Buses</li>
        </div>
        <div className="m-4 w-full md:w-1/2 lg:w-1/4">
          <img
            className="rounded-lg max-w-full h-64"
            src={functions}
            alt="Extra Curricular Activities"
          />
          <li className="m-1">Extra Curricular Activities</li>
        </div>
      </ul>
    </div>
  );
};

export default AboutUs;
