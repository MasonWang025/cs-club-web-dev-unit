import React from "react";

export default function Header(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3 className="text-secondary">{props.subtitle}</h3>
    </div>
  );
}
