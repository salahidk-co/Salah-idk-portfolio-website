const canvas = document.getElementById("hero-canvas");
const ctx = canvas.getContext("2d");

let width, height;

// Mouse state
const mouse = {
  x: null,
  y: null,
};

const heroSection = document.querySelector(".hero-section");

// Throttled Mouse Move
let lastMouseTime = 0;
const MOUSE_THROTTLE = 16; // ~60fps

window.addEventListener("mousemove", (e) => {
  const now = Date.now();
  if (now - lastMouseTime < MOUSE_THROTTLE) return;
  lastMouseTime = now;

  const rect = canvas.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;

  // CSS variable updates removed - overlay effect no longer needed
});

window.addEventListener("mouseleave", () => {
  mouse.x = null;
  mouse.y = null;
});

// Navbar scroll effect
const navbar = document.querySelector(".navbar");
let lastScrollTime = 0;
window.addEventListener(
  "scroll",
  () => {
    const now = Date.now();
    if (now - lastScrollTime < 50) return; // Throttle scroll check
    lastScrollTime = now;

    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  },
  { passive: true }
);

// Text Shuffling Animation
const words = ["modern", "smooth", "fast", "responsive"];
const shuffleElement = document.querySelector(".shuffle-text");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    shuffleElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 50;
  } else {
    shuffleElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 100;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    typeSpeed = 2000; // Pause at end
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 500; // Pause before typing next
  }

  setTimeout(typeEffect, typeSpeed);
}

