import mongoose from "mongoose";

const scanSchema = new mongoose.Schema(
  {
    ip: { type: String },
    userAgent: { type: String },
    location: {
      lat: Number,
      lng: Number,
    },
    timeSpent: { type: Number, default: 0 }, // seconds
  },
  { timestamps: true }
);

const Scan = mongoose.model("Scan", scanSchema);
export default Scan;
