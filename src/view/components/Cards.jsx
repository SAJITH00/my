import React from 'react';
import { Card } from "flowbite-react";

function Cards() {
  return (
    <div>
      <Card className="max-w-sm p-0 overflow-hidden"> {/* Remove padding from Card */}
        {/* Image Container - Match card width */}
        <div className="w-full h-55 overflow-hidden"> {/* Fixed height */}
          <img
            src="https://img.freepik.com/free-photo/stack-multicolored-books-table_23-2148204799.jpg?semt=ais_hybrid&w=740"
            alt="Apple Watch Series 7 in colors pink, silver, and black"
            className="w-full h-full object-cover" // Fills container
          />
        </div>
        
        {/* Card Content - Add padding here instead */}
        <div className="pt-2 pb-3 px-3"> {/* Padding inside content area */}
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
            </h5>
          </a>
          
          {/* Rating Section */}
          <div className="mb-5 mt-2.5 flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
              5.0
            </span>
          </div>
          
          {/* Price and Add to Cart */}
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
            <a
              href="#"
              className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </Card>        
    </div>
  );
}

export default Cards;