// Translations
const translations = {
  en: {
    nav: {
      about: "About",
      certifications: "Certifications",
      services: "Services",
      projects: "Projects",
      contact: "Contact Me",
    },
    hero: {
      greeting: "Hi! I'm ",
      subtitle: "i'm here to make your website",
    },
    about: {
      title: "About Me",
      p1: "I’m a Full Stack Developer ssionate about creating dynamic, responsive, and user-friendly web applications. With experience in both front-end and back-end development, I enjoy transforming ideas into clean, high-performing digital solutions.",
      p2: "Currently preparing for a career in Cybersecurity Engineering, I’m focused on network security, ethical hacking, and threat analysis. I aim to understand how systems work, identify vulnerabilities, and build strong defense strategies to help secure digital environments.",
    },
    certifications: {
      title: "Certifications",
      fullstack: {
        title: "FullStack Developer",
        desc: "Mastery of frontend & backend technologies.",
      },
      js: {
        title: "JS Certification",
        desc: "Advanced JavaScript concepts & ES6+.",
      },
      css: {
        title: "CSS Certification",
        desc: "Responsive design, Flexbox & Grid.",
      },
      wordpress: {
        title: "WordPress Certification",
        desc: "Theme development & customization.",
      },
      cyber: {
        title: "Cybersecurity Certification",
        desc: "Foundations of Cybersecurity Essentials.",
      },
    },
    services: {
      title: "Services",
      webdev: {
        title: "Web Development",
        desc: "Modern, responsive websites tailored to your needs.",
      },
      branding: {
        title: "Branding",
        desc: "Unique visual identities that leave a lasting impression.",
      },
      webdesign: {
        title: "Web Design",
        desc: "Intuitive and beautiful designs for better user experience.",
      },
      more: "More",
    },
    modal: {
      included: "What's Included:",
      starting: "Starting at",
      getstarted: "Get Started",
    },
    projects: {
      title: "Projects",
      visit: "Visit Website",
      asendens: {
        desc: "Asendens is a French cabinet d'expertise comptable supporting entrepreneurs with accounting, tax, and business management solutions. Their website was built to be responsive, dynamic, and user-friendly, providing clear navigation, service highlights, and an engaging professional design.",
      },
      ekibio: {
        desc: "Ekibio is a leader in organic food products, committed to sustainability and healthy living. The platform showcases their wide range of brands and commitments to the environment. I developed a clean, nature-inspired interface that highlights their organic values while ensuring a smooth shopping experience.",
      },
      soinsent: {
        desc: "Soinsent offers elegance and luxury through its exclusive fragrance collection. The website reflects this sophistication with a minimalist, high-end design, featuring smooth animations and a premium shopping journey that immerses users in the world of luxury scents.",
      },
      riwaq: {
        desc: "From Morocco to the World, Riwaq Trade connects international markets with high-quality Moroccan products. The site serves as a B2B portal, emphasizing trust, reliability, and global reach through a professional corporate design and easy-to-navigate catalog.",
      },
    },
    contact: {
      title: "Get In Touch",
      name: "Your Name",
      email: "Your Email",
      project: "Tell Me About Your Project",
      send: "Send Message",
      email_text: "Or email me directly at:",
    },
    footer: {
      quicklinks: "Quick Links",
      connect: "Connect",
    },
  },
  fr: {
    nav: {
      about: "À Propos",
      certifications: "Certifications",
      services: "Services",
      projects: "Projets",
      contact: "Contactez-moi",
    },
    hero: {
      greeting: "Salut! Je suis ",
      subtitle: "je suis là pour rendre votre site",
    },
    about: {
      title: "À Propos",
      p1: "Je suis un développeur Full Stack passionné par la création d'applications web dynamiques, réactives et conviviales. Avec de l'expérience en développement front-end et back-end, j'aime transformer des idées en solutions numériques propres et performantes.",
      p2: "Actuellement en préparation pour une carrière en ingénierie de la cybersécurité, je me concentre sur la sécurité des réseaux, le piratage éthique et l'analyse des menaces. Je vise à comprendre le fonctionnement des systèmes, identifier les vulnérabilités et élaborer des stratégies de défense solides pour sécuriser les environnements numériques.",
    },
    certifications: {
      title: "Certifications",
      fullstack: {
        title: "Développeur FullStack",
        desc: "Maîtrise des technologies frontend & backend.",
      },
      js: {
        title: "Certification JS",
        desc: "Concepts JavaScript avancés & ES6+.",
      },
      css: {
        title: "Certification CSS",
        desc: "Design réactif, Flexbox & Grid.",
      },
      wordpress: {
        title: "Certification WordPress",
        desc: "Développement & personnalisation de thèmes.",
      },
      cyber: {
        title: "Certification Cybersécurité",
        desc: "Fondamentaux essentiels de la cybersécurité.",
      },
    },
    services: {
      title: "Services",
      webdev: {
        title: "Développement Web",
        desc: "Sites web modernes et réactifs adaptés à vos besoins.",
      },
      branding: {
        title: "Branding",
        desc: "Identités visuelles uniques qui marquent les esprits.",
      },
      webdesign: {
        title: "Web Design",
        desc: "Designs intuitifs et beaux pour une meilleure expérience utilisateur.",
      },
      more: "Plus",
    },
    modal: {
      included: "Ce qui est inclus :",
      starting: "À partir de",
      getstarted: "Commencer",
    },
    projects: {
      title: "Projets",
      visit: "Visiter le site",
      asendens: {
        desc: "Asendens est un cabinet d'expertise comptable français accompagnant les entrepreneurs avec des solutions comptables, fiscales et de gestion. Leur site web a été conçu pour être réactif, dynamique et convivial, offrant une navigation claire et un design professionnel engageant.",
      },
      ekibio: {
        desc: "Ekibio est un leader des produits alimentaires biologiques, engagé pour la durabilité et une vie saine. La plateforme présente leur large gamme de marques et leurs engagements environnementaux. J'ai développé une interface propre inspirée de la nature qui met en valeur leurs valeurs biologiques tout en assurant une expérience d'achat fluide.",
      },
      soinsent: {
        desc: "Soinsent offre élégance et luxe à travers sa collection exclusive de parfums. Le site web reflète cette sophistication avec un design minimaliste haut de gamme, des animations fluides et un parcours d'achat premium qui immerge les utilisateurs dans le monde des parfums de luxe.",
      },
      riwaq: {
        desc: "Du Maroc au monde, Riwaq Trade connecte les marchés internationaux avec des produits marocains de haute qualité. Le site sert de portail B2B, mettant l'accent sur la confiance, la fiabilité et la portée mondiale grâce à un design d'entreprise professionnel et un catalogue facile à naviguer.",
      },
    },
    contact: {
      title: "Contactez-moi",
      name: "Votre Nom",
      email: "Votre Email",
      project: "Parlez-moi de votre projet",
      send: "Envoyer le message",
      email_text: "Ou envoyez-moi un email directement à :",
    },
    footer: {
      quicklinks: "Liens Rapides",
      connect: "Connecter",
    },
  },
};

