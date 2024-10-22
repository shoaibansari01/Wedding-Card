import React from "react";
import bgVideo from "../assets/bg.mp4";
import bis from "../assets/bis.png";
import design from "../assets/desgin.png";
import weds from "../assets/weds.png";
import islamCouple from "../assets/islamic-couple.png";

import "./styles.css"; // Importing the CSS file

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative min-h-screen bg-gradient-to-r from-[#EEE3BF] via-[#F4EBD2] to-[#EEE3BF] flex flex-col pt-20 sm:pt-32 items-center text-center p-4">
        {/* Background Video Container */}
        <div className="absolute inset-0 w-full h-full z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="bg-video"
            poster={bis}
          >
            <source src={bgVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content Over Video */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 py-6">
          <img
            src={bis}
            alt="BIS Logo"
            className="w-24 sm:w-32 md:w-48 h-auto mt-4"
          />
          <h1 className="text-orange-950 text-lg sm:text-2xl md:text-3xl font-bold mt-3">
            Mr. & Mrs. Aqueel Md. Ayyub Ansari & Family
          </h1>

          <p className="text-orange-800 text-sm sm:text-base mt-2 max-w-sm">
            Request the pleasure of your company with family & relatives on the
            auspicious occasion of the wedding ceremony of their daughter:
          </p>

          <div className="flex justify-center items-center mt-3">
            <img
              src={design}
              alt="Design element"
              className="w-40 sm:w-56 md:w-72"
            />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row justify-between w-full max-w-xl text-center">
            <div className="flex flex-col items-center mb-4">
              <h1 className="text-3xl font-cursive text-[#8B5A2B]">Firdous</h1>
              <p className="text-sm text-orange-800 mt-2">
                D/o. Aqueel Md. Ayyub Ansari, Nandgaon (Nashik)
              </p>
            </div>

            <img src={weds} alt="weds" className="w-24 my-3 mx-auto" />

            <div className="flex flex-col items-center mt-4">
              <h1 className="text-3xl font-cursive text-[#8B5A2B]">Ahtesham</h1>
              <p className="text-sm text-orange-800 mt-2">
                S/o. Haji Ab. Rasheed Ab. Hameed, Aurangabad
              </p>
            </div>
          </div>
        </div>

        {/* Second Page */}
        <div className="relative min-h-[90vh] flex flex-col items-center text-center p-4 mt-10 sm:mt-16">
          <div className="max-w-lg mx-auto mb-8">
            <h1 className="text-3xl font-cursive text-[#8B5A2B] mb-4">
              Insha Allah Nikah
            </h1>
            <p className="text-sm font-serif text-gray-800">
              On Saturday, 12th November 2024 at 11:30 A.M.
            </p>
            <p className="text-sm font-serif text-gray-800 mt-2">
              Nikah at:{" "}
              <strong>Jama Masjid (Markaz) Nandgaon Dist. Nashik</strong>
            </p>
            <p className="text-sm font-serif text-gray-800 mt-2">
              Lunch at:{" "}
              <strong>Dolfin Ground, (Nutan Club) Nandgaon Dist. Nashik</strong>
            </p>
            <p className="text-sm font-serif text-gray-800 mt-4">
              Invite: <strong>Aqueel Md. Ayyub Ansari</strong>
            </p>
            <p className="text-sm font-serif text-gray-800">
              Relatives & Friends
            </p>
          </div>

          <img
            src={islamCouple}
            alt="couple"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-25 w-full max-w-[500px]"
          />
          <img
            src={design}
            alt="Design element"
            className="absolute bottom-0 w-full max-w-[150px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
