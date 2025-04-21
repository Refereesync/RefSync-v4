# ⚽ RefSync — Multi-Sport Referee Companion

RefSync is a professional-grade mobile + watch referee toolkit for match control, event tracking, and assistant syncing — built with React Native + Expo + Firebase.

---

## 📱 Phone App Features

- ✅ Match creation, setup & scheduling
- 🕒 Timer control, goals, cards, substitutions
- 🎙 Voice notes + misconduct logging
- 🔄 Live sync with Assistant Ref Watch
- 📊 Stats summary, PDF export, match rating
- 🌓 Dark mode, multilingual support
- ☁️ Firebase sync, offline-safe

---

## ⌚ Watch App Features

- 🕒 Dual timer with vibration
- 👈 👉 Swipe interface: team events
- 🟨🟥 Cards, sin bin, undo, notes
- 🔁 BLE + Firebase sync
- 🎛 Utility panel: halftime, match end

---

## 🧠 Multi-Sport Engine

RefSync can support multiple sports via modular config:

- ⚽ Football (Default)
- 🏉 Rugby
- 🏑 Hockey
- 🎾 Tennis
- 🏐 Netball

New sports can be added by injecting:
- Match timer rules
- Event types (goals, fouls, etc.)
- Layout schema

---

## 🔧 Tech Stack

| Layer         | Tooling                     |
|--------------|-----------------------------|
| Mobile Core   | React Native + Expo SDK 50 |
| Sync & DB     | Firebase Firestore + Auth  |
| Voice Input   | Expo Speech / Expo Audio   |
| Watch UI      | React Navigation + Swipe   |
| Deploy        | EAS Build (.ipa/.aab)      |

---

## 🚀 Setup

```bash
git clone https://github.com/your-org/refsync.git
cd refsync
npm install
npx expo start
