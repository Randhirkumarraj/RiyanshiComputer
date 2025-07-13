// 12-hour clock + Hindi date
function updateClock() {
  const now = new Date();

  // Format time in 12-hour format
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;

  const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
  document.getElementById("clock").textContent = timeString;

  // Hindi date
  const hindiDate = new Intl.DateTimeFormat('hi-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(now);
  document.getElementById("date").textContent = hindiDate;
}
setInterval(updateClock, 1000);
updateClock();

// Typing text animation
const typingText = "💻 डिजिटल इंडिया - आत्मनिर्भर भारत की ओर 💻";
let index = 0;
function typeEffect() {
  if (index < typingText.length) {
    document.getElementById("typing").textContent += typingText.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

// Music toggle
function toggleMusic() {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// 📞 Call Now function
function callNow() {
  window.location.href = "tel:+917277110546";
}

// 📜 Scroll animation (reveal on scroll)
window.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll("section, .about, .contact, ul");
  for (let el of reveals) {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    } else {
      el.style.opacity = 0;
      el.style.transform = "translateY(40px)";
    }
    
  }
});
function callNow() {
  const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = "tel:+917277110546";
  } else {
    alert("यह फ़ोन कॉल सुविधा केवल मोबाइल में काम करती है।");
  }
}
// SEARCH FUNCTIONALITY
const searchInput = document.querySelector(".search-bar");

searchInput.addEventListener("keyup", function () {
  const filter = searchInput.value.toLowerCase();
  const allLinks = document.querySelectorAll("ul li");

  allLinks.forEach((li) => {
    const text = li.textContent.toLowerCase();
    if (text.includes(filter)) {
      li.style.display = "block";
    } else {
      li.style.display = "none";
    }
  });
});
// 1. Contact Form (basic alert)
document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("आपका संदेश भेज दिया गया है!");
});

// 2. Admin Login
function checkLogin() {
  const pass = document.getElementById("admin-pass").value;
  const msg = document.getElementById("login-msg");
  if (pass === "1234") {
    msg.innerText = "✅ लॉगिन सफल!";
    msg.style.color = "green";
  } else {
    msg.innerText = "❌ गलत पासवर्ड!";
    msg.style.color = "red";
  }
}

// 3. QR Code Generator (uses Google Chart API)
function generateQR() {
  const input = document.getElementById("qr-input").value;
  const qrDiv = document.getElementById("qr-result");
  if (input.trim() === "") return;
  qrDiv.innerHTML = `<img src="https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${encodeURIComponent(input)}" alt="QR Code">`;
}

// 4. PDF Download (uses print for now)
function downloadPDF() {
  window.print();
}
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  console.log("Dark mode toggled:", document.body.classList.contains("dark-mode"));
}