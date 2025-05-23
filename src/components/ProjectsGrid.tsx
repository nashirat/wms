import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Pekerjaan Akses Petikemas II Pelabuhan",
    period: "10/01/2008 - 11/07/2008",
    imageSrc: "/images/img-lihat-proyek-1.png",
  },
  {
    title: "Pekerjaan Akses Petikemas II Pelabuhan",
    period: "10/01/2008 - 11/07/2008",
    imageSrc: "/images/img-lihat-proyek-2.png",
  },
  {
    title: "Pekerjaan Akses Petikemas II Pelabuhan",
    period: "10/01/2008 - 11/07/2008",
    imageSrc: "/images/img-lihat-proyek-3.png",
  },
];

const ProjectsGrid: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            period={project.period}
            imageSrc={project.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;
