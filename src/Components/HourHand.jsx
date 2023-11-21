export default function HourHand({ hours }) {
  return (
    <div
      className="rounded-t-full flex items-center justify-center origin-center w-0.5 h-12 bg-slate-500"
      style={{
        transform: `rotate(${(hours % 1) * 360}deg) translate(-50%, -50%)`,
      }}
    ></div>
  );
}