// Language Toggle Logic
// Language Toggle Logic
const langToggleBtns = document.querySelectorAll(".lang-toggle");
let currentLang = localStorage.getItem("language") || "en";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("language", lang);

  // Update text content
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const keys = key.split(".");
    let value = translations[lang];
    keys.forEach((k) => {
      if (value) value = value[k];
    });

    if (value) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        if (element.getAttribute("placeholder")) {
        }
      } else {
        element.textContent = value;
      }

      // Special handling for placeholders
      if (key === "contact.name")
        document.getElementById("name").placeholder =
          lang === "en" ? "John Doe" : "Jean Dupont";
      if (key === "contact.email")
        document.getElementById("email").placeholder =
          lang === "en" ? "john@example.com" : "jean@exemple.com";
      if (key === "contact.project")
        document.getElementById("project").placeholder =
          lang === "en"
            ? "Describe your project..."
            : "Décrivez votre projet...";
    }
  });

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Toggle Flags for ALL buttons
  langToggleBtns.forEach((btn) => {
    const flagFr = btn.querySelector(".flag-fr");
    const flagUs = btn.querySelector(".flag-us");
    const langText = btn.querySelector(".lang-text");

    if (flagFr && flagUs) {
      if (lang === "en") {
        flagFr.style.display = "block";
        flagUs.style.display = "none";
        if (langText) langText.textContent = "Français";
      } else {
        flagFr.style.display = "none";
        flagUs.style.display = "block";
        if (langText) langText.textContent = "English";
      }
    }
  });
}

// Initialize Language
setLanguage(currentLang);

// Event Listeners for all toggle buttons
langToggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const newLang = currentLang === "en" ? "fr" : "en";
    setLanguage(newLang);
  });
});

// Start typing effect if element exists
if (shuffleElement) {
  typeEffect();
}

// Cursor-Following Stars System
class Star {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 0.5; // Random velocity
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 2 + 1;
    this.opacity = Math.random() * 0.5 + 0.5;
    this.twinkleSpeed = Math.random() * 0.02 + 0.01;
    this.twinkleDirection = Math.random() > 0.5 ? 1 : -1;
  }

  update(mouseX, mouseY) {
    // Random movement
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off edges
    if (this.x < 0 || this.x > width) this.vx = -this.vx;
    if (this.y < 0 || this.y > height) this.vy = -this.vy;

    // Avoid cursor (repulsion effect)
    if (mouseX !== null && mouseY !== null) {
      const dx = this.x - mouseX;
      const dy = this.y - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const avoidDistance = 150; // Distance to start avoiding

      if (distance < avoidDistance && distance > 0) {
        // Push away from cursor
        const force = (avoidDistance - distance) / avoidDistance;
        const pushX = (dx / distance) * force * 3;
        const pushY = (dy / distance) * force * 3;

        this.x += pushX;
        this.y += pushY;
      }
    }

    // Twinkle effect
    this.opacity += this.twinkleSpeed * this.twinkleDirection;
    if (this.opacity > 1 || this.opacity < 0.3) {
      this.twinkleDirection *= -1;
    }
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.opacity;

    // Draw star shape
    const starColor = getComputedStyle(document.body)
      .getPropertyValue("--text-color")
      .trim();
    ctx.fillStyle = starColor;
    ctx.shadowBlur = 10;
    ctx.shadowColor = starColor;

    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
      const x = this.x + Math.cos(angle) * this.size;
      const y = this.y + Math.sin(angle) * this.size;

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }

      // Inner point
      const innerAngle = angle + Math.PI / 5;
      const innerX = this.x + Math.cos(innerAngle) * (this.size * 0.5);
      const innerY = this.y + Math.sin(innerAngle) * (this.size * 0.5);
      ctx.lineTo(innerX, innerY);
    }
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }
}

