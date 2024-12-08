"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import unique1 from "../assets/unique1.jpg";
import unique2 from "../assets/unique2.jpg";
import unique3 from "../assets/unique3.jpg";

const UniqueGiftSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-white py-12 px-6 md:px-24 mt-10">
      <div className="relative lg:w-[400px] hidden lg:block ">
        <Image
          className="absolute z-10 top-56 left-44 w-80 hover:translate-y-4  "
          src={unique2}
          alt="Gift box with ribbon"
          width={288}
          height={288}
        />

        <Image
          className="relative size-full"
          src={unique1}
          alt="Gift box with ribbon"
          width={288}
          height={288}
        />
      </div>

      <div className="max-w-[400px] mr-10  w-full flex flex-col items-center text-center lg:item-end  ">
        <Image
          className="relative w-[400px] "
          src={unique3}
          alt="Gift box with ribbon"
          width={288}
          height={288}
        />
        <h2 className="text-3xl md:text-4xl font-bold tracking-widest mb-6"> Our favourites</h2>
        <h4 className="text-xs tracking-widest text-gray-500 mb-4 text-wrap max-w-lg">
        Indulge your senses with our most beloved scented piece. Infused with a harmonious blend of fragrances, this candle delivers a captivating aroma that soothes the mind and lifts the spirit. The exquisite packaging and premium quality make it a perfect addition to your home or a thoughtful gift for someone special. Light it up and let the gentle scent fill your space, creating moments of peace and comfort.

            Treat yourself — you deserve it.
        </h4>
        <Button className=" text-white py-2 px-6 tracking-wide uppercase  flex  mx-auto">
          shop now
        </Button>
      </div>
    </section>
  );
};

export default UniqueGiftSection;
