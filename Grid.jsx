const DAYS = 365;

export default function Grid({ entries, day, setDay }) {
  return (
    <div className="grid">
      {Array.from({ length: DAYS }, (_, i) => {
        const d = i + 1;
        return (
          <div
            key={d}
            onClick={() => setDay(d)}
            className={`cell ${entries[d] ? "done" : ""} ${day === d ? "active" : ""}`}
          />
        );
      })}
    </div>
  );
}
