import "./Projects.css";
import Pro1 from "../../assets/images/1730798730-6549147-36250caf6a9bb36e8f861f65ed9450e3486f36c1.webp";
import Pro2 from "../../assets/images/1724616217-5303441-6b2fe2e51453764b1adb7fe041e1df01a8a20a6d.webp";
import Pro3 from "../../assets/images/Screenshot 2025-04-08 063331.png";
import Pro4 from "../../assets/images/Screenshot 2025-04-08 063711.png";
function Projects() {
  return (
    <>
      <section  className="mb-5 container projects">
        <h2 className="text-center mb-4">My Projects</h2>
        <div className="row cards">
          <a href="https://agritora.com/en" className="col-md-3 mb-3">
            <div className="image-container">
              <img src={Pro1} className="project-image" alt="Project 1" />
              <div className="overlay-text">Trendy</div>
            </div>
          </a>
          <a href="https://trendystoreshop.com/" className="col-md-3 mb-3">
            <div className="image-container">
              <img src={Pro2} className="project-image" alt="Project 2" />
              <div className="overlay-text">Agritora</div>
            </div>
          </a>
          <a href="https://wjhatna.com/" className="col-md-3 mb-3">
            <div className="image-container">
              <img src={Pro3} className="project-image" alt="Project 3" />
              <div className="overlay-text">وجهتنا</div>
            </div>
          </a>
          {/* Image 4 */}
          <a href="https://lesprof.net/" className="col-md-3 mb-3">
            <div className="image-container">
              <img src={Pro4} className="project-image" alt="Project 4" />
              <div className="overlay-text">Les prof</div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

export default Projects;
