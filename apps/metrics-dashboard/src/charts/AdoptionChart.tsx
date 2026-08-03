export function AdoptionChart({ data }: { data: number[] }) {
  return (
    <div>
      <h3>Adoption Chart</h3>
      {data.map((value, index) => (
        <div key={index}>Year {index + 1}: {value} teams</div>
      ))}
    </div>
  );
}
