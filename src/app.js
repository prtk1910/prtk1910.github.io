import "./styles.css";

const app = document.querySelector("#app");

const arrowLeft = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M10.25 6.75 4.75 12l5.5 5.25M5 12h14.25" />
  </svg>`;

const downloadIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4.75 14.75v1.5a3 3 0 0 0 3 3h8.5a3 3 0 0 0 3-3v-1.5M12 4.75v9.5m-3.25-3.5L12 14.25l3.25-3.5" />
  </svg>`;

function homePage() {
  app.innerHTML = `
    <section class="home-page">
      <canvas class="particle-field" aria-hidden="true"></canvas>
      <div class="home-content">
        <div class="identity-mark">
          <img src="/assets/portrait-animation.gif" alt="" aria-hidden="true">
        </div>
        <div class="intro-copy">
          <p><strong>Hi, I'm Pratik.</strong></p>
          <p class="muted">Software Developer, Prototyper, Photographer</p>
          <div class="intro-spacer" aria-hidden="true"></div>
          <p>Senior Software Engineer at Meta, improving the advertiser experience and building AI agents at scale. I build agentic feedback loops for sales pitches and role-play simulations that help sales teams practice. Previously, at Verily (Google Life Sciences) and Miko, I helped accelerate clinical trials through LLM-driven protocol digitization and built conversational tools for consumer robots.</p>
          <p class="personal-intro">Outside of work, I’m building a 3D-printed camera powered by a Raspberry Pi, experimenting with new ways to brew coffee, and introducing myself to every dog I meet.</p>
          <div class="intro-spacer" aria-hidden="true"></div>
          <p class="links"><a href="/resume">Resume</a> · <a href="https://www.linkedin.com/in/prtk1910/" target="_blank" rel="noreferrer">LinkedIn</a> · <a href="https://github.com/prtk1910" target="_blank" rel="noreferrer">GitHub</a> · <a href="https://www.instagram.com/photosbyprtk/" target="_blank" rel="noreferrer">Photography</a></p>
        </div>
      </div>
    </section>`;

  startParticles(app.querySelector("canvas"));
}

