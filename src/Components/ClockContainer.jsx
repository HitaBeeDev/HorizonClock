import { useState, useEffect } from "react";
import Clock from "./Clock";
import Description from "./Description";

function ClockContainer({ country }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleString("en-US", {
        timeZone: country.timezone,
      });
      setTime(new Date(currentTime));
    }, 100);

    return () => clearInterval(interval);
  }, [country.timezone]);

  const seconds = (time.getSeconds() + time.getMilliseconds() / 1000) / 60;
  const minutes = (seconds + time.getMinutes()) / 60;
  const hours = (minutes + time.getHours()) / 12;

  return (
    <div className="flex items-center justify-center flex-col origin-center place-content-center">
      <Clock hours={hours} minutes={minutes} seconds={seconds} />
      <Description country={country} time={time} />
    </div>
  );
}

export default ClockContainer;
