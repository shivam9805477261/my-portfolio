import { skills } from "../data.js";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="grid">
        {skills.map((g) => (
          <div className="card" key={g.group}>
            <h3>{g.group}</h3>
            <ul className="chips">
              {g.items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}