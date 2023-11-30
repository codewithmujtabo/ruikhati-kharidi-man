import { useState } from "react";
import Item from "./Item";

export default function GroceryList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }

  if (sortBy === "name") {
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy === "checked") {
    sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
  }

  switch (sortBy) {
    case "name":
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "checked":
      sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
      break;
    default:
      sortedItems = items;
      break;
  }

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Аз рӯи тартиб воридкунӣ ҷудо кардан</option>
          <option value="name">Аз рӯи номи маҳсулот ҷудо кардан</option>
          <option value="checked">
            Аз рӯи хариди аллакай карда ҷудо кардан
          </option>
        </select>
        <button onClick={onClearItems}>Рӯйхатро тоза кардан</button>
      </div>
    </>
  );
}
