import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timeOut = setTimeout(onTimeout, timeout);

    return () => clearTimeout(timeOut);
  }, [timeout, onTimeout]);

  useEffect(() => {
    const countDown = setInterval(
      () =>
        setRemainingTime((prevTime) => {
          return prevTime - 100;
        }),
      100
    );

    return () => clearInterval(countDown);
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} className={mode} />;
}
