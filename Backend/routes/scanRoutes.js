import express from "express";
import Scan from "../models/scan.js";

const router = express.Router();

// POST /api/scans → Record a scan
router.post("/scans", async (req, res) => {
  try {
    const { timeSpent, location } = req.body;
    const newScan = await Scan.create({
      ip: req.ip,
      userAgent: req.headers["user-agent"],
      location,
      timeSpent,
    });

    res.status(201).json({ success: true, data: newScan });
  } catch (error) {
    console.error("Error recording scan:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET /api/stats/total-scans
router.get("/stats/total-scans", async (req, res) => {
  try {
    const totalScans = await Scan.countDocuments();
    res.json({ totalScans });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/stats/unique-users
router.get("/stats/unique-users", async (req, res) => {
  try {
    const uniqueIPs = await Scan.distinct("ip");
    res.json({ uniqueUsers: uniqueIPs.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/stats/campaign
router.get("/stats/campaign", async (req, res) => {
  try {
    const totalScans = await Scan.countDocuments();
    const uniqueIPs = await Scan.distinct("ip");
    const avgTime = await Scan.aggregate([
      { $group: { _id: null, avgTimeSpent: { $avg: "$timeSpent" } } },
    ]);

    res.json({
      campaign: "AR Print Launch 2025",
      totalScans,
      uniqueUsers: uniqueIPs.length,
      avgTimeSpent: avgTime[0]?.avgTimeSpent || 0,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
