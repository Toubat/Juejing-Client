import React from "react";

export default function LoadingBlock({ width, height, radius }) {
  return (
    <div
      className="loading-block"
      style={{
        width: width ? width : undefined,
        height: height ? height : undefined,
        borderRadius: radius ? radius : undefined,
      }}
    ></div>
  );
}
