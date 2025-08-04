
import React from "react";

export const Analytics = ({ analytics }) => {
  return (
    <div className="mt-8 bg-gray-800 p-6 rounded-lg w-full max-w-md text-center shadow-lg">
      <h2 className="text-xl font-bold mb-4">Campaign Analytics</h2>
      <p>Total Scans: {analytics.scans}</p>
      <p>Average Time Spent: {analytics.avgTime} sec</p>
    </div>
  );
};
