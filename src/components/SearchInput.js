import React from "react";

export default function SearchInput({ onChange }) {
  return (
    <input
      type="text"
      name="searchField"
      placeholder="Search.."
      onChange={e => onChange(e.target.value)}
    />
  );
}
