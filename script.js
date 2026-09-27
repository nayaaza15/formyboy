const openGift = document.getElementById("openGift");
const dashboard = document.getElementById("dashboard");
const audio = document.getElementById("birthdayAudio");
const musicToggle = document.getElementById("musicToggle");
const chooseSong = document.getElementById("chooseSong");
const audioFile = document.getElementById("audioFile");
const particles = document.getElementById("particles");
const confetti = document.getElementById("confetti");

let audioReady = false;

function makeParticles() {
  const symbols = ["♡", "✦", "✧", "·"];
  for (let i = 0; i < 26; i++) {
    const p = document.createElement("span");
    p.className = "particle";
    p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    p.style.left = `${Math.random() * 100}%`;
    p.style.fontSize = `${10 + Math.random() * 13}px`;
    p.style.animationDuration = `${10 + Math.random() * 12}s`;
    p.style.animationDelay = `${Math.random() * -18}s`;
    particles.appendChild(p);
  }
}

function makeConfetti() {
  confetti.innerHTML = "";
  for (let i = 0; i < 70; i++) {
    const c = document.createElement("span");
    c.className = "confetto";
    c.style.left = `${Math.random() * 100}%`;
    c.style.top = `${-10 - Math.random() * 20}%`;
    c.style.animationDelay = `${Math.random() * .45}s`;
    c.style.transform = `rotate(${Math.random() * 360}deg)`;
    confetti.appendChild(c);
  }
  setTimeout(() => confetti.innerHTML = "", 2400);
}

function revealOnScroll() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(item => observer.observe(item));
}

openGift.addEventListener("click", async () => {
  document.body.classList.add("gift-open");
  makeConfetti();

  setTimeout(() => {
    document.getElementById("opening").style.display = "none";
    dashboard.classList.add("visible");
    dashboard.scrollIntoView({ behavior: "smooth", block: "start" });
    revealOnScroll();
  }, 500);

  // Browser mengizinkan pemutaran karena klik ini adalah interaksi pengguna.
  if (audioReady) {
    try {
      await audio.play();
      musicToggle.textContent = "❚❚";
    } catch {
      musicToggle.textContent = "▶";
    }
  }
});

musicToggle.addEventListener("click", async () => {
  if (!audioReady) {
    alert("Pilih file lagu MP3 terlebih dahulu lewat tombol “pilih lagu”.");
    return;
  }

  if (audio.paused) {
    try {
      await audio.play();
      musicToggle.textContent = "❚❚";
    } catch {
      alert("Lagu belum bisa diputar. Pastikan file musik valid.");
    }
  } else {
    audio.pause();
    musicToggle.textContent = "▶";
  }
});

chooseSong.addEventListener("click", () => audioFile.click());

audioFile.addEventListener("change", () => {
  const file = audioFile.files[0];
  if (!file) return;

  const url = URL.createObjectURL(file);
  audio.src = url;
  audioReady = true;
  chooseSong.textContent = "lagu siap ♫";
  musicToggle.textContent = "▶";
});

audio.addEventListener("ended", () => {
  musicToggle.textContent = "▶";
});

makeParticles();
