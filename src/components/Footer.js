import React from "react";
import { ChevronRight, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-red-950"
      style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}
    >
      <div className="container mx-auto py-8 mb-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="px-4">
            <h1 className="text-yellow-600">About Astrologer</h1>
            <div className="text-yellow-600">
              <p className=" text-white">
                As a leading and famous Indian astrologer in New York, USA,
                Shivanand ji offers reliable and practical astrology solutions
                to all life problems. He is a professional and well-educated
                Indian Vedic astrologer, with years of experience in the field
                of astrology.
              </p>
              <p className=" flex items-center">
                <ChevronRight className="pr-2 text-white" />
                <span className=" text-white ">Terms and Conditions</span>
              </p>
              <p className=" flex items-center">
                <ChevronRight className="pr-2 text-white" />
                <span className=" text-white">Privacy Policy</span>
              </p>
            </div>
          </div>
          <div className="px-4">
            <h1 className="text-yellow-600">Best Solutions</h1>
            <div className="text-white">
              <p className=" flex items-center">
                <ChevronRight className="pr-2" />
                <span>Black Magic Removal and Protection</span>
              </p>
              <p className=" flex items-center">
                <ChevronRight className="pr-2" />
                <span>Jobs and Business Protection</span>
              </p>
              <p className=" flex items-center">
                <ChevronRight className="pr-2" />
                <span>Negative Energy Removal and Protection</span>
              </p>
              <p className=" flex items-center">
                <ChevronRight className="pr-2" />
                <span>Marriage Related Problem</span>
              </p>
              <p className=" flex items-center">
                <ChevronRight className="pr-2" />
                <span>Stop Divorce And Separation</span>
              </p>
              <p className=" flex items-center">
                <ChevronRight className="pr-2" />
                <span>Return Lost Love Spell</span>
              </p>
              <p className=" flex items-center">
                <ChevronRight className="pr-2" />
                <span>Family Problems</span>
              </p>
            </div>
          </div>
          <div className="px-4">
            <div className="text-white">
              <h1 className="text-yellow-600">Our Services</h1>
              <p className=" flex items-center">
                <ChevronRight className="pr-2" />
                <span>Palm Reading</span>
              </p>
              <p className=" flex items-center">
                <ChevronRight className="pr-2" />
                <span>Psychic Reading</span>
              </p>
              <p className=" flex items-center">
                <ChevronRight className="pr-2" />
                <span>Spiritual Healing</span>
              </p>
              <p className=" flex items-center">
                <ChevronRight className="pr-2" />
                <span>Recover Love</span>
              </p>
              <p className=" flex items-center">
                <ChevronRight className="pr-2" />
                <span>Get Your Ex. Love Back</span>
              </p>
              <p className=" flex items-center">
                <ChevronRight className="pr-2" />
                <span>Horoscope Reading</span>
              </p>
              <p className=" flex items-center">
                <ChevronRight className="pr-2" />
                <span>Numerology</span>
              </p>
            </div>
          </div>
          <div className="px-4 text-white">
            <h1 className="text-yellow-600">Contact Us</h1>
            <div className="flex items-center">
              <MapPin className="text-yellow-500 mr-2" />
              <p className="text-white">Location</p>
            </div>
            <span className="text-white">
              114 E Fordham Rd, Bronx, NY 10468
            </span>
            <div className="flex items-center">
              <Mail className="text-yellow-500 mr-2" />
              <p className="text-white">Email</p>
            </div>
            <span className="text-white">Shivanandastrologer@gmail.com</span>

            <div className="flex items-center">
              <Phone className="text-yellow-500 mr-2" />
              <p className="text-white">Phone</p>
            </div>
            <span className="text-white">+1(347)466-3991</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
