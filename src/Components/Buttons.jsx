export default function Buttons({ onPrevious, onNext }) {
  return (
    <div className="flex items-center justify-center origin-center gap-72">
      <button
        onClick={onPrevious}
        className="transition duration-300 w-10 h-10 rounded-full bg-slate-300 hover:bg-slate-200"
      >
        <img src="previous-icon.png" alt="previous-icon" className="p-3" />
      </button>

      <button
        onClick={onNext}
        className="transition duration-300 w-10 h-10 rounded-full bg-slate-300 hover:bg-slate-200"
      >
        <img src="next-icon.png" alt="next-icon" className="p-3" />
      </button>
    </div>
  );
}
