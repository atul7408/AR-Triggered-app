import React from 'react'
import QRCode from "react-qr-code";
export const QR = ({onScan}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-lg">Scan the QR Code to start the AR Experience</p>
      <QRCode value="https://your-ar-demo-link.com" size={150} />
      <button
        onClick={onScan}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg mt-4"
      >
        Simulate QR Scan
      </button>
    </div>
  )
}
