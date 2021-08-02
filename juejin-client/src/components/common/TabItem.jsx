import React from "react";

export default function TabItem({ name, selected, onSelected }) {
  return (
    <div
      className={selected ? "secondary-tab tab-selected" : "secondary-tab"}
      onClick={onSelected}
    >
      <p
        style={{
          display: "inline-block",
          margin: 0,
          minWidth: name && name.length > 10 ? "4.5rem" : "1.5rem",
          fontSize: "0.8rem",
        }}
      >
        {name}
      </p>
    </div>
  );
}