const starCount = 80;
let stars = [];

function initStars() {
  stars = [];

  for (let i = 0; i < starCount; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    stars.push(new Star(x, y));
  }
}

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

// Optimization: Visibility Observer for Hero
let isHeroVisible = true;
const heroObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      isHeroVisible = entry.isIntersecting;
    });
  },
  { threshold: 0 }
);

if (heroSection) {
  heroObserver.observe(heroSection);
}

function animate() {
  if (!isHeroVisible) {
    requestAnimationFrame(animate);
    return;
  }

  ctx.clearRect(0, 0, width, height);

  const currentMouseX = mouse.x;
  const currentMouseY = mouse.y;

  for (let i = 0; i < stars.length; i++) {
    stars[i].update(currentMouseX, currentMouseY);
    stars[i].draw();
  }

  requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
  resize();
  initStars();
});

resize();
initStars();
animate();

// Scroll Animations
// Services Particle System
class ServicesParticles {
  constructor() {
    this.canvas = document.getElementById("services-canvas");
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.hoveredCard = null;
    this.isVisible = false; // Optimization flag

    this.resize();
    this.initParticles();
    this.addListeners();
    this.setupObserver(); // Setup visibility observer
    this.animate();

    window.addEventListener("resize", () => this.resize());
  }

