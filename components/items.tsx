export function Items({ items }: { items: any[] }) {
  return (
    <>
      {items.map((p) => (
        <p key={p.id}>{p.title || p.name}</p>
      ))}
    </>
  );
}
