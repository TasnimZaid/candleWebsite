"use client";
import React from "react";
import Image from "next/image";
import uu from '../assets/unique1.jpg'

// Category data array
const categories = [
  {
    name: "CANDLE",
    imageSrc: uu, 
    alt: "Body Care Products",
  },
  {
    name: "GIFTS",
    imageSrc: uu,
    alt: "Candles",
  },
  {
    name: "WALLFLOWERS",
    imageSrc: uu,
    alt: "Wallflowers",
  },
  {
    name: "HAND SOAPS",
    imageSrc: uu,
    alt: "Hand Soaps",
  },
  {
    name: "WELLNESS",
    imageSrc: uu,
    alt: "Wellness Products",
  },
  {
    name: "MEN'S BODY CARE",
    imageSrc: uu,
    alt: "Men's Body Care",
  },
];

const ShopByCategory = () => {
  return (
    <section className="py-12 mt-20">
      <h2 className="text-center text-2xl font-bold mb-8 tracking-wider">
        SHOP BY CATEGORY
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 px-4 md:px-16">
        {categories.map((category) => (
          <div key={category.name} className="text-center">
            <div className="relative w-full h-48 sm:h-56 md:h-64">
              <Image
                src={category.imageSrc}
                alt={category.alt}
                layout="fill"
                objectFit="contain"
                className="rounded-md"
              />
            </div>
            <p className="mt-4 text-sm font-medium uppercase tracking-wider">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;
