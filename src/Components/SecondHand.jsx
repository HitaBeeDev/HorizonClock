export default function SecondHand({ seconds }) {
  return (
    <div
      className="rounded-t-full flex items-center justify-center origin-center w-px h-12 bg-rose-500"
      style={{
        transform: `rotate(${(seconds % 1) * 360}deg) translate(-50%, -50%)`,
      }}
    ></div>
  );
}
