import { useEffect, useState } from "react";
import { profile } from "../data.js";

export default function Loader({ onDone }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const leaveTimer = setTimeout(() => setLeaving(true), 2400);
    const doneTimer = setTimeout(() => onDone(false), 3200);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = "";
    };
  }, [onDone]);

  return (
    <div className={leaving ? "loader leave" : "loader"} aria-hidden="true">
      <h1 className="loader-name">
        {profile.name.split("").map((ch, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.06}s` }}>
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </h1>
      <p className="loader-role">{profile.role}</p>
      <div className="loader-bar">
        <div className="loader-fill" />
      </div>
    </div>
  );
}