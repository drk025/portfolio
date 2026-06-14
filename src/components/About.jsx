import React from "react";
import UserImg from "../assets/my photo.jpg";

export default function About() {
  return (
    <section id="about" className="bg-warm-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-terracotta font-semibold tracking-widest uppercase text-sm mb-2">
            Who I am
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-brown-warm">
            About
          </h2>
          <div className="w-16 h-1 bg-terracotta rounded-full mt-3" />
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-warm-300 rounded-2xl rotate-3 opacity-50" />
              <img
                src={UserImg}
                alt="Dansuram Koirala"
                className="relative w-52 h-52 lg:w-64 lg:h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-brown-warm">
                Dansuram Koirala
              </h3>
              <p className="text-brown-light mt-1">
                Masters Degree in Chemistry — Tribhuvan University
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-warm-100">
                <div className="text-terracotta font-semibold mb-1">
                  Head of Department
                </div>
                <div className="text-brown-light text-sm">
                  Department of Chemistry
                </div>
                <div className="text-brown-warm font-medium">
                  St. Lawrence College
                </div>
                <div className="text-brown-light text-sm">
                  Chabahil, Kathmandu
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-warm-100">
                <div className="text-terracotta font-semibold mb-1">
                  Lecturer
                </div>
                <div className="text-brown-light text-sm">
                  Department of Chemistry
                </div>
                <div className="text-brown-warm font-medium">
                  WhiteField Int'l College
                </div>
                <div className="text-brown-light text-sm">
                  Nayabazaar, Kathmandu
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
