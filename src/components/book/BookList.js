import React from "react";

function Book({ item, onDelete }) {
  return (
    <li>
      Id: {item.id}, Name : {item.name}{" "}
      <button onClick={_ => onDelete(item)}>x</button>
    </li>
  );
}

export default function BookList({ items = [], onDelete }) {
  return (
    <div>
      <ul>
        {items.map(item => (
          <Book key={item.id} item={item} onDelete={onDelete} />
        ))}
      </ul>
      <p>{!items.length && "No Books available!"}</p>
    </div>
  );
}
