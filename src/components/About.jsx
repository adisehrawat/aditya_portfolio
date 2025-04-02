import React, { useState } from "react";
import FadeInSection from "./FadeInSection";
import MovingComponent from "react-moving-text";
import "../css/About.css";
const About = () => {
  const [activeKey, setActiveKey] = useState("1");

  const one = (
    <p className="font-ntr text-gray-300 xl:text-2.5xl md:text-1.5xl sm:text-xl text-justify">
      I am currently a <b>Student at VIT Chennai</b>, learning Blockchain Stack
      using rust. At the same time, I am also working with some more tech
      stacks.
    </p>
  );

  const two = (
    <p className="font-ntr text-gray-300 text-2.5xl sm:text-xl text-justify py-5">
      Outside of work, I'm interested in drawing and foundations of Mathematics.
      I also play a lot of video games.
    </p>
  );

  const tech_stack = [
    "Javascript",
    "React.js",
    "Rust",
    "Java",
    "BlockChain",
    "Solana",
    "C/C++",
  ];

  return (
    <div
      id="about"
      className="flex items-center justify-center min-h-screen mx-auto pt-[100px] px-5 sm:px-6 "
    >
      <FadeInSection>
        <div className="section-header mb-6">
          <span className="section-title text-red-500 xl:text-3xl md:text-2.5xl sm:text-3xl text-2xl">
            / about me
          </span>
        </div>

        <div className="about-content flex flex-row flex-wrap sm:flex-nowrap">
          <div className="about-description max-w-[600px]">
            {one}
            <p className="pt-5 xl:text-2.5xl md:text-1.5xl sm:text-xl text-gray-300">
              Here are some technologies I have been working with:
            </p>
            <ul className="pt-5 list-none grid grid-cols-2 gap-y-2">
              {tech_stack.map((tech_item, i) => (
                <FadeInSection key={i} delay={`${i + 1}00ms`}>
                  <MovingComponent
                    type="fadeInFromBottom"
                    duration="1000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none"
                  >
                    <li className="relative pl-5 text-lg text-gray-300 before:content-['▹'] before:text-green-bright before:absolute before:left-0">
                      {tech_item}
                    </li>
                  </MovingComponent>
                </FadeInSection>
              ))}
            </ul>
            {two}
          </div>

          <div className="about-image pl-10">
            <MovingComponent
              type="fadeInFromLeft"
              duration="1500ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
            >
              <img
                alt="Aditya"
                id="adi-img"
                src="./assets/123.jpeg"
                className="py-5 bg-transparent sm:px-auto max-w-[500px] sm:max-w-[300px] h-auto rounded-lg ml-5 hover:-translate-y-2 transition-transform duration-200 ease-in-out object-cover shadow-lg"
              />
            </MovingComponent>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;
