export default function handler(req, res) {
  try {
    const fs = require('fs');
    const path = require('path');
    const filePath = path.join(process.cwd(), 'status.json');
    const raw = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(raw);
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json(data);
  } catch (err) {
    res.status(200).json({
      activeAgents: 3,
      tasksInFlight: 7,
      completed: 124,
      updatedAt: new Date().toISOString(),
      fallback: true,
    });
  }
}
