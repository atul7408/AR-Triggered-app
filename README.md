📖 Project Overview

This project is a prototype for an AR-triggered campaign, simulating how a print advertisement can "come to life" when scanned via QR code.

The experience allows a user to:

📌 Scan a QR code

🎥 Launch an AR-like interactive experience (simulated with Three.js)

🛒 View a product with a Call-to-Action (Buy Now)

📊 See real-time campaign analytics such as total scans and average time spent

This prototype aligns with AR Horizon’s vision of immersive, real-time customer engagement.


🛠 Tech Stack

🔹 Frontend

⚛️ React.js – SPA framework

🎨 Tailwind CSS – Responsive modern UI

🧊 Three.js – WebGL AR simulation (3D rotating cube)

🔲 react-qr-code – QR code generation

🔹 Backend

🟢 Node.js + Express.js – REST API

🍃 MongoDB Atlas – Cloud database

📝 Mongoose – ODM for MongoDB

📑 Swagger UI – API documentation

❇️ Local Development


🌐 Hosting
Frontend: Netlify (static hosting)

Backend: Render (Node/Express hosting)

Database: MongoDB Atlas

⚙️ Setup Instructions

1️⃣ Clone Repository
bash
Copy
Edit

git clone https://github.com/your-username/ar-horizon-campaign.git

cd ar-horizon-campaign


2️⃣ Frontend Setup


bash
Copy
Edit

cd frontend
npm install
npm start

Runs locally at → http://localhost:3000


3️⃣ Backend Setup
bash
Copy
Edit


cd backend
npm install
npm run dev

Runs locally at → http://localhost:5000

Swagger Docs → http://localhost:5000/api-docs


4️⃣ Environment Variables


Create a .env file in the backend folder:

env
Copy
Edit

PORT=5000

MONGO_URI=your_mongodb_connection_string


✅ Features Implemented

Frontend


✔️ Landing page with title “Experience Print Come to Life”

✔️ QR Code generation & scan simulation

✔️ WebGL-based AR content (3D cube animation)

✔️ Buy Now button

✔️ Responsive UI with Tailwind CSS

✔️ Analytics component showing scans & avg. time spent

Backend


✔️ POST /api/scans → record scan with time spent, user-agent & location

✔️ GET /api/stats/total-scans → fetch total scans

✔️ GET /api/stats/unique-users → fetch unique users by IP

✔️ GET /api/stats/campaign → fetch campaign performance summary

📹 Demo Links





🌐 Frontend (Netlify): https://ar-triggered-atul.netlify.app/

🚀 Candidate Information

👤 Atul Verma

📧 atulv7408@gmail.com

📞 7408645168


🪪 License

This project is licensed under the MIT License.

Please feel free to modify the sections and add any additional information or badges relevant to your project. Let me know if you need further help.

Back to top