  setupObserver() {
    const section = document.getElementById("services");
    if (section) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            this.isVisible = entry.isIntersecting;
          });
        },
        { threshold: 0 }
      );
      observer.observe(section);
    }
  }

  resize() {
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    this.initParticles();
  }

  initParticles() {
    this.particles = [];
    const density = 6000; // Higher density for star field
    const count = (this.canvas.width * this.canvas.height) / density;

    for (let i = 0; i < count; i++) {
      const vx = (Math.random() - 0.5) * 0.5;
      const vy = (Math.random() - 0.5) * 0.5;
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: vx,
        vy: vy,
        baseVx: vx,
        baseVy: vy,
        size: Math.random() * 2 + 0.5, // Varied star sizes
        alpha: Math.random() * 0.5 + 0.3, // Twinkle effect base
        flashSpeed: Math.random() * 0.02 + 0.005,
      });
    }
  }

  addListeners() {
    const cards = document.querySelectorAll(".service-card");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        const rect = card.getBoundingClientRect();
        const canvasRect = this.canvas.getBoundingClientRect();
        this.hoveredCard = {
          x: rect.left + rect.width / 2 - canvasRect.left,
          y: rect.top + rect.height / 2 - canvasRect.top,
          radius: Math.min(rect.width, rect.height) / 1.5, // Tighter circle
        };
      });

      card.addEventListener("mouseleave", () => {
        if (this.hoveredCard) {
          this.explodeParticles(this.hoveredCard.x, this.hoveredCard.y);
        }
        this.hoveredCard = null;
      });
    });
  }

  explodeParticles(x, y) {
    this.particles.forEach((p) => {
      const dx = p.x - x;
      const dy = p.y - y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 300) {
        // If it was likely part of the formation
        // Give it a kick away from center
        const force = (300 - dist) / 300;
        const angle = Math.atan2(dy, dx);
        const burstSpeed = 4 + Math.random() * 4; // Speed of burst

        p.vx = Math.cos(angle) * burstSpeed * force + p.baseVx;
        p.vy = Math.sin(angle) * burstSpeed * force + p.baseVy;
      }
    });
  }

  animate() {
    if (!this.isVisible) {
      requestAnimationFrame(() => this.animate());
      return;
    }

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const particleColor = getComputedStyle(document.body)
      .getPropertyValue("--text-color")
      .trim();

    this.particles.forEach((p) => {
      // 1. Random Movement (Base state)
      if (!this.hoveredCard) {
        p.x += p.vx;
        p.y += p.vy;

        // Return to normal speed (damping)
        p.vx += (p.baseVx - p.vx) * 0.05;
        p.vy += (p.baseVy - p.vy) * 0.05;

        // Wrap around screen
        if (p.x < 0) p.x = this.canvas.width;
        if (p.x > this.canvas.width) p.x = 0;
        if (p.y < 0) p.y = this.canvas.height;
        if (p.y > this.canvas.height) p.y = 0;
      } else {
        // 2. Form Circle around Card
        const dx = this.hoveredCard.x - p.x;
        const dy = this.hoveredCard.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const targetRadius = this.hoveredCard.radius;

        // Interaction range - only affect nearby particles
        if (dist < 300) {
          // Move towards the ring (targetRadius)
          const distToRing = dist - targetRadius;
          const force = distToRing * 0.1; // Stronger pull to ring

          if (dist > 0) {
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;

            // Rotate around center (Tangential movement)
            const rotSpeed = 3; // Faster rotation
            p.x += (dy / dist) * rotSpeed;
            p.y -= (dx / dist) * rotSpeed;
          }
        } else {
          // Resume slow drift if outside range
          p.x += p.vx;
          p.y += p.vy;
        }
      }

      // Twinkle Effect
      p.alpha += p.flashSpeed;
      if (p.alpha > 1 || p.alpha < 0.2) p.flashSpeed = -p.flashSpeed;

      // Draw Star
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = particleColor; // Use dynamic color
      this.ctx.globalAlpha = Math.abs(p.alpha); // Use globalAlpha for opacity
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = particleColor;
      this.ctx.fill();
      this.ctx.shadowBlur = 0; // Reset shadow
      this.ctx.globalAlpha = 1; // Reset alpha
    });

    requestAnimationFrame(() => this.animate());
  }
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  new ServicesParticles();
});

// Existing Observer Code
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");

      // Stagger effect for grids
      if (
        entry.target.classList.contains("cert-grid") ||
        entry.target.classList.contains("projects-grid")
      ) {
        const children = entry.target.children;
        Array.from(children).forEach((child, index) => {
          setTimeout(() => {
            child.classList.add("visible");
          }, index * 150);
        });
      }
      // Stop observing once visible to save resources
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Service Data
const serviceData = {
  "web-dev": {
    title: "Web Development",
    description:
      "We build fast, responsive, and scalable websites using modern technologies. From simple landing pages to complex web applications, we ensure your digital presence is robust and effective.",
    features: [
      "Custom Frontend Development (React, Vue, etc.)",
      "Backend API Integration",
      "Database Design & Management",
      "Performance Optimization",
    ],
    price: "$250",
  },
  branding: {
    title: "Branding",
    description:
      "Create a unique identity that resonates with your audience. We craft memorable logos, color palettes, and brand guidelines that tell your story.",
    features: [
      "Logo Design",
      "Brand Identity Guidelines",
      "Typography & Color Selection",
      "Social Media Assets",
    ],
    price: "$150",
  },
  "web-design": {
    title: "Web Design",
    description:
      "User-centric design that combines aesthetics with functionality. We create intuitive interfaces that engage users and drive conversions.",
    features: [
      "UI/UX Design",
      "Wireframing & Prototyping",
      "Mobile-First Design",
      "Interactive Elements",
    ],
    price: "$200",
  },
};

