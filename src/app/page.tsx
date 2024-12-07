'use clint'
import React from "react";
import HeroSectio from "./components/homePage/heroSection/page";
import WeeklyBestSellers from "./components/homePage/weeklyBestSeller/page";


export default function Home() {
  return (
    <div>
      <HeroSectio/>
      <WeeklyBestSellers/>
    </div>
  );
}
