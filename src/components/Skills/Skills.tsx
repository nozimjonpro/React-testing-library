import React, { useEffect, useState } from "react";
import { SkillsProps } from "./Skills.types";

export default function Skills({ skills }: SkillsProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1000);
  }, []);

  return (
    <div>
      <ul>
        {skills.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
}
