import React from "react";
function Projects() {
  const projects = [
    {
      name: "WasteAI",
      description:
        "An AI powered tool to help community to sort recyclable material and raise awareness about recycling",
      techStack: ["Python", "Angular", "Machine Learning", "FastAPI", "CSS"],
      githubLink: "https://github.com/alvinvh/Waste_AI",
      projectLink: "",
      image: "/wasteAI.png",
    },

    {
      name: "TeleMediCare",
      description:
        "Medical appointment booking system for territorians to connect remote areas with medical professionals",
      techStack: ["Angular", "C#", "SCSS", "Typescript", "HTML"],
      githubLink: "https://github.com/alvinvh/ITCodeFair",
      projectLink: "https://alvinvh.github.io/ITCodeFair/index",
      image: "/telemedicare.png",
    },
    {
      name: "Bunji",
      description:
        "Kindness learning application for early childhood education, designed to help children learn about kindness and empathy through interactive stories and activities.",
      techStack: ["Unity", "C#"],
      githubLink: "https://github.com/alvinvh/Bunji-App",
      projectLink: "",
      image: "/bunji.png",
    }
  ];

  return (
    <div id="project" className="container section-margin">
      <h2>Featured Projects</h2>
      <div className="row">
        {projects.map((project, idx) => (
          <div className="col-md-6 col-lg-4" key={idx}>
            <div className="project-card">
              <img className="project-image" alt={project.name}
                src={project.image} />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tech-list">
                {project.techStack.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-link">
                {project.projectLink ? (
                  <a href={project.projectLink} className="profile-btn">
                    View Project
                  </a>
                ) : (
                  <span className="deploying-btn">
                    <svg
                      className="gear-spin"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ marginRight: "8px", verticalAlign: "middle" }}
                    >
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 8a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 8 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09A1.65 1.65 0 0 0 16 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 8c.36.34.87.44 1.51 1H21a2 2 0 0 1 0 4h-.09c-.64 0-1.15.1-1.51 1z" />
                    </svg>
                    Deployment In Progress
                  </span>
                )}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-icon"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github h-4 w-4" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
