import { profile } from "../data.js";

export default function Hero() {
  return (
    <section className="hero">
      <div>
        <p className="hello">Hi, I'm</p>
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="lead">{profile.tagline}</p>

        <div className="cta">
          <a className="btn primary" href="#contact">Hire me</a>
          <a className="btn" href="#projects">See my work</a>
          <a
            className="btn"
            href={profile.resume}
            download="Shivam_Choudhary_Resume.pdf"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="photo-wrap">
        <svg className="ring" viewBox="0 0 200 200">
          <defs>
            <path id="circle" d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0" />
          </defs>
          <text>
            <textPath href="#circle">
              FULL STACK DEVELOPER • LARAVEL • REACT • MYSQL • OPEN TO WORK •
            </textPath>
          </text>
        </svg>

        <div className="photo">
          <img src={profile.photo} alt={"Portrait of " + profile.name} />
        </div>
      </div>
    </section>
  );
}