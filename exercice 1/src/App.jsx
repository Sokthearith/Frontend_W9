import React, { useMemo, useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);

  const scoreBarStyle = useMemo(() => {
    const safeScore = Number.isFinite(score) ? Math.min(10, Math.max(0, score)) : 0;

    // 1- Compute width (0 to 10) -> (0% to 100%)
    const scoreWidth = `${safeScore * 10}%`;

    // 2- Compute color (optional)
    let scoreColor = `#f3bc47`; // low score
    if (safeScore >= 4 && safeScore <= 6) scoreColor = `#a9d453`; // medium
    if (safeScore >= 7 && safeScore <= 8) scoreColor = `#9cc54b`; // good
    if (safeScore >= 9) scoreColor = `#7fbf3f`; // excellent

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  }, [score]);

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input
          type="number"
          min="0"
          max="10"
          value={score}
          onChange={(e) => {
            const nextScore = Number(e.target.value);
            setScore(Number.isFinite(nextScore) ? nextScore : 0);
          }}
        />

        <div className="score-bar">
          <div className="score-bar-value" style={scoreBarStyle}></div>
        </div>
      </div>
    </>
  );
}
