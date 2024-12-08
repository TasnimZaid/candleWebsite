'use clint'
import React from "react";
import HeroSectio from "../heroSection/page";
import WeeklyBestSellers from "../weeklyBestSeller/page";
import UniqueGiftSection from "../uniqueGiftSection/page";
import InfiniteSlider from "../infiniteSlider/page";
import ShopByCategory from "../shopWithCategory/page";
import Footer from "@/components/footer/page";
import NavBar from "@/components/navBar/page";

export default function HomePage() {
  return (
    <div>
       <NavBar/>
      <HeroSectio/>
      <WeeklyBestSellers/>
      <UniqueGiftSection/>
      <ShopByCategory/>
      <InfiniteSlider/>
      <Footer/>
    </div>
  );
}