const jobs = [
  {
    date: "Aug<br>2025",
    title: "Currently at Meta Platforms Inc, Menlo Park, CA as a Senior Software Engineer",
    bullets: [
      `As a part of the Ads Pitches team, I implemented ad performance and revenue dashboards using <strong>React + Hack (PHP).</strong> These consisted of intuitive time series graphs and breakdowns for internal Sales teams to analyze ad campaign performance.`,
      `Wrote optimal queries spanning &gt;300GB of advertiser data for the aforementioned pages that run with <strong>P90 latencies &lt;2s</strong> to ensure best-in-class user experience.`,
      `Developed a library of 12 <strong>Advertiser Insights MCP Tools</strong> within the Sales AI platform, enabling data-driven recommendations and insights. Used progressive disclosure to load the MCP tools on-demand via skills to save tokens.`,
      `Led the e2e development of Sales AI response <strong>black box evals</strong>, including an async job leveraging a judge to flag regressions, create tasks, route to the on-call, and auto-generate suggested fixes for them to review.`,
      `Developed a sales pitch call review system with AI generated coaching tips based on past call transcripts. Integrated ElevenLabs TTS and North Model Labs' Avatar Generation into the mock call system for ad sales teams to practice pitches.`
    ]
  },
  {
    date: "Aug<br>2024",
    title: "Transitioned to Software Engineer, Tech Lead at Verily Life Sciences (Google/Alphabet), San Bruno, CA",
    bullets: [
      `TL for a team of 5 SWEs working on complex medical PDF extraction pipelines powered by LLMs. This cut processing times by clinical digitizers from <strong>30 days to real-time.</strong>`,
      `Led the refactoring and production-readiness efforts of the aforementioned <strong>event-driven LLM pipeline in Python</strong>, transforming a Proof-of-Concept into a containerized, <strong>GCP-deployed</strong> solution for clinical trial protocol digitization. Authored comprehensive <strong>design documents, FHIR data models, Terraform</strong> configurations for <strong>GCP resource provisioning</strong>, and streamlined GitHub workflows for <strong>automated deployments and releases.</strong>`,
      `Developed a 6-month <strong>technical migration roadmap</strong> to merge the extraction pipeline into the core Verily architecture, obtaining approval/buy-in across technical/business leadership, including significant system re-architecture, data remodeling, and redesigned service integrations.`,
      `Achieved an <strong>&gt;15x increase in analysis speed</strong> per protocol through AI-driven automation, helping drive substantial revenue for the company.`,
      `<strong>Awarded "SPS Veep Of The Year 2024" (out of ~150 engineers) for embodiment of Verily's core values.</strong>`
    ]
  },
  {
    date: "Feb<br>2023",
    title: "Started at Verily Life Sciences (Google/Alphabet), San Bruno, CA as a Software Engineer",
    bulletFirst: true,
    bullets: [
      `<strong>Full-stack development</strong> (Go, React, FHIR db) for the <strong>integration of third-party vendors</strong> into a clinical trial system, enabling Electronic Data Capture and ID Verification. Led the e2e efforts including designing the <strong>architecture, APIs, and provenance models</strong>.`,
      `Managed <strong>Kubernetes, Terraform, and GitHub Actions</strong> for seamless GKE deployments and releases. Developed comprehensive <strong>integration and contract tests</strong>, and established advanced GitHub Workflows for <strong>automated testing, CI/CD, and release promotion.</strong>`,
      `Developed APIs in <strong>Java</strong> to support a skin registry trial with <strong>L'Oreal</strong>.`
    ]
  },
  {
    date: "May<br>2022",
    title: "Joined Verily Life Sciences (Google/Alphabet), San Bruno, CA as a Software Engineer Intern",
    bullets: [
      `Developed a PDF viewer component using Mozilla's PDF.js in Angular, <strong>improving PDF load times by 90%</strong>.`,
      `Engineered a backfill tool in <strong>Java</strong> to convert between protobuf versions and facilitate seamless migration of legacy data.`
    ]
  },
  {
    date: "July<br>2020",
    title: "Transitioned to an Artificial Intelligence Engineer at Miko, Mumbai, IN",
    bullets: [
      `Built and optimized an NLP pipeline <strong>(Named Entity Recognition and Intent Detection)</strong> for the Miko 2 robot.`,
      `Developed a <strong>Sports-Oriented Voice Assistant</strong>, adept at answering queries related to cricket.`,
      `Reduced unanswered queries by <strong>&gt;80%</strong> by implementing a <strong>BERT-based Open-Domain Question Answering System</strong> leveraging Wikipedia articles in a <strong>FAISS data store, a Dense Passage Retriever, and a Retrieval Augmented Generator.</strong>`,
      `Created a robust <strong>Voice Activity Detection (VAD)</strong> system, trained on the Audioset dataset with WebRTC-V AD labels.`
    ]
  },
  {
    date: "June<br>2019",
    title: "Joined Miko, Mumbai, IN, as an Artificial Intelligence Research Intern",
    bulletFirst: true,
    bullets: [
      `Developed <strong>Face Detection, Face Recognition</strong>, and <strong>Audio Event Detection</strong> systems for the Miko 2 robot.`
    ]
  }
];

const education = [
  {
    date: "Feb<br>2023",
    title: "Graduated with a Masters degree in Computer Science from University of Massachusetts Amherst with a GPA of 3.94/4.00",
    bulletFirst: true,
    bullets: [
      `Research - Real-Time Super-Resolution for Live Videos - a collaboration with <strong>Adobe Research</strong>. Published <strong>Towards Efficient &amp; Tunable Video Super Resolution for Faster Streaming</strong> (IEEE ISM 2022).`,
      `Teaching Assistant - COMPSCI 326 Web Programming.`,
      `Graduate Assistant - All Campus Makerspace.`
    ]
  },
  {
    date: "Feb<br>2021",
    title: "Graduated with a Bachelors degree in Computer Engineering from D. J. Sanghvi College of Engineering (University of Mumbai) with a GPA of 9.04/10.00",
    bulletFirst: true,
    bullets: [
      `Senior Full-Stack Mentor (Unicode) - Trained a pool of freshmen in Full-Stack Development.`
    ]
  }
];

function timelineItem(item) {
  return `
    <article class="timeline-item">
      <div class="timeline-date">${item.date}</div>
      <div class="timeline-body">
        <h2>${item.title}</h2>
        ${item.bullets.map((bullet, index) => `<p>${index === 0 && !item.bulletFirst ? "" : "• "}${bullet}</p>`).join("")}
      </div>
    </article>`;
}

