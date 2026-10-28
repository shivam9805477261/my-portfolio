import { experience } from "../data.js";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      {experience.map((job) => (
        <article className="card job" key={job.role}>
          <h3>{job.role}</h3>
          <p className="meta">
            {job.company} · {job.period}
          </p>
          <ul>
            {job.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}