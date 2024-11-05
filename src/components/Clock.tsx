import { useEffect, useState } from "react";

export const Clock = () => {
  const [days, setDays] = useState<number>(3);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (hours === 0) {
        setDays(days - 1);
        setHours(23);
        setMinutes(59);
        setSeconds(59);
      } else if (minutes === 0) {
        setHours(hours - 1);
        setMinutes(59);
      } else if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [days, hours, minutes, seconds]);

  return (
    <div className="mb-[-0.5rem] flex items-end gap-[1.19rem]">
      {/* Day  */}
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium">Days</span>
        <h3 className="font-inter text-[2rem] font-bold">{days}</h3>
      </div>
      <span className="mb-[0.625rem] text-4xl text-hover_button">:</span>

      {/* Hour  */}
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium">Hours</span>
        <h3 className="font-inter text-[2rem] font-bold">{hours}</h3>
      </div>
      <span className="mb-[0.625rem] text-4xl text-hover_button">:</span>

      {/* Minute  */}
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium">Minutes</span>
        <h3 className="font-inter text-[2rem] font-bold">{minutes}</h3>
      </div>
      <span className="mb-[0.625rem] text-4xl text-hover_button">:</span>

      {/* Second  */}
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium">Seconds</span>
        <h3 className="font-inter text-[2rem] font-bold">{seconds}</h3>
      </div>
    </div>
  );
};
