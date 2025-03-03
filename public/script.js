document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("text");
    const ssidInput = document.getElementById("ssid");
    const passwordInput = document.getElementById("password");
    const qrCodeImg = document.getElementById("qr-code");
    const downloadBtn = document.getElementById("download-btn");
    const textContainer = document.getElementById("text-input");
    const wifiContainer = document.getElementById("wifi-input");

    function generateQR() {
        const type = document.querySelector('input[name="type"]:checked').value;
        let url = "/generate?type=" + type;

        if (type === "wifi") {
            url += "&ssid=" + encodeURIComponent(ssidInput.value) + "&password=" + encodeURIComponent(passwordInput.value);
        } else {
            url += "&input=" + encodeURIComponent(textInput.value);
        }

        qrCodeImg.src = url;
        qrCodeImg.classList.add("show");
        downloadBtn.href = url;
        downloadBtn.classList.remove("hidden");
    }

    textInput.addEventListener("input", generateQR);
    ssidInput.addEventListener("input", generateQR);
    passwordInput.addEventListener("input", generateQR);

    function toggleFields() {
        const type = document.querySelector('input[name="type"]:checked').value;
        if (type === "wifi") {
            textContainer.classList.add("hidden");
            wifiContainer.classList.remove("hidden");
        } else {
            wifiContainer.classList.add("hidden");
            textContainer.classList.remove("hidden");
        }
        generateQR();
    }

    document.querySelectorAll('input[name="type"]').forEach(radio => {
        radio.addEventListener("change", toggleFields);
    });

    toggleFields();

  
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let circles = [];
    const numCircles = 15;

    class Circle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = Math.random() * 40 + 10;
            this.color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.6)`;
            this.speedX = (Math.random() - 0.5) * 1.2;
            this.speedY = (Math.random() - 0.5) * 1.2;
        }

        move() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    for (let i = 0; i < numCircles; i++) {
        circles.push(new Circle());
    }

    function animateCircles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        circles.forEach(circle => {
            circle.move();
            circle.draw();
        });
        requestAnimationFrame(animateCircles);
    }

    animateCircles();
});