function resumePage() {
  app.innerHTML = `
    <div class="resume-page">
      <canvas class="particle-field resume-particle-field" aria-hidden="true"></canvas>
      <div class="resume-column">
        <nav class="resume-nav" aria-label="Resume navigation">
          <a href="/" class="home-link">${arrowLeft}<span>Home</span></a>
          <a href="https://flowcv.com/resume/ed2ufdsode" target="_blank" rel="noreferrer" class="download-link" aria-label="Open downloadable resume">${downloadIcon}</a>
        </nav>

        <header class="resume-header">
          <h1>Pratik Mulchandani</h1>
          <p>pratikm1910@gmail.com · (413) 313-9964 · CA 94105</p>
        </header>

        <section class="resume-section">
          <h3>Experience</h3>
          ${jobs.map(timelineItem).join("")}
        </section>

        <section class="resume-section">
          <h3>Education</h3>
          ${education.map(timelineItem).join("")}
        </section>

        <section class="resume-section simple-section">
          <h3>Skills</h3>
          <p><strong>Languages</strong>: Go, Python, Java, C, SQL, Bash.</p>
          <p><strong>Web</strong>: JavaScript, TypeScript, React, Angular, HTML, CSS, PHP.</p>
          <p><strong>Tools</strong>: Git, Jira, Docker, Kubernetes, Terraform, Linux, GCP, VertexAI, OpenAI API/Agents SDK, MCP.</p>
        </section>

        <section class="resume-section simple-section certifications">
          <h3>Certifications</h3>
          <p><strong>Deep Learning Specialization,</strong> deeplearning.ai (Coursera) - Cumulative Grade: 97.94%</p>
        </section>
      </div>
    </div>`;
  startParticles(app.querySelector("canvas"));
}

function startParticles(canvas) {
  const context = canvas.getContext("2d");
  const pointer = { x: -1000, y: -1000, active: false };
  let width = 0;
  let height = 0;
  let animationFrame = 0;
  let particles = [];

  function seedParticles() {
    const particleCount = Math.max(200, Math.ceil(200 * height / 800));
    particles = Array.from({ length: particleCount }, () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.25 + Math.random() * 0.25;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 1.5
      };
    });
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const ratio = rect.height > 1600 ? 1 : Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    seedParticles();
  }

  function draw() {
    context.clearRect(0, 0, width, height);
    context.fillStyle = "rgba(0, 0, 0, 0.1)";
    for (const particle of particles) {
      if (pointer.active) {
        const dx = particle.x - pointer.x;
        const dy = particle.y - pointer.y;
        const distance = Math.hypot(dx, dy);
        if (distance > 0 && distance < 100) {
          const force = (100 - distance) / 100;
          particle.vx += (dx / distance) * force * 0.3;
          particle.vy += (dy / distance) * force * 0.3;
        }
      }

      const speed = Math.hypot(particle.vx, particle.vy);
      if (speed > 1.5) {
        particle.vx = (particle.vx / speed) * 1.5;
        particle.vy = (particle.vy / speed) * 1.5;
      }

      particle.x += particle.vx;
      particle.y += particle.vy;
      if (particle.x < particle.radius || particle.x > width - particle.radius) particle.vx *= -1;
      if (particle.y < particle.radius || particle.y > height - particle.radius) particle.vy *= -1;
      particle.x = Math.max(particle.radius, Math.min(width - particle.radius, particle.x));
      particle.y = Math.max(particle.radius, Math.min(height - particle.radius, particle.y));

      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fill();
    }
    animationFrame = requestAnimationFrame(draw);
  }

  const updatePointer = (event) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = event.clientX - rect.left;
    pointer.y = event.clientY - rect.top;
    pointer.active = true;
  };
  window.addEventListener("pointermove", updatePointer, { passive: true });
  window.addEventListener("blur", () => { pointer.active = false; });
  window.addEventListener("resize", resize);
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);
  resize();
  draw();

  return () => {
    cancelAnimationFrame(animationFrame);
    resizeObserver.disconnect();
    window.removeEventListener("pointermove", updatePointer);
    window.removeEventListener("resize", resize);
  };
}

if (window.location.pathname.replace(/\/+$/, "") === "/resume") {
  resumePage();
} else {
  homePage();
}
