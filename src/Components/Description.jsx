export default function Description({ country, time }) {
  return (
    <div className="text-center mt-10 text-sm flex flex-col gap-2">
      <p>{country.country}</p>
      <p>
        {time.toLocaleDateString()} {time.toLocaleTimeString()}
      </p>
    </div>
  );
}
