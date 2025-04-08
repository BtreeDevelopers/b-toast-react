import { useEffect, useRef } from "react";
const Timer = ({ timer = 5000, id = -1, closeToast }: any) => {
  const timerRef = useRef<any>(null);
  useEffect(() => {
    if (timerRef.current) return;
    timerRef.current = setTimeout(() => {
      closeToast(id);
    }, timer);
  }, []);

  return null;
};
export default Timer;
