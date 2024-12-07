'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Rochester } from 'next/font/google';

const rochester = Rochester({
    weight: '400',  
    subsets: ['latin'],
  });

const WeeklyBestSellers = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="bg-white py-8 px-4 sm:px-6 lg:px-8 mt-20">
<h2 className={`${rochester.className} text-4xl font-bold text-gray-900 mb-10 flex justify-center`}>
                Weekly Best Sellers
            </h2>            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* Can Candle */}


                <div className="p-2 rounded-sm border w-70 shadow-sm group">
      <div 
        className="h-96 w-full overflow-hidden flex items-center justify-center relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="https://i.pinimg.com/736x/62/14/7b/62147b3bbb2e9dbea370ae14fcaa7680.jpg"
          alt="Can Candle"
          className={`object-cover w-full h-full rounded-t-lg absolute top-0 left-0 transition-opacity duration-500 
            ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          src="https://i.pinimg.com/736x/83/a7/9c/83a79c1c2dbe69cc40220aa975539132.jpg"
          alt="Can Candle Alternative"
          className={`object-cover w-full h-full rounded-t-lg absolute top-0 left-0 transition-opacity duration-500 
            ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Can Candle</h3>
        <p className="text-gray-700">Fragrances, Incense, Packaging</p>
        <p className="text-gray-900 font-bold text-lg mt-4">$20.00</p>
        <Button className="w-full mt-2">
          Add to Cart
        </Button>
      </div>
    </div>

                {/* Wood Candle */}
                <div className="p-2 rounded-lg border w-70 shadow-lg">
                    <div className="h-96 w-full overflow-hidden flex items-center justify-center">
                        <img
                            src="https://i.pinimg.com/736x/57/35/b9/5735b959bda03e03fc094936655a2f48.jpg"
                            alt="Can Candle"
                            className="object-cover w-full h-full rounded-t-lg"
                        />
                    </div>
                    <div className="mt-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Can Candle</h3>
                        <p className="text-gray-700">Fragrances, Incense, Packaging</p>
                        <p className="text-gray-900 font-bold text-lg mt-4">$20.00</p>
                        <Button className="w-full mt-2">
                            Add to Cart
                        </Button>
                    </div>
                </div>

                {/* Gift Candle */}
                <div className="p-2 rounded-lg border w-70 shadow-lg">
                    <div className="h-96 w-full overflow-hidden flex items-center justify-center">
                        <img
                            src="https://i.pinimg.com/736x/67/9f/44/679f44306513891af1c78d6a7b62daeb.jpg"
                            alt="Can Candle"
                            className="object-cover w-full h-full rounded-t-lg"
                        />
                    </div>
                    <div className="mt-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Can Candle</h3>
                        <p className="text-gray-700">Fragrances, Incense, Packaging</p>
                        <p className="text-gray-900 font-bold text-lg mt-4">$20.00</p>
                        <Button className="w-full mt-2">
                            Add to Cart
                        </Button>
                    </div>
                </div>

                {/* Dream Candle */}
                <div className="p-2 rounded-lg border w-70 shadow-lg">
                    <div className="h-96 w-full overflow-hidden flex items-center justify-center">
                        <img
                            src="https://i.pinimg.com/736x/ef/c0/a2/efc0a2aea226f10a0fd584ceac2d68fc.jpg"
                            alt="Can Candle"
                            className="object-cover w-full h-full rounded-t-lg"
                        />
                    </div>
                    <div className="mt-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Can Candle</h3>
                        <p className="text-gray-700">Fragrances, Incense, Packaging</p>
                        <p className="text-gray-900 font-bold text-lg mt-4">$20.00</p>
                        <Button className="w-full mt-2">
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WeeklyBestSellers;