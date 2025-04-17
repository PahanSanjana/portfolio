import React from "react";
import ProjectsCard from "./ProjectsCard";

export const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectsCard
          title="Bloging Website"
          main="This is the bloging web site created in next.js and used some component library and some extra features, and technologyies"
        />
        <ProjectsCard
          title="Youtube Clone"
          main="This is the bloging web site created in next.js and used some component library and some extra features, and technologyies"
        />
        <ProjectsCard
          title="Tiktok Clone"
          main="This is the bloging web site created in next.js and used some component library and some extra features, and technologyies"
        />
      </div>
    </div>
  );
};

