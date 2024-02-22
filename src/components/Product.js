import React from "react";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
const Product = () => {
  return (
    <div className="relative">
      <div className="z-10 bg-center bg-cover bg-no-repeat relative">
        <img
          src="assets/icons/bghero1.jpg"
          className="h-56 w-full object-cover"
          alt="Product"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className=" font-semibold text-4xl">Contact Us</h2>
            <ul className="m-0 p-0 list-none flex">
              <li>
                <a href="#" className=" pr-5 pl-4 text-lg">
                  Home
                </a>
              </li>
              <li className=" rotate-12">|</li>
              <li className=" pl-3 text-lg">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="mr-auto ml-auto block max-w-[920px] mt-10">
        <div className=" flex flex-col items-center justify-center">
          <span className="text-4xl">Contact us</span>
          <h2 className=" text-red-800 font-extrabold text-3xl ml-5 pb-5">
            Don't Hesitate To Contact Us
          </h2>
        </div>
        <div className="mx-auto max-w-screen-lg">
          <div className="flex  justify-between sm:flex-row xl:flex-row md:flex-row ">
            <div className="w-1/2 p-4 mb-10">
              {/* Content for first column */}
              <div className=" w-27 h-27  relative flex flex-wrap pb-9 flex-col justify-center bg-transparent">
                <div className=" flex h-auto w-auto border pt-4 p-35 m-35 hover:animate-bounceSlow transition-cubic-slow ">
                  <Phone className=" mt-4 rounded-1-full  m-8 h-8 w-8 hover:bg-red-800 transition ease-in-out hover:ease-in-out  " />
                  <div className=" flex-col ml-6">
                    <p className=" text-2xl ">Call / WhatsApp</p>
                    <span className="">+1 (347) 466-3991</span>
                  </div>
                </div>
              </div>
              <div className=" w-27 h-27 relative flex flex-wrap pb-7 flex-col justify-center bg-transparent">
                <div className=" flex h-auto w-auto border pt-4  p-35 m-35 hover:animate-bounceSlow transition-cubic-slow">
                  <Mail className=" mt-4 rounded-full  m-8 h-8 w-8 hover:bg-red-900 " />
                  <div className=" flex-col ml-6">
                    <p className=" text-2xl ">Mail Us</p>
                    <span className="">shivanandastrologer@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className=" w-27 h-27  relative flex flex-wrap flex-col justify-center bg-transparent">
                <div className=" flex h-auto w-auto border pt-4 p-35 m-35 hover:animate-bounceSlow transition-cubic-slow">
                  <MapPin className=" mt-4 rounded-full  m-8 h-8 w-8 hover:bg-red-900 " />
                  <div className=" flex-col ml-6">
                    <p className=" text-2xl ">Our Location</p>
                    <span className="">114 E Fordham Rd, Bronx, NY 10468</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 p-2">
              {/* Content for second column */}
              <div className=" border bg-transparent items-center justify-center p-10 bg-yellow-500 w-100% ">
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder=" Name"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone Number"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder=" Your Meassage..."
                      rows="4"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    ></textarea>
                  </div>
                  <div className="flex items-center border bg-white p-3">
                    <input
                      id="robot"
                      name="robot"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="robot"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      I'm not a robot
                    </label>
                    <img src="assets/icons/logo_48.png" className=" h-5 w-5 ml-12"/>
                  
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
