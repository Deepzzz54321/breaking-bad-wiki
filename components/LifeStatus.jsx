import React from "react";

export default function LifeStatus({ status }) {
  const alive = !(
    status.toLowerCase().includes("dead") ||
    status.toLowerCase().includes("deceased")
  );
  return (
    <span className={`${alive ? "text-success" : "text-danger"} ml-1`}>
      {status}
    </span>
  );
}
