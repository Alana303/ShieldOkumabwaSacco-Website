// src/components/AchievementCounters.jsx
import { useEffect, useRef, useState } from "react";

export default function AchievementCounters() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Counter values
  const countersData = [
    { target: 1200, label: "Active Members" },
    { target: 8500, label: "Loans Disbursed (Ksh)" },
    { target: 6, label: "Years of Service" },
  ];

  // Observe visibility of section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="achievement-counters text-white py-5"
      style={{ backgroundColor: "#151269" }}
    >
      <div className="container text-center">
        <h2 className="mb-5 fw-bold">Our Impact in Numbers</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {countersData.map((counter, index) => (
            <CounterItem
              key={index}
              target={counter.target}
              label={counter.label}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// -------------------------------
// Child Component: CounterItem
// -------------------------------
function CounterItem({ target, label, isVisible }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000; // 2 seconds
    const stepTime = 16; // roughly 60fps
    const increment = target / (duration / stepTime);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setValue(target);
        clearInterval(counter);
      } else {
        setValue(Math.ceil(start));
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, [isVisible, target]);

  return (
    <div className="col">
      <div className="counter-item p-4 rounded shadow-sm">
        <div className="display-3 fw-bold">{value.toLocaleString()}</div>
        <p className="lead mt-2">{label}</p>
      </div>
    </div>
  );
}
