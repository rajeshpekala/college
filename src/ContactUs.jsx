import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full" name="contact">
      <h1 className="text-2xl font-bold underline flex justify-center mt-8">
        Contact US
      </h1>
      <div className="sm:flex sm:flex-col md:flex-row">
        <div className="w-full sm:w-1/2 md:w-1/3 mt-10 rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.2804867478935!2d84.22618667470984!3d18.606449766546305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c5391286c19fd%3A0x6bdd8133ef20151c!2sMOTHER%20TERESA%20Junior%20College!5e0!3m2!1sen!2sin!4v1713246290621!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="rounded-md m-2 w-80 xl:w-full"
          ></iframe>
        </div>

        <div name="contact" className="w-full sm:w-1/2 md:w-1/3 p-4">
          <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto">
            <div className="pb-8">
              <p className="py-6 text-xl font-bold">
                Get in Touch with me by submitting the form
              </p>
            </div>
            <div className="flex justify-center">
              <form
                action="https://getform.io/f/aab1d022-2e65-4ef7-be4b-2ad85f569284"
                method="POST"
                className="flex flex-col w-full"
              >
                <input
                  type="text"
                  name="name "
                  placeholder="Enter your Name"
                  className="p-2 bg-transparent border-2 border-black rounded-md text-white 
            focus:outline-none"
                />

                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email Address.."
                  className="p-2 bg-transparent border-2 border-black rounded-md text-white 
            focus:outline-none my-4"
                />
                <textarea
                  name="message"
                  rows="10"
                  placeholder="Enter Your Message here.."
                  className="p-2 bg-transparent border-2 border-black rounded-md text-white 
            focus:outline-none"
                ></textarea>

                <button
                  className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8
             mx-auto flex items-center rounded-md hover:scale-105 duration-200"
                >
                  Submit!
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 mt-12">
          <h1 className="text-xl font-bold">Address</h1>
          <h1 className="font-semibold">Mother Theresa Junior College</h1>
          <h1 className="font-semibold">Near Indira Gandhi Statue</h1>
          <h1 className="font-semibold">Tekkali</h1>
          <h1 className="font-semibold">532201</h1>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
