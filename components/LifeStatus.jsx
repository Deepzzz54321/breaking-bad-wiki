import React from "react";

export default function LifeStatus({ status }) {
  const dead =
    status.toLowerCase().includes("dead") ||
    status.toLowerCase().includes("deceased");
  return (
    <span className={`${dead ? "text-danger" : "text-success"} ml-1`}>
      {status}
    </span>
  );
}
