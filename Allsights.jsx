export default function AIInsights({ entries }) {
  const total = Object.keys(entries).length;

  return (
    <div>
      <p>Entries: {total}</p>
      <p>{total > 10 ? "Consistent user 🔥" : "Start your streak"}</p>
    </div>
  );
}
