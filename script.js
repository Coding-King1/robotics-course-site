/* ==========================================================================
   CONFIG - EDIT YOUR CONTENT HERE
   ========================================================================== */
const CONFIG = {
    brandName: "RoboAcademy",
    tagline: "Build the Future",
    heroHeadline: "Master Robotics & <span>Embedded Systems</span>",
    heroSubheadline: "From Python scripting to C++ hardware control. A complete, hands-on path to becoming a robotics engineer.",
    
    // ABOUT ME SECTION
    about: {
        name: "Alex Creator",
        role: "Lead Engineer & Instructor",
        bio: "I am a robotics engineer with 10+ years of experience building autonomous drones and industrial arms. I created this curriculum to bridge the gap between software and hardware for students and hobbyists.",
        bullets: [
            "M.S. in Robotics Engineering",
            "Former Senior Dev at TechCorp",
            "Passionate about Open Source",
            "Python & C++ Specialist"
        ]
    },

    // FEATURES (Max 6 recommended)
    features: [
        { icon: "fa-code", title: "Real Code", description: "No drag-and-drop. Write actual Python and C++ used in industry." },
        { icon: "fa-microchip", title: "Hardware Focus", description: "Learn circuit design, microcontrollers (ESP32/Arduino), and sensors." },
        { icon: "fa-project-diagram", title: "Portfolio Projects", description: "Build 5 complete robots to showcase on your resume." },
        { icon: "fa-users", title: "Community", description: "Join our private Discord server to debug and collaborate." },
        { icon: "fa-certificate", title: "Certification", description: "Earn a verified certificate upon course completion." },
        { icon: "fa-infinity", title: "Lifetime Access", description: "Pay once, keep the materials forever. Free updates included." }
    ],

    // CURRICULUM (Topics list)
    curriculum: {
        beginner: [
            "Intro to Python for Hardware",
            "Basic Electronics (Ohms Law, LEDs)",
            "Arduino vs Raspberry Pi",
            "Your First Servo Motor",
            "Reading Sensor Data"
        ],
        intermediate: [
            "C++ Memory Management",
            "PCB Design with KiCad",
            "PID Control Theory",
            "Wireless Comms (WiFi/BLE)",
            "Motor Drivers & H-Bridges"
        ],
        advanced: [
            "ROS 2 (Robot Operating System)",
            "Computer Vision with OpenCV",
            "Inverse Kinematics",
            "Lidar Mapping (SLAM)",
            "Swarm Robotics Logic"
        ]
    },

    // PLANS (3 items recommended)
    plans: [
        {
            name: "Hobbyist",
            priceText: "Free",
            includes: ["Introductory Python Module", "Community Forum Access", "monthly Newsletter"],
            audience: "For curious beginners",
            externalUrl: "https://youtube.com/playlist?list=YOUR_PLAYLIST_ID", // Change this
            buttonText: "Start Learning"
        },
        {
            name: "Engineer",
            priceText: "£49",
            includes: ["Full Python & C++ Course", "Hardware Kit Parts List", "5 Portfolio Projects", "Certificate of Completion"],
            audience: "Most Popular",
            externalUrl: "https://gumroad.com/l/your-course", // Change this
            buttonText: "Buy Course",
            featured: true
        },
        {
            name: "Mentorship",
            priceText: "$299",
            includes: ["Everything in Engineer", "1-on-1 Code Reviews", "Resume Optimization", "Mock Interview"],
            audience: "For career switchers",
            externalUrl: "https://calendly.com/your-booking", // Change this
            buttonText: "Apply Now"
        }
    ],

    // FAQ (Accordion)
    faq: [
        { q: "Do I need to own a 3D printer?", a: "No. While helpful, we provide links to buy pre-made chassis parts or services that print for you." },
        { q: "Is this course for absolute beginners?", a: "Yes! The Beginner module assumes zero prior programming knowledge." },
        { q: "What hardware do I need to buy?", a: "We provide a shopping list for Amazon/Digikey. The total kit cost is around $50-$70." },
        { q: "How long does the course take?", a: "Most students finish the core material in 4-6 weeks if studying part-time." },
        { q: "Is the payment monthly or one-time?", a: "It is a one-time purchase for lifetime access." },
        { q: "Do you teach ROS 1 or ROS 2?", a: "We focus exclusively on ROS 2 (Humble/Iron) as it is the current industry standard." }
    ],

    // CONTACT
    contact: {
        email: "hello@roboacademy.com",
        socials: {
            youtube: "https://youtube.com",
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
            github: "https://github.com"
        }
    }
};

