🥚 EggMan – Fresh Egg Delivery App
EggMan is a hybrid mobile application designed to streamline farm-fresh egg distribution at KNUST. Built with a focus on high-performance UI and seamless logistics, it bridges the gap between local poultry farms and student hostels.

🚀 The Vision
In a fast-paced campus environment, getting quality protein shouldn't be a hassle. EggMan automates the ordering process, allowing students to browse crate options, manage a digital cart, and place orders directly via WhatsApp with zero friction.

✨ Features
📱 Native Mobile Experience: Wrapped with Capacitor for Android deployment.

🛒 Dynamic Cart System: Add multiple packs, adjust quantities, and calculate totals in real-time.

💬 WhatsApp Order Bridge: Instant order routing with pre-formatted summaries (Hostel, Room, Quantity).

🎨 Premium UI: Optimized with the Plus Jakarta Sans typeface and a modern "Farm-to-Table" aesthetic.

⚡ Lightweight & Fast: Minimal dependencies for quick loading on all mobile devices.

🛠️ Tech Stack
Frontend: HTML5, CSS3 (Flexbox/Grid), JavaScript (ES6)

Native Bridge: Capacitor

Icons & Fonts: FontAwesome / Plus Jakarta Sans

Distribution: Android (APK)

📂 Project Structure
Plaintext
EGGMAN_SITE/
├── android/            # Native Android Studio project
├── www/                # Web assets (HTML, CSS, JS)
│   ├── index.html      # Main App Structure
│   ├── style.css       # Premium UI Styling
│   └── script.js       # Cart & WhatsApp Logic
├── capacitor.config.json # Capacitor configuration
└── package.json        # Dependencies & Scripts
🔧 Installation & Setup
To run this project locally or build the APK:

Clone the repo:

Bash
git clone https://github.com/YOUR_USERNAME/EggMan.git
Install dependencies:

Bash
npm install
Sync with Android Studio:

Bash
npx cap copy
npx cap open android
Build the APK:
In Android Studio, go to Build > Build Bundle(s) / APK(s) > Build APK(s).

👤 Author
Larbi Michael Ankrah Computer Engineering Student, KNUST
