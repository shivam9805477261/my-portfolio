import { useState } from "react";

const links = ["about", "skills", "experience", "projects", "services", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <a className="logo" href="#top">Shivam.dev</a>

      <button className="burger" onClick={() => setOpen(!open)}>
        Menu
      </button>

      <nav className={open ? "open" : ""}>
        {links.map((id) => (
          <a key={id} href={"#" + id} onClick={() => setOpen(false)}>
            {id}
          </a>
        ))}
      </nav>
    </header>
  );
}