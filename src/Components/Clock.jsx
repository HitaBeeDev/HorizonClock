import HourHand from "./HourHand";
import MinuteHand from "./MinuteHand";
import SecondHand from "./SecondHand";
import numberPositions from "./numberPositions";

export default function Clock({ hours, minutes, seconds }) {
  return (
    <div
      className="w-52 h-52 shadow-lg	shadow-slate-300	border-4	border-slate-300 relative rounded-full bg-slate-200
   flex items-center justify-center"
    >
      {numberPositions.map(({ num, rotation }) => (
        <h2
          className="absolute w-40 h-40 origin-center transform text-white text-sm flex items-center justify-center text-slate-900"
          style={{
            transform: `rotate(${rotation}deg) translate(-50%) rotate(${-rotation}deg)`,
          }}
          key={num}
        >
          {num}
        </h2>
      ))}

      <MinuteHand minutes={minutes} />
      <HourHand hours={hours} />
      <SecondHand seconds={seconds} />

      <p
        className="absolute flex items-center justify-center w-2 h-2 bg-slate-500 rounded-full"
        style={{ zIndex: 1 }}
      ></p>
    </div>
  );
}
