
import "./Projects.css";

import Pro1 from "../../assets/images/1730798730-6549147-36250caf6a9bb36e8f861f65ed9450e3486f36c1.webp";
import Pro2 from "../../assets/images/1724616217-5303441-6b2fe2e51453764b1adb7fe041e1df01a8a20a6d.webp";
import Pro3 from "../../assets/images/weghtna.webp";
import Pro4 from "../../assets/images/animales.webp";
import Pro5 from "../../assets/images/dashbord.webp";
import Pro6 from "../../assets/images/reno.webp";
import Pro7 from "../../assets/images/shiaka.webp";
import Pro8 from "../../assets/images/delta.webp";
import Pro9 from "../../assets/images/wala.webp";
import Pro10 from "../../assets/images/elitesmile.webp";
import Pro11 from "../../assets/images/MrKotchy.webp";

function Projects() {
  // 🔥 API (Data)
  const projects = [
    { id: 1, title: "Trendy", img: Pro1, link: "https://trendystoreshop.com/" },
    { id: 2, title: "Agritora", img: Pro2, link: "https://agritora.com/en" },
    { id: 3, title: "وجهتنا", img: Pro3, link: "https://wjhatna.com/" },
    { id: 4, title: "Les prof", img: Pro4, link: "https://lesprof.net/" },
    { id: 5, title: "Dashboard", img: Pro5, link: "https://tard-eta.vercel.app/" },
    { id: 6, title: "Reno", img: Pro6, link: "https://reno-eg.com/" },
    { id: 7, title: "Shiaka", img: Pro7, link: "https://shiakaalibaba.com/" },
    { id: 8, title: "Delta", img: Pro8, link: "https://deltexco.com/" },
    { id: 9, title: "Wala", img: Pro9, link: "https://coachwm.com/" },
    { id: 10, title: "Elite Smile", img: Pro10, link: "https://elitesmile-clinics.com/" },
    { id: 11, title: "Mr Kotchy", img: Pro11, link: "https://mrkotchy.com/" },
  ];

  return (
    <section className="mb-5 container projects">
      <h2 className="text-center mb-4">My Projects</h2>

      <div className="row cards">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            className="col-md-3 mb-3"
          >
            <div className="image-container">
              <img
                src={project.img}
                className="project-image"
                alt={project.title}
              />
              <div className="overlay-text">{project.title}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