// Modal Functions
function openModal(serviceId) {
  const modal = document.getElementById("service-modal");
  const data = serviceData[serviceId];

  if (data) {
    document.getElementById("modal-title").textContent = data.title;
    document.getElementById("modal-description").textContent = data.description;
    document.getElementById("modal-price").textContent = data.price;

    const featuresList = document.getElementById("modal-features");
    featuresList.innerHTML = "";
    data.features.forEach((feature) => {
      const li = document.createElement("li");
      li.textContent = feature;
      featuresList.appendChild(li);
    });

    modal.style.display = "flex";
    // Trigger reflow
    void modal.offsetWidth;
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scrolling
  }
}

function closeModal() {
  const modal = document.getElementById("service-modal");
  modal.classList.remove("active");
  setTimeout(() => {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Restore scrolling
  }, 300); // Wait for transition
}

// Close modal when clicking outside or on close button
window.onclick = function (event) {
  const modal = document.getElementById("service-modal");
  if (event.target == modal) {
    closeModal();
  }
};

// Close modal with close button (span)
document.querySelector(".close-modal").addEventListener("click", closeModal);

// Close modal with Escape key
window.addEventListener("keydown", (e) => {
  const modal = document.getElementById("service-modal");
  if (e.key === "Escape" && modal.style.display === "flex") {
    closeModal();
  }
});

document
  .querySelectorAll(
    ".section-title, .about-text, .about-image, .services-container, .cert-grid"
  )
  .forEach((el) => {
    observer.observe(el);
  });

document
  .querySelectorAll(".cert-grid, .services-grid, .projects-grid")
  .forEach((el) => {
    observer.observe(el);
  });

// 3D Tilt Effect for Service and Cert Cards
const cards3D = document.querySelectorAll(".service-card, .cert-card");

cards3D.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation (max 15 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Invert Y axis for natural tilt
    const rotateY = ((x - centerX) / centerX) * 10;

    requestAnimationFrame(() => {
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
  });
});

// Scroll-Linked Project Image Reveal
const projectItems = document.querySelectorAll(".project-item");
const imageContainer = document.querySelector(".sticky-image-container");
const projectsSection = document.getElementById("projects");

// Setup: Create and stack images
const projectImages = [];
projectItems.forEach((item, index) => {
  const imageSrc = item.getAttribute("data-image");
  const img = document.createElement("img");
  img.src = imageSrc;
  img.alt = `Project ${index + 1}`;
  img.style.zIndex = index;
  imageContainer.appendChild(img);
  projectImages.push(img);
});

// Optimization: Only run project scroll logic when visible
let isProjectsVisible = false;
if (projectsSection) {
  const projectsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isProjectsVisible = entry.isIntersecting;
        if (isProjectsVisible) {
          // Trigger update immediately when becoming visible to ensure images are shown
          requestAnimationFrame(updateProjectImages);
        }
      });
    },
    { threshold: 0 }
  );
  projectsObserver.observe(projectsSection);
}

// Scroll handler with RAF for performance
let ticking = false;

function updateProjectImages() {
  // Optimization: Skip if projects section is not visible
  if (!isProjectsVisible) return;

  projectItems.forEach((item, index) => {
    if (index === 0) {
      // First image is always fully visible
      projectImages[0].style.clipPath = "inset(0 0 0 0)";
      return;
    }

    const rect = item.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calculate progress: 0 when item enters bottom, 1 when it reaches middle
    const triggerPoint = windowHeight * 0.7; // Start revealing when 70% down viewport
    const endPoint = windowHeight * 0.3; // Fully revealed at 30% down viewport

    let progress = 0;
    if (rect.top < triggerPoint) {
      progress = Math.min(
        1,
        (triggerPoint - rect.top) / (triggerPoint - endPoint)
      );
    }

    // Apply clip-path: reveal from top to bottom
    const clipValue = Math.max(0, 100 - progress * 100);
    projectImages[index].style.clipPath = `inset(0 0 ${clipValue}% 0)`;

    // Highlight active text
    if (progress > 0.5) {
      projectItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
    }
  });

  ticking = false;
}

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(updateProjectImages);
    ticking = true;
  }
}

window.addEventListener("scroll", onScroll, { passive: true });

