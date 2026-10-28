import { profile } from "../data.js";

export default function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} {profile.name}</p>

      <p className="links">
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </p>
    </footer>
  );
}