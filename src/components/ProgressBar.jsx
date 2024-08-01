import React from "react";

const ProgressBar = ({ totalCount }) => {
  const totalParts = 15;
  const filledPercentage =
    (Math.min(totalCount, totalParts) / totalParts) * 100;

  const isL0Green = totalCount >= 1;
  const isL1Green = totalCount >= 5;
  const isL2Green = totalCount >= 10;
  const isL3Green = totalCount >= totalParts;

  return (
    <div className="relative w-[50%] mb-10">
      <div className="flex justify-between mb-6">
        <span className={isL0Green ? "text-green-500" : "text-gray-300"}>
          L0
        </span>
        <span className={isL1Green ? "text-green-500" : "text-gray-300"}>
          L1
        </span>
        <span className={isL2Green ? "text-green-500" : "text-gray-300"}>
          L2
        </span>
        <span className={isL3Green ? "text-green-500" : "text-gray-300"}>
          L3
        </span>
      </div>

      <div className="w-full h-4 bg-gray-300 relative rounded-xl">
        <div
          className="h-full absolute bg-green-500 rounded-xl z-40"
          style={{ width: `${filledPercentage}%` }}
        />

        <div
          className="absolute -top-[7.5px] left-[33%] h-[2rem] w-1 bg-gray-300"
          style={{ width: "4px" }}
        />
        <div
          className="absolute -top-[7.5px] left-[66%] h-[2rem] w-1 bg-gray-300"
          style={{ width: "4px" }}
        />
        <div
          className="absolute -top-[7.5px] left-[98.4%] h-[2rem] w-1 bg-gray-300"
          style={{ width: "4px" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
