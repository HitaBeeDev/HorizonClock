export default function MinuteHand({ minutes }) {
  return (
    <div
      className="rounded-t-full flex items-center justify-center origin-center w-0.5 h-14 bg-slate-500"
      style={{
        transform: `rotate(${(minutes % 1) * 360}deg) translate(-50%, -50%)`,
      }}
    ></div>
  );
}
