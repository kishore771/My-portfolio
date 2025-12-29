import { useEffect, useState } from "react";
import "./Loader.css";

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 400); // small delay before removing loader
          return 100;
        }
        return prev + 1;
      });
    }, 20); // speed of loading bar

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="loader-wrapper">
      <h2 className="loader-title">You are entering the Kishore's portfolio...</h2>

      <div className="loading-bar-container">
        <div
          className="loading-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="loader-percent">{progress}%</p>
    </div>
  );
};

export default Loader;
