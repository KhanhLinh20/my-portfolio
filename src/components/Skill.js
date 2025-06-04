import React, { useEffect, useRef, useState } from "react";
import "./Skill.css";

const logos = {
  row1: [
    { src: "https://cdn.simpleicons.org/html5/E34F26", alt: "HTML" },
    { src: "https://cdn.simpleicons.org/css3/1572B6", alt: "CSS" },
    { src: "https://cdn.simpleicons.org/javascript/F7DF1E", alt: "JavaScript" },
    { src: "https://cdn.simpleicons.org/react/61DAFB", alt: "React" },
    { src: "https://cdn.simpleicons.org/github/181717", alt: "GitHub" },
    { src: "https://cdn.simpleicons.org/vue.js/4FC08D", alt: "Vue.js" },
  ],
  row2: [
    // { src: "https://cdn.simpleicons.org/java/007396", alt: "Java" },
    { src: "https://cdn.simpleicons.org/springboot/6DB33F", alt: "Spring Boot" },
    { src: "https://cdn.simpleicons.org/mongodb/47A248", alt: "MongoDB" },
    { src: "https://cdn.simpleicons.org/postgresql/4169E1", alt: "PostgreSQL" },
    { src: "https://cdn.simpleicons.org/firebase/FFCA28", alt: "Firebase" },
  ],
  row3: [
    { src: "https://cdn.simpleicons.org/docker/2496ED", alt: "Docker" },
    { src: "https://cdn.simpleicons.org/figma/F24E1E", alt: "Figma" },
    { src: "https://cdn.simpleicons.org/redux/764ABC", alt: "Redux" },
    
  ],
  row4: [
    { src: "https://cdn.simpleicons.org/tailwindcss/06B6D4", alt: "Tailwind" },
    { src: "https://cdn.simpleicons.org/go/00ADD8", alt: "Go" },
  ],
  row5: [
    
  ]
};

export default function Skills() {
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="skills-section" ref={sectionRef}>
      <h2>Technologies I Use</h2>
      <p className="quote">
        I believe technology doesn't care where you begin—what matters is that you dare to start.
      </p>
      <div className="triangle-layout">
        {Object.keys(logos).map((row, rowIndex) => (
          <div className="triangle-row" key={rowIndex}>
            {logos[row].map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                className={`skill-icon ${isVisible ? "visible" : ""}`}
                style={{ animationDelay: `${(i + rowIndex) * 0.1}s` }}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
