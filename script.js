/**
 * ==============================================================================
 * HAPPY BIRTHDAY KABEERA - MAIN JAVASCRIPT
 * 
 * 🎈 HOW TO CUSTOMIZE THIS WEBSITE:
 * Below is the configuration object (CONFIG). You can easily update your
 * friend's name, age, birthday date, photos, songs, memories, and wishes!
 * Every field is clearly marked for you.
 * ==============================================================================
 */

const CONFIG = {
  // 1. YOUR FRIEND'S DETAILS
  FRIEND_NAME: "Kabeera",
  AGE: 18, // Her upcoming age
  AGE_TEXT: "The Big 18", // Custom celebratory label
  BIRTHDAY_DATE: "2026-09-12", // Format: YYYY-MM-DD (e.g. tomorrow or actual date)
  
  // 2. HERO & LETTER MESSAGES
  BIRTHDAY_TITLE: "Happy Birthday, Kabeera! 🎂",
  HERO_SUBTITLE: "Today is all about celebrating YOU.",
  
  // 3. PHOTO GALLERY (Replace these placeholder URLs with her real photos!)
  // Pro tip: In VS Code, you can place her photos in an "images/" folder and use "images/photo1.jpg"
  PHOTO_URLS: [
    {
      url: "/src/assets/images/regenerated_image_1789157890850.jpg",
      caption: "One of my favorite memories ❤️"
    },
    {
      url: "/src/assets/images/regenerated_image_1789158609514.jpg",
      caption: "Look at youuuu 😂 smiling so bright!"
    },
    {
      url: "/src/assets/images/regenerated_image_1789158610413.jpg",
      caption: "This day was everything."
    },
    {
      url: "/src/assets/images/regenerated_image_1789158973463.jpg",
      caption: "Forever one of my favorite pictures."
    },
    {
      url: "/src/assets/images/regenerated_image_1789158974944.jpg",
      caption: "That golden hour glow ✨"
    },
    {
      url: "/src/assets/images/regenerated_image_1789158975917.jpg",
      caption: "Unfiltered laughter and pure joy."
    },
    {
      url: "/src/assets/images/regenerated_image_1789158976975.jpg",
      caption: "The calm before we laughed for 2 hours straight."
    },
    {
      url: "/src/assets/images/regenerated_image_1789158978048.jpg",
      caption: "Always matching each other's crazy energy 💖"
    }
  ],

  // 4. SONGS THAT REMIND YOU OF HER
  SONGS: [
    {
      title: "Say You Won't Let Go",
      artist: "James Arthur",
      reason: "I knew I loved you then... Forever one of our most special songs.",
      audioSrc: "/audio/say_you_wont_let_go.m4a",
      fallbackSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ca/5b/00/ca5b0049-9204-38a8-7e2e-bc7e79841b57/mzaf_3241303717288164662.plus.aac.p.m4a",
      youtubeUrl: "https://www.youtube.com/results?search_query=Say+You+Won%27t+Let+Go+James+Arthur"
    },
    {
      title: "I Like Me Better",
      artist: "Lauv",
      reason: "I like me better when I'm with you — everything is brighter with you around.",
      audioSrc: "/audio/i_like_me_better.m4a",
      fallbackSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/12/49/cc/1249cc81-a570-f4fe-ad01-c9d9fddf5601/mzaf_10704657862018478118.plus.aac.p.m4a",
      youtubeUrl: "https://www.youtube.com/results?search_query=I+Like+Me+Better+Lauv"
    },
    {
      title: "Somebody to You",
      artist: "The Vamps",
      reason: "All I wanna be is somebody to you! Unmatched energy, sing-alongs, and pure joy.",
      audioSrc: "/audio/somebody_to_you.m4a",
      fallbackSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c1/5c/eb/c15cebc7-107e-f490-7c11-bcf92e72035c/mzaf_4407236332251401117.plus.aac.p.m4a",
      youtubeUrl: "https://www.youtube.com/results?search_query=Somebody+to+You+The+Vamps"
    },
    {
      title: "A Million Dreams",
      artist: "The Greatest Showman",
      reason: "A million dreams for the world we're gonna make — here's to every single one of your dreams coming true!",
      audioSrc: "/audio/a_million_dreams.m4a",
      fallbackSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b6/ee/60/b6ee601d-5ecb-e898-b4d8-d8851d931003/mzaf_6107808481098948420.plus.aac.p.m4a",
      youtubeUrl: "https://www.youtube.com/results?search_query=A+Million+Dreams+The+Greatest+Showman"
    }
  ],

  // 5. TIMELINE / OUR STORY MOMENTS
  TIMELINE_ITEMS: [
    {
      tag: "The Beginning",
      title: "We Met",
      date: "October 2025",
      desc: "The universe knew what it was doing when our paths crossed. Little did I know that day would change my whole life."
    },
    {
      tag: "Core Memory",
      title: "First Crazy Memory",
      date: "November 2025",
      desc: "The keeping seat for you whenever Ameena and I came early. LATE COMER!"
    },
    {
      tag: "Bonding",
      title: "When We Became Inseparable",
      date: "2025",
      desc: "From going to math class together to everyone asking about us whenever one of us isn’t with the other. ❤️"
    },
    {
      tag: "Pure Comedy",
      title: "Our Funniest Moment",
      date: "2025",
      desc: "Every moment with you is funny, peaceful, lovely and chaotic at times."
    },
    {
      tag: "Adventure",
      title: "Our Best Adventure",
      date: "August 2026",
      desc: "Going to Emirate Mall to watch Spider-Man with you and abandoning the supposed third wheel."
    },
    {
      tag: "Right Now",
      title: "Today ❤️",
      date: "Present",
      desc: "Standing right here celebrating you, so proud of who you are, and excited for every single chapter ahead."
    }
  ],

  // 6. FUNNY MEMORIES & INSIDE JOKES
  FUNNY_MEMORIES: [
    {
      badge: "Inside Joke 😂",
      title: "\"Just 5 More Minutes\"",
      body: "Which we both know means at least an hour, a snack break, and 4 outfit changes before we actually walk out the door.",
      reaction: "Classic you 💀"
    },
    {
      badge: "Catchphrase 🗣️",
      title: "\"I'm Not Even Dramatic\"",
      body: "Followed immediately by the most dramatic gasp and a 20-minute reenactment of a 2-second minor inconvenience.",
      reaction: "Academy Award winner 🏆"
    },
    {
      badge: "Embarrassing Moment 🙈",
      title: "The Public Laugh Attack",
      body: "Remember when you tried to stifle your laugh in the quietest place and made that wheezing seal noise? I will never let you forget.",
      reaction: "Still rent-free in my mind 😭"
    },
    {
      badge: "Daily Habit 📱",
      title: "Sending 18 Reels at 2 AM",
      body: "Waking up to a whole dissertation of TikToks and memes, each one captioned: 'THIS IS LITERALLY YOU'.",
      reaction: "Accurate every time 💅"
    }
  ],

  // 7. THINGS I LOVE ABOUT YOU
  LOVE_ITEMS: [
    { icon: "❤️", title: "Your Heart", desc: "You care so deeply about the people in your life, with a genuine warmth that softens everything around you." },
    { icon: "😊", title: "Your Smile", desc: "It genuinely lights up any room you walk into. It's infectious, radiant, and impossible not to smile back at." },
    { icon: "💪", title: "Your Strength", desc: "The quiet resilience with which you handle tough days inspires me more than words can ever capture." },
    { icon: "✨", title: "Your Energy", desc: "Magnetic, positive, and full of sparkle. When you're excited about something, the whole room feels alive." },
    { icon: "🤞", title: "Your Loyalty", desc: "You stand by your people through thick and thin without hesitation. Having you in my corner is a blessing." },
    { icon: "😂", title: "Your Sense of Humor", desc: "Nobody makes me laugh until my stomach hurts the way you do. You're effortlessly hilarious." },
    { icon: "🌷", title: "Your Kindness", desc: "The small gentle gestures you do without expecting anything in return show what a beautiful soul you have." },
    { icon: "🥹", title: "Just... YOU", desc: "Unapologetically authentic, wonderfully weird, deeply loving, and completely irreplaceable." }
  ],

  // 8. WISHES FOR HER
  WISHES: [
    { icon: "🌟", text: "Endless happiness & deep peace" },
    { icon: "💖", text: "Love that feels safe, genuine & abundant" },
    { icon: "💰", text: "Financial abundance & dream career wins" },
    { icon: "✈️", text: "Passport full of stamps & wild adventures" },
    { icon: "🏆", text: "Every goal you set turning into reality" },
    { icon: "📸", text: "Unforgettable memories with people you love" },
    { icon: "🕊️", text: "A peaceful mind and sweet restful nights" },
    { icon: "✨", text: "Everything your heart has been praying for" }
  ],

  // 9. INTERACTIVE GIFTS CONTENT
  GIFTS: [
    {
      id: 1,
      title: "A Sweet Note",
      icon: "💌",
      message: "If I could give you one thing in life, I would give you the ability to see yourself through my eyes. Only then would you realize how truly special you are to me."
    },
    {
      id: 2,
      title: "A Golden Memory",
      icon: "📸",
      message: "Remember our midnight car talk under the stars? That was the moment I knew you'd be in my life forever. Here's to 1,000 more nights like that!"
    },
    {
      id: 3,
      title: "Best Friend Voucher",
      icon: "🎟️",
      message: "This official VIP Pass entitles Kabeera to: 1 free coffee/boba date on me, unlimited venting sessions, and 1 emergency late-night food run anytime!"
    },
    {
      id: 4,
      title: "A Birthday Wish",
      icon: "🌠",
      message: "May this upcoming year be the chapter where all your secret dreams, late-night prayers, and hard work bloom into beautiful reality."
    },
    {
      id: 5,
      title: "The Ultimate Surprise",
      icon: "👑",
      message: "You are the queen today and every day! Thank you for being the brightest light. Scroll down to blow out your birthday candles and see the final message!"
    }
  ]
};

