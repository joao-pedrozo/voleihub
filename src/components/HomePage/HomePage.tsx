import { Inter } from "next/font/google";
import Store from "./Store";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  const [currentTab, setCurrentTab] = useState("home");

  return (
    <main
      className={`flex flex-col items-center justify-between ${inter.className}`}
    >
      {currentTab === "store" && <Store />}
      {currentTab === "home" && (
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {/* Ball Section - Full width on first row */}
            <div className="bg-green-200 p-6 rounded-lg md:col-span-2">
              <h2 className="text-2xl font-bold mb-2">Ball</h2>
              <p className="mb-4">Top-notch balls ideal for champions</p>
              <img
                src="/images/c-thumb-1.jpg"
                alt="Ball Image"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            {/* Net Section */}
            <div className="bg-green-200 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">Net</h2>
              <p className="mb-4">Top range nets</p>
              <img
                src="/images/c-thumb-1.jpg"
                alt="Net Image"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            {/* Shoes Section */}
            <div className="bg-green-200 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">Shoes</h2>
              <p className="mb-4">Step into winners shoes</p>
              <img
                src="/images/c-thumb-1.jpg"
                alt="Shoes Image"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            {/* Kits Section - Full width on last row */}
            <div className="bg-green-200 p-6 rounded-lg md:col-span-2">
              <h2 className="text-2xl font-bold mb-2">Kits</h2>
              <p className="mb-4">
                Exceptional kits of every champion's dreams
              </p>
              <img
                src="/images/c-thumb-1.jpg"
                alt="Kits Image"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
