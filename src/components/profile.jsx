import React, { useEffect, useState } from "react";

function Profile() {
  const myRoles = [
    "Software Engineer",
    "Full Stack Developer",
    "Machine Learning Enthusiast",
  ];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % myRoles.length);
        setFade(false);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, [myRoles.length]);

  return (
    <div id="about" className="container section-margin mt-5">
      <div className="row">
        <div className="col-md-4">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQFUq6t8PI1_JA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1689523666103?e=1756944000&v=beta&t=N2Dge9DDvF5IT5mQEgqYINqEWfbG6gB8W7R5w3v9qi8"
            alt="Profile"
            className="img-fluid rounded-circle profile-img"
          />
        </div>
        <div className="col-md-8 profile-section">
          <h2>Hi there, I'm Alvin Handoko</h2>
          <h4 className={`role-fade${fade ? " hide" : ""}`}>{myRoles[index]}</h4>
          <p>A passionate full-stack developer with strong expertise in Python, React, Angular, and JavaScript. Armed with a Master’s degree in Software Engineering from Charles Darwin University, I thrive on building intuitive user experiences, scalable backend solutions, and dynamic applications that bridge creativity and technical precision.</p>
        <div className="row">
        <div className="col"><button className="profile-btn"><a href="#">View projects</a><i className="bi bi-arrow-right arrow-icon"></i></button>
        <button className="profile-btn"><a href="#">Resume</a></button></div>
        </div>
        <div className="row">
            <div className="col mt-2"><a className="profile-link" href="https://github.com/alvinvh" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a> <a className="profile-link" href="www.linkedin.com/in/alvin-handoko" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a></div>
        </div>
      </div>
      
        
      </div>
    </div>
  );
}
export default Profile;
