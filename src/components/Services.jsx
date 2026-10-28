import { services } from "../data.js";

export default function Services() {
  return (
    <section id="services" className="section">
      <h2>Freelance services</h2>
      <div className="grid">
        {services.map((s) => (
          <div className="card" key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}