/* ==========================================================================
   RENDER LOGIC (DO NOT EDIT BELOW UNLESS YOU KNOW JS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    document.title = CONFIG.brandName;
    renderNavbar();
    renderHero();
    renderFeatures();
    renderAbout();
    renderCurriculum();
    renderPricing();
    renderFAQ();
    renderContact();
    renderFooter();
    
    // Initialize Interactives
    initTabs();
    initAccordion();
    initMobileNav();
    initScrollEffects();
    initFormValidation();
});

// --- Render Functions ---

function renderNavbar() {
    document.getElementById('nav-logo').textContent = CONFIG.brandName;
    const links = [
        { text: "Features", id: "features" },
        { text: "About", id: "about" },
        { text: "Curriculum", id: "curriculum" },
        { text: "Pricing", id: "pricing" },
        { text: "FAQ", id: "faq" },
        { text: "Contact", id: "contact" }
    ];
    const navList = document.getElementById('nav-links');
    links.forEach(link => {
        navList.innerHTML += `<li><a href="#${link.id}">${link.text}</a></li>`;
    });
}

function renderHero() {
    const hero = document.getElementById('hero-content');
    hero.innerHTML = `
        <h1>${CONFIG.heroHeadline}</h1>
        <p>${CONFIG.heroSubheadline}</p>
        <div class="hero-btns">
            <a href="#curriculum" class="btn btn-primary">View Curriculum</a>
            <a href="#pricing" class="btn btn-secondary">Get Started</a>
        </div>
    `;
}

function renderFeatures() {
    const grid = document.getElementById('features-grid');
    CONFIG.features.forEach(feat => {
        grid.innerHTML += `
            <div class="feature-card">
                <i class="fas ${feat.icon}"></i>
                <h3>${feat.title}</h3>
                <p>${feat.description}</p>
            </div>
        `;
    });
}

function renderAbout() {
    const content = document.getElementById('about-content');
    const bulletList = CONFIG.about.bullets.map(b => `<li><i class="fas fa-check-circle"></i> ${b}</li>`).join('');
    
    content.innerHTML = `
        <div class="about-avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="about-text">
            <h2>About ${CONFIG.about.name}</h2>
            <h4>${CONFIG.about.role}</h4>
            <p>${CONFIG.about.bio}</p>
            <ul>${bulletList}</ul>
        </div>
    `;
}

function renderCurriculum() {
    const header = document.getElementById('tabs-header');
    const content = document.getElementById('tabs-content');
    const levels = ['beginner', 'intermediate', 'advanced'];
    
    levels.forEach((level, index) => {
        // Create Button
        const btn = document.createElement('button');
        btn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
        btn.innerText = level.charAt(0).toUpperCase() + level.slice(1);
        btn.dataset.target = level;
        header.appendChild(btn);

        // Create Content
        const topics = CONFIG.curriculum[level].map(t => `<div class="topic-item">${t}</div>`).join('');
        const pane = document.createElement('div');
        pane.className = `tab-pane ${index === 0 ? 'active' : ''}`;
        pane.id = level;
        pane.innerHTML = `<div class="topic-list">${topics}</div>`;
        content.appendChild(pane);
    });
}

function renderPricing() {
    const grid = document.getElementById('pricing-grid');
    CONFIG.plans.forEach(plan => {
        const features = plan.includes.map(i => `<li><i class="fas fa-check"></i> ${i}</li>`).join('');
        const featuredClass = plan.featured ? 'featured' : '';
        
        grid.innerHTML += `
            <div class="price-card ${featuredClass}">
                <h3>${plan.name}</h3>
                <p style="color:var(--text-muted); font-size:0.9rem;">${plan.audience}</p>
                <div class="price">${plan.priceText}</div>
                <ul class="features-list">
                    ${features}
                </ul>
                <a href="${plan.externalUrl}" target="_blank" rel="noopener" class="btn btn-primary">${plan.buttonText}</a>
            </div>
        `;
    });
}

function renderFAQ() {
    const container = document.getElementById('faq-accordion');
    CONFIG.faq.forEach(item => {
        container.innerHTML += `
            <div class="accordion-item">
                <button class="accordion-header">
                    ${item.q}
                    <i class="fas fa-chevron-down"></i>
                </button>
                <div class="accordion-body">
                    <p>${item.a}</p>
                </div>
            </div>
        `;
    });
}

function renderContact() {
    const info = document.getElementById('contact-info');
    info.innerHTML = `
        <h3>Get In Touch</h3>
        <p>Have questions about the kit or the curriculum? Send an email or connect on social media.</p>
        <p style="margin-top: 20px;"><i class="fas fa-envelope" style="color:var(--primary)"></i> ${CONFIG.contact.email}</p>
        <div class="social-links">
            ${CONFIG.contact.socials.youtube ? `<a href="${CONFIG.contact.socials.youtube}" target="_blank" class="social-btn"><i class="fab fa-youtube"></i></a>` : ''}
            ${CONFIG.contact.socials.twitter ? `<a href="${CONFIG.contact.socials.twitter}" target="_blank" class="social-btn"><i class="fab fa-twitter"></i></a>` : ''}
            ${CONFIG.contact.socials.linkedin ? `<a href="${CONFIG.contact.socials.linkedin}" target="_blank" class="social-btn"><i class="fab fa-linkedin-in"></i></a>` : ''}
            ${CONFIG.contact.socials.github ? `<a href="${CONFIG.contact.socials.github}" target="_blank" class="social-btn"><i class="fab fa-github"></i></a>` : ''}
        </div>
    `;
}

function renderFooter() {
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('footer-brand').textContent = CONFIG.brandName;
    
    const footerContent = document.getElementById('footer-content');
    footerContent.innerHTML = `
        <div class="footer-col">
            <h4>${CONFIG.brandName}</h4>
            <p>${CONFIG.tagline}</p>
        </div>
        <div class="footer-col">
            <h4>Quick Links</h4>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#curriculum">Curriculum</a></li>
                <li><a href="#pricing">Pricing</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h4>Legal</h4>
            <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
            </ul>
        </div>
    `;
}

// --- Logic & Interaction Functions ---

function initTabs() {
    const btns = document.querySelectorAll('.tab-btn');
    const panes = document.querySelectorAll('.tab-pane');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            btns.forEach(b => b.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));

            // Add active to current
            btn.classList.add('active');
            document.getElementById(btn.dataset.target).classList.add('active');
        });
    });
}

function initAccordion() {
    const headers = document.querySelectorAll('.accordion-header');
    
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const body = header.nextElementSibling;
            header.classList.toggle('active');
            
            if (header.classList.contains('active')) {
                body.style.maxHeight = body.scrollHeight + "px";
            } else {
                body.style.maxHeight = 0;
            }

            // Optional: Close others
            headers.forEach(otherHeader => {
                if (otherHeader !== header && otherHeader.classList.contains('active')) {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.style.maxHeight = 0;
                }
            });
        });
    });
}

function initMobileNav() {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle'); // You can add CSS animation for burger to X here if desired
    });

    // Close nav when link clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
        });
    });
}

function initScrollEffects() {
    // 1. Back to Top Button
    const backBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backBtn.classList.add('show');
        } else {
            backBtn.classList.remove('show');
        }
    });

    backBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 2. Scrollspy (Highlight Nav Items)
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));
}

function initFormValidation() {
    const form = document.getElementById('contact-form');
    const msgInput = document.getElementById('message');
    const charCount = document.getElementById('char-count');
    const feedback = document.getElementById('form-feedback');

    // Char counter
    msgInput.addEventListener('input', () => {
        const len = msgInput.value.length;
        charCount.textContent = `${len}/500 characters`;
        if (len > 500) charCount.style.color = 'var(--error)';
        else charCount.style.color = 'var(--text-muted)';
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (name.length < 2) {
            feedback.textContent = "Please enter a valid name.";
            feedback.className = "feedback-error";
            return;
        }
        if (!emailRegex.test(email)) {
            feedback.textContent = "Please enter a valid email address.";
            feedback.className = "feedback-error";
            return;
        }
        if (message.length < 10) {
            feedback.textContent = "Message is too short.";
            feedback.className = "feedback-error";
            return;
        }
        if (message.length > 500) {
            feedback.textContent = "Message is too long.";
            feedback.className = "feedback-error";
            return;
        }

        // Simulate Success (Since no backend)
        feedback.textContent = "Message sent successfully! (This is a demo form)";
        feedback.className = "feedback-success";
        form.reset();
        charCount.textContent = "0/500 characters";
    });
}