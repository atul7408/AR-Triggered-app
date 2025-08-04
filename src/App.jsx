import React, { useState } from "react";
import { QR } from "./component/QR";
import { ARViewer } from "./component/ARViewer";
import { Analytics } from "./component/Analytics";

export default function App() {
  const [scanned, setScanned] = useState(false);
  const [analytics, setAnalytics] = useState({ scans: 0, avgTime: 0 });
const handleScan = async () => {
  setScanned(true);

  try {
    // Record the scan
    await fetch("http://localhost:5000/api/scans", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        timeSpent: 120,
        location: { lat: 28.61, lng: 77.23 }
      })
    });

    // Fetch campaign stats
    const res = await fetch("http://localhost:5000/api/stats/campaign");
    const stats = await res.json();

    setAnalytics({
      scans: stats.totalScans,
      avgTime: stats.avgTimeSpent
    });
  } catch (err) {
    console.error("Error:", err);
  }
};


  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center p-6">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">
        Experience Print Come to Life
      </h1>

      {!scanned ? (
        <QR onScan={handleScan} />
      ) : (
        <ARViewer />
      )}

      <Analytics analytics={analytics} />
    </div>
  );
}
