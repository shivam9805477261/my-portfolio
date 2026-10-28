import { projects } from "../data.js";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      {projects.map((p) => (
        <article className="card" key={p.title}>
          <h3>{p.title}</h3>
          <p>{p.summary}</p>
          <ul>
            {p.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <ul className="chips">
            {p.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          <div className="project-links">
            <a className="btn" href={p.code} target="_blank" rel="noreferrer">
              View code
            </a>
            {p.live && (
              <a className="btn primary" href={p.live} target="_blank" rel="noreferrer">
                Live demo
              </a>
            )}
          </div>
        </article>
      ))}
    </section>
  );
}