/* ==============================================================================
   AUDIO SYNTHESIZER (No external audio file needed, runs natively!)
   Plays a sweet music-box acoustic chime chord progression for "Our Soundtrack"
   and sound effects for blowing candles and opening gifts!
   ============================================================================== */
class DreamyAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlayingMusic = false;
    this.timer = null;
    this.step = 0;
    
    // Romantic music-box notes (frequencies in Hz: C5, E5, G5, A5, C6, etc.)
    this.notes = [
      523.25, 659.25, 783.99, 880.00, 1046.50, 783.99, 659.25, 587.33,
      523.25, 659.25, 880.00, 1046.50, 1174.66, 1046.50, 880.00, 783.99
    ];
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playChime(freq, duration = 0.8, type = 'sine') {
    this.init();
    if (!this.ctx) return;
    
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    
    // Smooth bell-like envelope
    gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.18, this.ctx.currentTime + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  // Sound for opening gifts
  playGiftPop() {
    this.init();
    this.playChime(587.33, 0.4);
    setTimeout(() => this.playChime(880.00, 0.6), 80);
    setTimeout(() => this.playChime(1174.66, 0.8), 160);
  }

  // Sound for blowing candle
  playBlowSound() {
    this.init();
    this.playChime(440, 0.3, 'triangle');
  }

  // Celebratory sound for all candles blown
  playWishCelebration() {
    this.init();
    const melody = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    melody.forEach((freq, idx) => {
      setTimeout(() => this.playChime(freq, 0.7), idx * 100);
    });
  }

  // Toggle ambient music loop
  toggleSoundtrack(onProgressUpdate, onStateChange) {
    this.init();
    if (this.isPlayingMusic) {
      this.stopSoundtrack();
      if (onStateChange) onStateChange(false);
      return false;
    } else {
      this.startSoundtrack(onProgressUpdate);
      if (onStateChange) onStateChange(true);
      return true;
    }
  }

  startSoundtrack(onProgressUpdate) {
    this.isPlayingMusic = true;
    this.step = 0;
    
    const playNext = () => {
      if (!this.isPlayingMusic) return;
      const freq = this.notes[this.step % this.notes.length];
      this.playChime(freq, 0.9, 'sine');
      
      this.step++;
      const progressPercent = ((this.step % 32) / 32) * 100;
      if (onProgressUpdate) onProgressUpdate(progressPercent);
      
      this.timer = setTimeout(playNext, 450);
    };

    playNext();
  }

  stopSoundtrack() {
    this.isPlayingMusic = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}

const audioEngine = new DreamyAudioEngine();

/* ==============================================================================
   PARTICLES & CONFETTI ENGINE (High-performance vanilla Canvas)
   ============================================================================== */
class ConfettiEngine {
  constructor() {
    this.canvas = document.getElementById('confetti-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.isActive = false;
    
    this.colors = [
      '#f472b6', '#db2777', '#fb7185', '#d8b4fe', 
      '#fbcfe8', '#fef08a', '#ffffff', '#fbbf24'
    ];

    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst(count = 120, originX = window.innerWidth / 2, originY = window.innerHeight / 2) {
    if (!this.canvas) return;
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const velocity = 4 + Math.random() * 8;
      this.particles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity - 2,
        size: 5 + Math.random() * 7,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        opacity: 1,
        life: 0.98 + Math.random() * 0.015,
        type: Math.random() > 0.4 ? 'rect' : 'heart'
      });
    }

    if (!this.isActive) {
      this.isActive = true;
      this.loop();
    }
  }

  loop() {
    if (!this.isActive || !this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.18; // gravity
      p.vx *= 0.98;
      p.rotation += p.rotationSpeed;
      p.opacity *= p.life;

      this.ctx.save();
      this.ctx.globalAlpha = p.opacity;
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.fillStyle = p.color;

      if (p.type === 'rect') {
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.4);
      } else {
        // Draw miniature heart
        this.ctx.font = `${p.size * 1.5}px sans-serif`;
        this.ctx.fillText('❤️', -p.size / 2, p.size / 2);
      }

      this.ctx.restore();

      if (p.opacity < 0.02 || p.y > this.canvas.height + 50) {
        this.particles.splice(i, 1);
      }
    }

    if (this.particles.length > 0) {
      requestAnimationFrame(() => this.loop());
    } else {
      this.isActive = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

let confetti;

/* ==============================================================================
   DOM READY INITIALIZATION
   ============================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  confetti = new ConfettiEngine();

  // Populate dynamic CONFIG data
  populateData();

  // Initialize interactive features
  initWelcomeScreen();
  initCountdown();
  initGallery();
  initMusicPlayer();
  initCakeInteraction();
  initGiftBoxes();
  initLetter();
  initVideoPlayer();
  initFinalSurprise();
  initScrollSpy();
});

/* ==============================================================================
   DATA POPULATION (Injecting CONFIG values into DOM)
   ============================================================================== */
function populateData() {
  // Update name in titles
  document.querySelectorAll('.cfg-friend-name').forEach(el => {
    el.textContent = CONFIG.FRIEND_NAME;
  });

  // Update age
  const ageEl = document.getElementById('cfg-age');
  if (ageEl) ageEl.textContent = CONFIG.AGE_TEXT || `${CONFIG.AGE} Years of Radiance`;

  // Update birthday date formatted nicely
  const dateObj = new Date(CONFIG.BIRTHDAY_DATE + "T00:00:00");
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = dateObj.toLocaleDateString('en-US', options);
  
  const dateEl = document.getElementById('cfg-birthday-date');
  if (dateEl) dateEl.textContent = formattedDate;

  // Populate Timeline Items
  const timelineWrapper = document.getElementById('timeline-container');
  if (timelineWrapper) {
    timelineWrapper.innerHTML = '';
    CONFIG.TIMELINE_ITEMS.forEach((item, index) => {
      const el = document.createElement('div');
      el.className = 'timeline-item';
      el.innerHTML = `
        <div class="timeline-node">✨</div>
        <div class="timeline-content">
          <span class="timeline-date-badge">${item.tag} • ${item.date}</span>
          <h3 class="timeline-title">${item.title}</h3>
          <p class="timeline-desc">${item.desc}</p>
        </div>
      `;
      timelineWrapper.appendChild(el);
    });
  }

  // Populate Love Cards
  const loveGrid = document.getElementById('love-cards-grid');
  if (loveGrid) {
    loveGrid.innerHTML = '';
    CONFIG.LOVE_ITEMS.forEach(item => {
      const card = document.createElement('div');
      card.className = 'love-card';
      card.innerHTML = `
        <div class="love-card-inner">
          <div class="love-card-front">
            <div class="love-card-icon">${item.icon}</div>
            <h4 class="love-card-title">${item.title}</h4>
            <span class="love-card-hint">Hover or tap to flip ✨</span>
          </div>
          <div class="love-card-back">
            <p class="love-card-desc">${item.desc}</p>
          </div>
        </div>
      `;
      card.addEventListener('click', () => card.classList.toggle('flipped'));
      loveGrid.appendChild(card);
    });
  }

  // Populate Funny Memories
  const jokesGrid = document.getElementById('jokes-grid');
  if (jokesGrid) {
    jokesGrid.innerHTML = '';
    CONFIG.FUNNY_MEMORIES.forEach(joke => {
      const card = document.createElement('div');
      card.className = 'joke-card';
      card.innerHTML = `
        <span class="joke-badge">${joke.badge}</span>
        <h4 class="joke-title">${joke.title}</h4>
        <p class="joke-body">${joke.body}</p>
        <div class="joke-reaction">${joke.reaction}</div>
      `;
      card.addEventListener('click', () => {
        audioEngine.playChime(660, 0.3);
        confetti.burst(15, card.getBoundingClientRect().left + 100, card.getBoundingClientRect().top + 50);
      });
      jokesGrid.appendChild(card);
    });
  }

  // Populate Wishes
  const wishesGrid = document.getElementById('wishes-grid');
  if (wishesGrid) {
    wishesGrid.innerHTML = '';
    CONFIG.WISHES.forEach(wish => {
      const card = document.createElement('div');
      card.className = 'wish-card';
      card.innerHTML = `
        <div class="wish-icon-box">${wish.icon}</div>
        <div class="wish-text">${wish.text}</div>
      `;
      wishesGrid.appendChild(card);
    });
  }
}

/* ==============================================================================
   1. WELCOME SCREEN
   ============================================================================== */
function initWelcomeScreen() {
  const welcomeScreen = document.getElementById('welcome-screen');
  const openSurpriseBtn = document.getElementById('open-surprise-btn');
  const siteNav = document.getElementById('site-nav');

  if (!welcomeScreen || !openSurpriseBtn) return;

  openSurpriseBtn.addEventListener('click', () => {
    // Play celebratory chime & confetti
    audioEngine.playGiftPop();
    confetti.burst(150, window.innerWidth / 2, window.innerHeight / 2);

    // Fade out welcome screen
    welcomeScreen.classList.add('hidden');
    if (siteNav) siteNav.classList.add('visible');

    // Smooth scroll to top of hero
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==============================================================================
   3. BIRTHDAY COUNTDOWN
   ============================================================================== */
function initCountdown() {
  const daysEl = document.getElementById('count-days');
  const hoursEl = document.getElementById('count-hours');
  const minsEl = document.getElementById('count-mins');
  const secsEl = document.getElementById('count-secs');
  const countdownGrid = document.getElementById('countdown-grid');
  const itsYourDay = document.getElementById('its-your-day-banner');

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  function update() {
    const now = new Date().getTime();
    // Parse target date at 00:00:00 local time
    const target = new Date(CONFIG.BIRTHDAY_DATE + "T00:00:00").getTime();
    const diff = target - now;

    // Check if birthday has arrived or is today (within 24 hours of target)
    if (diff <= 0) {
      if (countdownGrid) countdownGrid.style.display = 'none';
      if (itsYourDay) itsYourDay.style.display = 'block';
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = String(d).padStart(2, '0');
    hoursEl.textContent = String(h).padStart(2, '0');
    minsEl.textContent = String(m).padStart(2, '0');
    secsEl.textContent = String(s).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* ==============================================================================
   4. PHOTO GALLERY & LIGHTBOX
   ============================================================================== */
let currentLightboxIndex = 0;

function initGallery() {
  const galleryGrid = document.getElementById('gallery-grid');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  if (!galleryGrid || !lightboxModal) return;

  galleryGrid.innerHTML = '';

  CONFIG.PHOTO_URLS.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    card.setAttribute('data-index', index);
    card.innerHTML = `
      <div class="gallery-img-wrapper">
        <img class="gallery-img" src="${item.url}" alt="Memory with ${CONFIG.FRIEND_NAME}" loading="lazy" />
        <span class="gallery-overlay-badge">Memory #${index + 1}</span>
      </div>
      <p class="gallery-caption">${item.caption}</p>
    `;

    card.addEventListener('click', () => {
      openLightbox(index);
    });

    galleryGrid.appendChild(card);
  });

  function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightbox();
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightbox() {
    const item = CONFIG.PHOTO_URLS[currentLightboxIndex];
    if (!item) return;
    if (lightboxImg) lightboxImg.src = item.url;
    if (lightboxCaption) lightboxCaption.textContent = item.caption;
    if (lightboxCounter) lightboxCounter.textContent = `${currentLightboxIndex + 1} of ${CONFIG.PHOTO_URLS.length}`;
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', () => {
      currentLightboxIndex = (currentLightboxIndex - 1 + CONFIG.PHOTO_URLS.length) % CONFIG.PHOTO_URLS.length;
      updateLightbox();
    });
  }
  if (lightboxNext) {
    lightboxNext.addEventListener('click', () => {
      currentLightboxIndex = (currentLightboxIndex + 1) % CONFIG.PHOTO_URLS.length;
      updateLightbox();
    });
  }

  // Close on outside click
  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft' && lightboxPrev) lightboxPrev.click();
    if (e.key === 'ArrowRight' && lightboxNext) lightboxNext.click();
  });
}

/* ==============================================================================
   6. PERSONAL BIRTHDAY LETTER
   ============================================================================== */
function initLetter() {
  const readLetterBtn = document.getElementById('read-letter-btn');
  const letterBody = document.getElementById('letter-body');

  if (!readLetterBtn || !letterBody) return;

  readLetterBtn.addEventListener('click', () => {
    const isExpanded = letterBody.classList.contains('expanded');
    if (isExpanded) {
      letterBody.classList.remove('expanded');
      readLetterBtn.innerHTML = 'Read My Letter 💌';
      letterBody.scrollIntoView({ behavior: 'smooth' });
    } else {
      letterBody.classList.add('expanded');
      readLetterBtn.innerHTML = 'Close Letter 💌';
      audioEngine.playGiftPop();
      confetti.burst(60, window.innerWidth / 2, window.innerHeight * 0.7);
    }
  });
}

/* ==============================================================================
   9. MUSIC SOUNDTRACK & PLAYER (Real Audio Playback)
   ============================================================================== */
function initMusicPlayer() {
  const audioEl = document.getElementById('soundtrack-audio-player');
  const playPauseBtn = document.getElementById('player-play-btn');
  const vinylDisc = document.getElementById('vinyl-disc');
  const activeTitle = document.getElementById('active-song-title');
  const activeArtist = document.getElementById('active-song-artist');
  const activeReason = document.getElementById('active-song-reason');
  const progressFill = document.getElementById('audio-progress-fill');
  const progressBar = document.getElementById('audio-progress-bar');
  const currentTimeDisplay = document.getElementById('audio-current-time');
  const durationTimeDisplay = document.getElementById('audio-duration-time');
  const playlistItems = document.getElementById('playlist-items');
  const navMusicToggle = document.getElementById('nav-music-toggle');
  const navMusicText = document.getElementById('nav-music-text');
  const muteBtn = document.getElementById('player-mute-btn');
  const youtubeLink = document.getElementById('player-youtube-link');
  const customAudioInput = document.getElementById('custom-audio-input');
  const statusText = document.getElementById('audio-status-text');

  let activeIndex = 0;
  let isPlaying = false;

  function formatTime(seconds) {
    if (isNaN(seconds) || seconds === Infinity) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  function setPlaybackUI(playing) {
    isPlaying = playing;
    if (playing) {
      if (playPauseBtn) playPauseBtn.innerHTML = '⏸';
      if (vinylDisc) vinylDisc.classList.add('spinning');
      if (navMusicToggle) navMusicToggle.classList.add('playing');
      if (navMusicText) navMusicText.textContent = 'Playing 🎵';
      if (statusText) statusText.textContent = 'Playing';
    } else {
      if (playPauseBtn) playPauseBtn.innerHTML = '▶';
      if (vinylDisc) vinylDisc.classList.remove('spinning');
      if (navMusicToggle) navMusicToggle.classList.remove('playing');
      if (navMusicText) navMusicText.textContent = 'Soundtrack 🎵';
      if (statusText) statusText.textContent = 'Paused';
    }

    // Update track badges in playlist
    document.querySelectorAll('.playlist-track').forEach((tr, i) => {
      const badge = tr.querySelector('.track-badge-play');
      if (i === activeIndex) {
        tr.classList.add('active');
        if (badge) badge.textContent = playing ? 'Playing ⏸' : 'Active ▶';
      } else {
        tr.classList.remove('active');
        if (badge) badge.textContent = 'Play ▶';
      }
    });
  }

  function loadSong(index, shouldPlay = false) {
    activeIndex = index;
    const song = CONFIG.SONGS[index];
    if (!song || !audioEl) return;

    if (activeTitle) activeTitle.textContent = song.title;
    if (activeArtist) activeArtist.textContent = song.artist;
    if (activeReason) activeReason.textContent = `“${song.reason}”`;
    if (youtubeLink && song.youtubeUrl) {
      youtubeLink.href = song.youtubeUrl;
    }

    if (progressFill) progressFill.style.width = '0%';
    if (currentTimeDisplay) currentTimeDisplay.textContent = '0:00';
    if (durationTimeDisplay) durationTimeDisplay.textContent = '0:30';

    audioEl.src = song.audioSrc;
    audioEl.load();

    // Fallback if local or network file has an issue
    audioEl.onerror = () => {
      if (song.fallbackSrc && audioEl.src !== song.fallbackSrc) {
        audioEl.src = song.fallbackSrc;
        audioEl.load();
        if (shouldPlay) {
          audioEl.play().then(() => setPlaybackUI(true)).catch(() => {});
        }
      }
    };

    if (shouldPlay) {
      audioEl.play().then(() => {
        setPlaybackUI(true);
      }).catch(err => {
        console.warn('Playback notice:', err);
        setPlaybackUI(false);
      });
    } else {
      setPlaybackUI(false);
    }
  }

  // Play / Pause toggle
  function togglePlay() {
    if (!audioEl) return;
    if (audioEl.paused) {
      audioEl.play().then(() => {
        setPlaybackUI(true);
      }).catch(err => {
        console.warn('Audio play prevented:', err);
      });
    } else {
      audioEl.pause();
      setPlaybackUI(false);
    }
  }

  if (playPauseBtn) playPauseBtn.addEventListener('click', togglePlay);
  if (navMusicToggle) navMusicToggle.addEventListener('click', togglePlay);

  // Time & Progress Updates
  if (audioEl) {
    audioEl.addEventListener('timeupdate', () => {
      if (!audioEl.duration) return;
      const progress = (audioEl.currentTime / audioEl.duration) * 100;
      if (progressFill) progressFill.style.width = `${progress}%`;
      if (currentTimeDisplay) currentTimeDisplay.textContent = formatTime(audioEl.currentTime);
      if (durationTimeDisplay) durationTimeDisplay.textContent = formatTime(audioEl.duration);
    });

    audioEl.addEventListener('loadedmetadata', () => {
      if (durationTimeDisplay && audioEl.duration) {
        durationTimeDisplay.textContent = formatTime(audioEl.duration);
      }
    });

    audioEl.addEventListener('ended', () => {
      // Auto-advance to next song
      const nextIdx = (activeIndex + 1) % CONFIG.SONGS.length;
      loadSong(nextIdx, true);
    });

    audioEl.addEventListener('play', () => setPlaybackUI(true));
    audioEl.addEventListener('pause', () => setPlaybackUI(false));
  }

  // Seek on progress bar click
  if (progressBar && audioEl) {
    progressBar.addEventListener('click', (e) => {
      const rect = progressBar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(1, clickX / rect.width));
      if (audioEl.duration) {
        audioEl.currentTime = percentage * audioEl.duration;
      }
    });
  }

  // Next / Previous buttons
  const prevBtn = document.getElementById('player-prev-btn');
  const nextBtn = document.getElementById('player-next-btn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const newIdx = (activeIndex - 1 + CONFIG.SONGS.length) % CONFIG.SONGS.length;
      loadSong(newIdx, isPlaying);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const newIdx = (activeIndex + 1) % CONFIG.SONGS.length;
      loadSong(newIdx, isPlaying);
    });
  }

  // Mute / Unmute
  if (muteBtn && audioEl) {
    muteBtn.addEventListener('click', () => {
      audioEl.muted = !audioEl.muted;
      muteBtn.textContent = audioEl.muted ? '🔇' : '🔊';
    });
  }

  // Custom audio file picker
  if (customAudioInput) {
    customAudioInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      const fileUrl = URL.createObjectURL(file);
      const customSong = {
        title: file.name.replace(/\.[^/.]+$/, ""),
        artist: "Custom Audio File",
        reason: "Your special uploaded soundtrack 🎵",
        audioSrc: fileUrl,
        fallbackSrc: fileUrl,
        youtubeUrl: `https://www.youtube.com/results?search_query=${encodeURIComponent(file.name)}`
      };

      CONFIG.SONGS.unshift(customSong);
      renderPlaylist();
      loadSong(0, true);
    });
  }

  // Render Playlist
  function renderPlaylist() {
    if (!playlistItems) return;
    playlistItems.innerHTML = '';
    CONFIG.SONGS.forEach((song, i) => {
      const item = document.createElement('div');
      item.className = `playlist-track ${i === activeIndex ? 'active' : ''}`;
      item.innerHTML = `
        <div class="track-left">
          <span class="track-num">${i + 1}</span>
          <div class="track-info">
            <h5>${song.title}</h5>
            <p>${song.artist}</p>
          </div>
        </div>
        <div class="track-right">
          ${song.youtubeUrl ? `<a href="${song.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="track-youtube-btn" title="Open YouTube" onclick="event.stopPropagation()">YouTube ↗</a>` : ''}
          <span class="track-badge-play">${i === activeIndex && isPlaying ? 'Playing ⏸' : 'Play ▶'}</span>
        </div>
      `;
      item.addEventListener('click', () => {
        if (i === activeIndex) {
          togglePlay();
        } else {
          loadSong(i, true);
        }
      });
      playlistItems.appendChild(item);
    });
  }

  renderPlaylist();
  loadSong(0, false);
}

/* ==============================================================================
   10. VIDEO MEMORY SECTION
   ============================================================================== */
function initVideoPlayer() {
  const playBtn = document.getElementById('video-play-btn');
  const videoPlayerFrame = document.getElementById('video-player-frame');
  const videoActivePlayer = document.getElementById('video-active-player');

  if (!playBtn || !videoPlayerFrame) return;

  const startPlayback = () => {
    if (videoActivePlayer) {
      videoActivePlayer.style.display = 'block';
      videoActivePlayer.play().catch(() => {});
      playBtn.style.display = 'none';
      const poster = document.getElementById('video-poster-img');
      if (poster) poster.style.display = 'none';
      const tint = document.querySelector('.video-overlay-tint');
      if (tint) tint.style.display = 'none';
    }
  };

  playBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    startPlayback();
  });

  videoPlayerFrame.addEventListener('click', (e) => {
    if (e.target !== videoActivePlayer) {
      startPlayback();
    }
  });
}

/* ==============================================================================
   12. INTERACTIVE GIFT BOXES
   ============================================================================== */
function initGiftBoxes() {
  const giftsGrid = document.getElementById('gifts-grid');
  const giftModal = document.getElementById('gift-modal');
  const giftModalIcon = document.getElementById('gift-modal-icon');
  const giftModalTitle = document.getElementById('gift-modal-title');
  const giftModalText = document.getElementById('gift-modal-text');
  const giftModalClose = document.getElementById('gift-modal-close');

  if (!giftsGrid || !giftModal) return;

  giftsGrid.innerHTML = '';

  CONFIG.GIFTS.forEach((gift, idx) => {
    const item = document.createElement('div');
    item.className = 'gift-box-item';
    item.innerHTML = `
      <div class="gift-box-visual" id="gift-box-${gift.id}">
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <!-- Shadow -->
          <ellipse cx="50" cy="88" rx="35" ry="8" fill="rgba(219,39,119,0.15)"/>
          <!-- Box Base -->
          <rect x="20" y="44" width="60" height="42" rx="6" fill="#f472b6" />
          <rect x="44" y="44" width="12" height="42" fill="#db2777" />
          <!-- Lid with Ribbon -->
          <g class="gift-lid">
            <rect x="16" y="32" width="68" height="14" rx="4" fill="#fb7185" />
            <rect x="44" y="32" width="12" height="14" fill="#be123c" />
            <!-- Bow -->
            <path d="M44,32 C36,18 25,28 44,32 Z" fill="#fda4af"/>
            <path d="M56,32 C64,18 75,28 56,32 Z" fill="#fda4af"/>
            <circle cx="50" cy="32" r="5" fill="#f43f5e"/>
          </g>
        </svg>
      </div>
      <h4 class="gift-title">Gift #${idx + 1}</h4>
      <span class="gift-status" id="gift-status-${gift.id}">Tap to Open 🎁</span>
    `;

    item.addEventListener('click', (e) => {
      item.classList.add('opened');
      const statusEl = document.getElementById(`gift-status-${gift.id}`);
      if (statusEl) statusEl.textContent = "Opened ✨";

      audioEngine.playGiftPop();
      const rect = item.getBoundingClientRect();
      confetti.burst(60, rect.left + rect.width / 2, rect.top + rect.height / 2);

      // Open Modal
      if (giftModalIcon) giftModalIcon.textContent = gift.icon;
      if (giftModalTitle) giftModalTitle.textContent = gift.title;
      if (giftModalText) giftModalText.textContent = gift.message;

      setTimeout(() => {
        giftModal.classList.add('active');
      }, 350);
    });

    giftsGrid.appendChild(item);
  });

  if (giftModalClose) {
    giftModalClose.addEventListener('click', () => {
      giftModal.classList.remove('active');
    });
  }

  giftModal.addEventListener('click', (e) => {
    if (e.target === giftModal) giftModal.classList.remove('active');
  });
}

/* ==============================================================================
   13. BIRTHDAY CAKE & CANDLE INTERACTION
   ============================================================================== */
function initCakeInteraction() {
  const candles = document.querySelectorAll('.candle');
  const blowAllBtn = document.getElementById('blow-candles-btn');
  const cakeWishBanner = document.getElementById('cake-wish-banner');
  let remainingCandles = candles.length;

  candles.forEach(candle => {
    candle.addEventListener('click', () => {
      if (!candle.classList.contains('extinguished')) {
        extinguishCandle(candle);
      }
    });
  });

  if (blowAllBtn) {
    blowAllBtn.addEventListener('click', () => {
      candles.forEach((c, idx) => {
        setTimeout(() => {
          if (!c.classList.contains('extinguished')) {
            extinguishCandle(c);
          }
        }, idx * 150);
      });
    });
  }

  function extinguishCandle(candle) {
    if (candle.classList.contains('extinguished')) return;
    candle.classList.add('extinguished');
    audioEngine.playBlowSound();
    remainingCandles--;

    if (remainingCandles <= 0) {
      // All candles blown!
      setTimeout(() => {
        audioEngine.playWishCelebration();
        confetti.burst(180, window.innerWidth / 2, window.innerHeight * 0.6);
        if (cakeWishBanner) cakeWishBanner.style.display = 'block';
        if (blowAllBtn) {
          blowAllBtn.textContent = 'Wish Made! ✨🎂';
          blowAllBtn.disabled = true;
          blowAllBtn.style.opacity = '0.8';
        }
      }, 400);
    }
  }
}

/* ==============================================================================
   15. FINAL SURPRISE MODAL
   ============================================================================== */
function initFinalSurprise() {
  const openFinalBtn = document.getElementById('open-final-surprise-btn');
  const finalModal = document.getElementById('final-reveal-modal');
  const closeFinalBtn = document.getElementById('final-modal-close-btn');

  if (!openFinalBtn || !finalModal) return;

  openFinalBtn.addEventListener('click', () => {
    audioEngine.playWishCelebration();
    // Huge confetti cannon!
    confetti.burst(250, window.innerWidth / 2, window.innerHeight / 2);
    setTimeout(() => {
      confetti.burst(150, window.innerWidth * 0.25, window.innerHeight * 0.4);
      confetti.burst(150, window.innerWidth * 0.75, window.innerHeight * 0.4);
    }, 300);

    finalModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  function closeFinal() {
    finalModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeFinalBtn) {
    closeFinalBtn.addEventListener('click', closeFinal);
  }

  finalModal.addEventListener('click', (e) => {
    if (e.target === finalModal) closeFinal();
  });
}

/* ==============================================================================
   16. NAVIGATION & SMOOTH SCROLL SPY
   ============================================================================== */
function initScrollSpy() {
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const links = document.querySelectorAll('.nav-link');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    links.forEach(l => {
      l.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // Active link highlighter
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        links.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}
