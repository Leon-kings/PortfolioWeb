import React from "react";
import { Hero } from "../../components/hero/Hero";
import { About } from "../about/About";
import { Services } from "../services/Services";
import { Experience } from "../experience/Experience";
import { Portfolio } from "../../components/portfolio/Portfolio";

export default function Home() {
  return (
    <>
      <div className="w-full text-black">
        <Hero />
        {/* <About /> */}
        {/* <Services />
        <Experience />
        <Portfolio /> */}
      </div>
    </>
  );
}
