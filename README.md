# QR Code Generator 🚀  

This project is a **Node.js & Express.js** based QR Code Generator.  
You can generate QR codes for **WiFi credentials, links, or text**, preview them in real-time, and download them as PNG files.  

🎨 **Features:**  
✔ Live QR code updates  
✔ WiFi, Link, and Text options  
✔ Modern UI with smooth animations  
✔ Download QR codes as PNG  
✔ Dynamic background effects  

---

## 📌 Installation  

### 1️⃣ Install Dependencies  
Make sure you have **Node.js** and **npm (Node Package Manager)** installed.  
If not, [download Node.js here](https://nodejs.org/).  

Then, run the following commands in your terminal:  

```
# Navigate to the project folder
cd qr-generator

# Install dependencies
npm install
```

---

## 📌 Project Structure  

```
📂 qr-generator
│── 📁 public
│   ├── 📄 index.html      # Main HTML file
│   ├── 📄 style.css       # Styling file
│   ├── 📄 script.js       # QR code generation & animations
│── 📄 server.js           # Node.js Express server
│── 📄 package.json        # Dependencies
│── 📄 README.md           # This file
```

---

## 📌 API Usage  

| Endpoint    | Description          | Parameters                     |
|------------|----------------------|--------------------------------|
| `/generate` | Generate QR code     | `type`, `input`, `ssid`, `password` |

Example:  
```
http://localhost:3000/generate?type=wifi&ssid=MyNetwork&password=MyPassword
```

---

## 📌 Run The Project  

```
# Start the project on localhost:3000
npm start
```
