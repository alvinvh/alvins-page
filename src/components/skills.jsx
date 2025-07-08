import React from "react";

function Skills() {
  const skills = {
    Languages: [
      [
        "Python",
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />,
      ],
      [
        "JavaScript",
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />,
      ],
      [
        "React",
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />,
      ],
      [
        "C#",
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />,
      ],
      [
        "Typescript",
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />,
      ],
      [
        "SQL",
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />,
      ],
      [
        "PostgreSQL",
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />,
      ],
    ],
    Frameworks: [
      [
        "React.js",
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />,
      ],
      [
        "FastAPI",
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" />,
      ],
      [
        "Node.js",
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />,
      ],
      [
        "Flask",
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" />,
      ],
      [
        "Django",
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" />,
      ],
      [
        "Angular",
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" />,
      ],
      [
        "Express.js",
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />,
      ],
      [
        "Unity",
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" />,
      ],
      [
        "Bootstrap",
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />,
      ],
    ],
    "Machine Learning": [
      [
        "TensorFlow",
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" />,
      ],
      [
        "PyTorch",
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" />,
      ],
      [
        "pandas",
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" />,
      ],
      [
        "scikit-learn",
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" />,
      ],
    ],
    Tools: [
      [
        "Docker",
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />,
      ],
      [
        "Git",
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />,
      ],
      [
        "Github",
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />,
      ],
    ],
  };
  const [skillsSelected, setSkillsSelected] = React.useState("Languages");
  const [visibleCount, setVisibleCount] = React.useState(
    skills["Languages"].length
  );

  React.useEffect(() => {
    setVisibleCount(0);
    const currentSkills = skills[skillsSelected];
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setVisibleCount(i);
      if (i >= currentSkills.length) clearInterval(interval);
    }, 175);
    return () => clearInterval(interval);
  }, [skillsSelected]);

  function handleCategoryClick(event) {
    setSkillsSelected(event.target.id);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Technical Skills</h2>
          <div className="skills-section-wrapper">
            <div className="skills-category">
              {Object.entries(skills).map(([category]) => (
                <span
                  className={
                    skillsSelected === category ? "skill-selected" : ""
                  }
                  key={category}
                  id={category}
                  onClick={handleCategoryClick}
                >
                  {category}
                </span>
              ))}
            </div>
            <div className="skills-list">
              {skills[skillsSelected].map((item, index) => (
                <div
                  className="skills-list-item"
                  style={{
                    opacity: index < visibleCount ? 1 : 0,
                  }}
                >
                  <span key={index} className="skill-icon">
                    {item[1]}
                  </span>
                  <span className="">{item[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
