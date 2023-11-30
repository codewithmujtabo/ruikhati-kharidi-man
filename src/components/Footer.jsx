export default function Footer({ items }) {
  if (items.length === 0)
    return <footer className="stats">Рӯйхати харид холи аст!</footer>;

  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  const percentage = Math.round((checkedItems / totalItems) * 100);

  return (
    <footer className="stats">
      Дар рӯйхати харид {totalItems} маҳсулот мавҷуд аст, {checkedItems} маҳсулоти харидашуда ({percentage}%)
    </footer>
  );
}
