"use client";
import { GREATING, JOB_TITLE, NAME } from "@/constants/app";
import Clock from "../Clock";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const title = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      title.current,
      { y: 300, opacity: 1 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" }
    );
  }, []);

  return (
    <section>
      <div>
        <h2 className="text-3xl font-semibold">{GREATING}</h2>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="uppercase font-bold text-8xl">{NAME}</h1>
        <div className="flex items-center">
          [ <Clock /> ]
          <span className="inline-block mx-2 h-[.1px] w-50 bg-black dark:bg-white"></span>
          <span className="text-2xl font-bold">{JOB_TITLE}</span>
        </div>
      </div>
      <div className="overflow-hidden h-63 relative mt-20">
        <h1
          ref={title}
          className="font-[dharma-bold] text-[21.6rem] absolute -top-29"
        >
          SAHIL VERMA
        </h1>
      </div>
    </section>
  );
}
