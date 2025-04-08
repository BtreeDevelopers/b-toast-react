import { useState, useEffect } from "react";
import "./progress.scss";
const Progress = ({ duration = 5000, type }: any) => {
  const [hasClass, setHasClass] = useState(true);
  const [cmpStyle, setCmpStyle] = useState({
    animationDuration: `${duration}ms`,
    animationPlayState: "running",
    opacity: 1,
  });
  useEffect(() => {
    setHasClass(true);
  }, [duration]);
  useEffect(() => {
    setCmpStyle({
      animationDuration: `${duration}ms`,
      animationPlayState: "running",
      opacity: 1,
    });
  }, [duration]);

  return (
    <div
      className={hasClass ? `b-toast__progress bg-${type}` : `bg-${type}`}
      style={cmpStyle}
    >
      {" "}
    </div>
  );
};
export default Progress;