// Initial setup: Ensure first image is visible immediately (fallback)
if (projectImages.length > 0) {
  projectImages[0].style.clipPath = "inset(0 0 0 0)";
}

// Initial call
updateProjectImages();

// Initialize Services Particles
document.addEventListener("DOMContentLoaded", () => {
  new ServicesParticles();
});

// Sticky Icons Logic
const backToTopBtn = document.getElementById("back-to-top");

if (backToTopBtn) {
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 500) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    },
    { passive: true }
  );

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Theme Toggle Logic
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  body.classList.add("light-mode");
}

// Function to update canvas colors on theme change
function updateCanvasColors() {
  // Force re-render or update particles if needed
  // The particles fetch color in their draw/update loop or constructor
  // For Hero Canvas (Stars), they fetch in draw(), so it's automatic on next frame.
  // For Services Canvas, we might need to reset them or they will keep old color if stored in constructor.

  // Re-initialize services particles to pick up new color
  const servicesCanvas = document.getElementById("services-canvas");
  if (servicesCanvas) {
    // Assuming the existing instance handles resize/init, we can just trigger a resize or re-init
    // But simpler: let's just let them be for now, or reload page.
    // Actually, ServicesParticles stores color in constructor. We need to update it.
    // Since we don't have easy access to the instance, let's just reload the page? No, that's bad UX.
    // Let's modify ServicesParticles to fetch color in draw() or update().
    // I modified ServicesParticle constructor to fetch color.
    // To make it dynamic, I should modify draw() in ServicesParticle.
    // Wait, I modified the constructor in the previous chunk.
    // Let's modify the draw method in ServicesParticle to fetch color dynamically if we want instant switch.
    // Or just re-instantiate.
  }
}

themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }

  // Optional: Trigger canvas update if needed
  // updateCanvasColors();
});

// Mobile Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
const menuCloseBtn = document.querySelector(".menu-close-btn");

if (hamburger && navLinks && mobileMenuOverlay) {
  // Toggle menu function
  const toggleMenu = () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    mobileMenuOverlay.classList.toggle("active");

    // Toggle body class for overflow and z-index handling
    document.body.classList.toggle("menu-open");
    document.documentElement.classList.toggle("menu-open");
  };

  // Toggle menu on hamburger click
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close menu function
  const closeMenu = () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
    mobileMenuOverlay.classList.remove("active");
    document.body.classList.remove("menu-open");
    document.documentElement.classList.remove("menu-open");
  };

  // Close menu when clicking on a link
  const menuLinks = navLinks.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close menu when clicking overlay
  mobileMenuOverlay.addEventListener("click", closeMenu);

  // Close menu when clicking close button
  if (menuCloseBtn) {
    menuCloseBtn.addEventListener("click", closeMenu);
  }

  // Close menu when clicking outside (fallback)
  document.addEventListener("click", (e) => {
    if (
      navLinks.classList.contains("active") &&
      !navLinks.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      closeMenu();
    }
  });
}

// Contact Form AJAX Submission
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const submitBtn = contactForm.querySelector(".submit-btn");
    const originalBtnText = submitBtn.innerText;

    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";

    fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          formMessage.innerText = "Message sent successfully!";
          formMessage.className = "success";
          contactForm.reset();
        } else {
          response.json().then((data) => {
            if (Object.hasOwn(data, "errors")) {
              formMessage.innerText = data["errors"]
                .map((error) => error["message"])
                .join(", ");
            } else {
              formMessage.innerText =
                "Oops! There was a problem submitting your form";
            }
            formMessage.className = "error";
          });
        }
      })
      .catch((error) => {
        formMessage.innerText =
          "Oops! There was a problem submitting your form";
        formMessage.className = "error";
      })
      .finally(() => {
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.innerText = originalBtnText;

        // Clear message after 5 seconds
        setTimeout(() => {
          formMessage.innerText = "";
          formMessage.className = "";
        }, 5000);
      });
  });
}
