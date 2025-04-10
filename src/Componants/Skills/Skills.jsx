import "./Skills.css";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiBootstrap, SiTailwindcss, SiSass, SiJquery } from "react-icons/si";

function Skills() {
  return (
    <>
     <div className="Skill">
  <div className="container text-center my-5 Skills">
    <h2 className="mb-4 Skills fw-bolder fs-1">My Skills</h2>
    <div className="row justify-content-center Skills">
      <div className="col-6 col-md-3 skill" style={{ color: "#61DBFB" }}>
        <FaReact size={60} />
        <p>React</p>
      </div>
      <div className="col-6 col-md-3 skill" style={{ color: "#E34F26" }}>
        <FaHtml5 size={60} />
        <p>HTML5</p>
      </div>
      <div className="col-6 col-md-3 skill" style={{ color: "#1572B6" }}>
        <FaCss3Alt size={60} />
        <p>CSS3</p>
      </div>
      <div className="col-6 col-md-3 skill" style={{ color: "#F7DF1E" }}>
        <FaJsSquare size={60} />
        <p>JavaScript</p>
      </div>
      <div className="col-6 col-md-3 skill" style={{ color: "#563d7c" }}>
        <SiBootstrap size={60} />
        <p>Bootstrap</p>
      </div>
      <div className="col-6 col-md-3 skill" style={{ color: "#38BDF8" }}>
        <SiTailwindcss size={60} />
        <p>Tailwind CSS</p>
      </div>
      <div className="col-6 col-md-3 skill" style={{ color: "#CC6699" }}>
        <SiSass size={60} />
        <p>Sass</p>
      </div>
      <div className="col-6 col-md-3 skill" style={{ color: "#0769ad" }}>
        <SiJquery size={60} />
        <p>jQuery</p>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
export default Skills;
