import { profile } from "../data.js";

export default function About() {
  return (
    <section id="about" className="section">
      <h2>About me</h2>
      <p>{profile.about}</p>
      <p className="avail">I’m a passionate Full Stack Developer who enjoys building modern, responsive, and user-friendly web applications. I’m open to freelance projects and professional opportunities where I can help clients turn their ideas into reality through creative design and reliable development. My goal is to deliver quality solutions, build long-term client relationships, and continuously grow my skills.
</p>
    </section>
  );
}