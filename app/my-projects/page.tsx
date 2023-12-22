"use client";

import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="w-screen h-screen flex items-center justify-center bg-center bg-cover"
    >
      <div className="grid grid-cols-2 gap-3 max-w-[90%] max-h-[90%]">
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
          />
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr; // Change to 1 column for screens smaller than 768px
          }
        }
      `}</style>
    </div>
  );
};

export default Page;
