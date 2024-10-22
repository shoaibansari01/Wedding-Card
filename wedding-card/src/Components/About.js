import React from "react";
import couple from "../assets/couple.png";
import design from "../assets/desgin.png";
import left from "../assets/gold_left.png";
import right from "../assets/gold_right.png";

function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#EEE3BF] via-[#F4EBD2] to-[#EEE3BF] flex flex-col pt-32 items-center text-center p-4">
      <div className="mb-16">
        <h1 className="text-4xl font-cursive text-[#8B5A2B] mb-4">
          Insha Allah Nikah
        </h1>
        <p className="text-lg font-serif text-gray-800 mb-2">
          On Saturday, 12th November 2024 at 11:30 A.M.
        </p>
        <p className="text-lg font-serif text-gray-800 mb-2">
          Nikah at: <strong>Jama Masjid (Markaz) Nandgaon Dist. Nashik</strong>
        </p>
        <p className="text-lg font-serif text-gray-800 mb-2">
          Lunch at:{" "}
          <strong>Dolfin Ground, (Nutan Club) Nandgaon Dist. Nashik</strong>
        </p>
        <p className="text-lg font-serif text-gray-800 mt-6">
          Invite: <strong>Aqueel Md. Ayyub Ansari</strong>
        </p>
        <p className="text-lg font-serif text-gray-800">Relatives & Friends</p>
      </div>
      <img
        src={couple}
        alt="couple"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-10 w-[700px] h-auto"
      />
      <img
        src={design}
        alt="Design element"
        className="absolute bottom-0 w-full md:w-80"
      />
      <img
        src={left}
        alt="Left design element"
        className="absolute bottom-0 left-0 w-[150px] md:w-[300px] h-auto opacity-20"
      />
      <img
        src={right}
        alt="Right design element"
        className="absolute bottom-0 right-0 w-[150px] md:w-[300px] h-auto opacity-20"
      />
    </div>
  );
}

export default About;
