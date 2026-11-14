<template>
  <main>
    <NavBar />
    <br>
    <br>
    <div class="container">
      <div data-aos="zoom-out">
        <h1 class="text-center mb-4 mt-5 text-light">Resume</h1>
        <p class="text-center">
          Highlighting my journey as a developer, key academic achievements, and practical expertise built through
          real-world projects.
        </p>
      </div>

      <section class="resume-section container-fluid py-5">
        <div class="row g-5">

          <!-- LEFT SIDE -->
          <div class="col-lg-6">

            <!-- EDUCATION -->
            <div class="mb-5" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <h1 class="section-title">Education</h1>

              <div class="timeline">
                <div v-for="(item, index) in educationList" :key="index" class="timeline-item">
                  <div class="circle"></div>
                  <h3>{{ item.school }}</h3>
                  <span class="year">{{ item.year }}</span>
                  <h5>{{ item.fullName }}</h5>

                  <p v-if="item.description">{{ item.description }}</p>

                  <ul v-if="item.details && item.details.length">
                    <li v-for="(detail, dIndex) in item.details" :key="dIndex">
                      {{ detail }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- SKILLS -->
            <div>
              <h1 class="section-title" data-aos="fade-up">Professional Skills</h1>

              <div class="skill-box">
                <div v-for="(skill, index) in skills" :key="index" class="mb-4" data-aos="fade-up"
                  :data-aos-delay="index * 100">
                  <div class="d-flex justify-content-between mb-2">
                    <span>{{ skill.name }}</span>
                    <span>{{ skill.percent }}%</span>
                  </div>

                  <div class="progress">
                    <div class="progress-bar progress-animation" :style="{ '--progress-width': skill.percent + '%' }">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- RIGHT SIDE -->
          <div class="col-lg-6" data-aos="fade-up" data-aos-anchor-placement="top-bottom">

            <h1 class="section-title">Professional Experience</h1>

            <div class="timeline">
              <div v-for="(exp, index) in experienceList" :key="index" class="timeline-item">
                <div class="circle"></div>
                <h3>{{ exp.title }}</h3>
                <span class="year">{{ exp.date }}</span>
                <h5>{{ exp.project }}</h5>

                <ul v-if="exp.tasks && exp.tasks.length">
                  <li v-for="(task, tIndex) in exp.tasks" :key="tIndex">
                    {{ task }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="mb-5">
        <div class="section-header">
          <h2 class="section-title">Featured Projects Showcase</h2>
          <p class="section-subtitle">
            Card-based layout option for a dedicated "Projects" section or page on your portfolio.
          </p>
        </div>

        <div class="projects-grid">
          <article v-for="project in projects" :key="project.id" class="project-card">
            <!-- Top Row: Icon & Year Badge -->
            <div class="card-top">
              <div class="icon-box">
                <!-- Wallet Icon -->
                <svg v-if="project.icon === 'wallet'" width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                  <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                  <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                </svg>

                <!-- Chart Icon -->
                <svg v-else-if="project.icon === 'chart'" width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>

                <!-- Compass Icon -->
                <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
              </div>

              <span class="year-badge">{{ project.year }}</span>
            </div>

            <!-- Card Content -->
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-subtitle">{{ project.subtitle }}</p>
            <p class="project-description">{{ project.description }}</p>

            <!-- Dynamic Tech Stack Tags -->
            <div class="tech-tags">
              <span v-for="(tag, index) in project.tags" :key="index" class="tech-tag">
                {{ tag }}
              </span>
            </div>

            <!-- Card Footer Links -->
            <div class="card-footer">
              <a :href="project.githubUrl" target="_blank" rel="noopener noreferrer" class="footer-link link-source">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Source Code
              </a>

              <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer"
                class="footer-link link-preview">
                Live Preview
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  </main>
  <FooterView />
</template>

<script setup>
import FooterView from '@/components/component/FooterView.vue';
import NavBar from '@/components/component/NavBar.vue';
import { ref } from 'vue'

// 1. EDUCATION DATA
const educationList = ref([
  {
    school: 'RUPP',
    year: '2024 - 2028',
    fullName: 'Royal University of Phnom Penh',
    description: '',
    details: [
      'Bachelor of Computer Science / Information Technology'
    ]
  },
  {
    school: 'ANT Technology',
    year: '2025 - 2026',
    fullName: 'Abstract of New Technology',
    description: '',
    details: [
      'Certificate of Completion : JavaScript / Vue.js',
      'Transcript : HTML + HTML5 + CSS',
      'I was study Figma : UX/UI'
    ]
  },
  {
    school: 'PUC',
    year: '2025 - 2026',
    fullName: 'pannasastra university of cambodia',
    description: 'I was study short couse',
    details: [
      'English Level 5',
    ]
  },
  {
    school: 'ETEC Center',
    year: '2024 - 2025',
    fullName: 'Engineer of Technology and Electronic Center',
    description: 'I was study Basic of Information Technology.',
    details: [
      'Certificate of Completion : Word, Excel, PowerPoint',
      'Certificate of Completion : Basic Computer / Network',
      'Certificate of Completion : Basic / C++ / Algorithm'
    ]
  },
  {
    school: 'High School',
    year: '2022 - 2024',
    fullName: 'Samdech Techo Hun Sen Suong High School',
    description: '',
    details: [
      'High School Diploma : Grade D (Social Science Class)'
    ]
  }
])

// 2. SKILLS DATA
const skills = ref([
  {
    name: 'Backend Development',
    percent: 50
  },
  {
    name: 'Frontend Development',
    percent: 40
  },
  {
    name: 'Security',
    percent: 15
  },
  {
    name: 'UI/UX Design',
    percent: 20
  }
])

// 3. EXPERIENCE DATA
const experienceList = ref([
  {
    title: 'Vue.js + Express.js',
    date: '10 / 5 / 2026',
    project: 'Job Discovery & Application Platform (Team Group-2)',
    tasks: [
      'Developed reusable frontend components and implemented the user interface design.',
      'Built core user pages including the Transaction form and Report form.',
      'Created admin management pages and configured backend architecture using Express.js.',
      'Designed and managed database schemas and integration with MySQL.',
      'Integrated REST APIs and performed comprehensive testing to ensure application reliability.',
      'Fixed bugs, optimized website performance, and collaborated effectively with the team.'
    ]
  },
  {
    title: 'Vue.js',
    date: '6 / 24 / 2026',
    project: 'Personal Expense Tracker (Team Group-1)',
    tasks: [
      'Built reusable frontend components.',
      'Integrated REST APIs into Vue applications.',
      'Fixed bugs and optimized website performance.',
      'User page I was make (Transaction-form / Report-form).',
      'Admin page I was make (User).',
      'I also participated in doing the UI for this website.'
    ]
  },
  {
    title: 'JavaScript',
    date: '3 / 2 / 2026',
    project: 'Mini-Project (Team Group-4)',
    tasks: [
      'Built reusable frontend components.',
      'Integrated REST APIs into JS applications.',
      'Fixed bugs and optimized website performance.'
    ]
  },
  {
    title: 'HTML + HTML5 + CSS',
    date: '7 / 2 / 2025',
    project: 'NK.Computer-shop',
    tasks: [
      'Built reusable frontend components.',
      'Fixed bugs and optimized website performance.'
    ]
  }
])

// 4 My Projects
const projects = ref([
  {
    id: 1,
    icon: 'chart',
    year: '2026',
    title: 'PRORKOB',
    subtitle: 'Job Discovery & Application Platform',
    description:
      'A collaborative job-seeking web application built with Team Group-2. Created to help job seekers browse opportunities, manage applications, and connect with employers efficiently.',
    tags: ['Vue 3', 'Express.js', 'MySQL'],
    githubUrl: 'https://github.com/Karona24',
    liveUrl: 'https://plovajib.skillhire.work.gd/'
  },
  {
    id: 2,
    icon: 'wallet',
    year: '2026',
    title: 'KAKSEN',
    subtitle: 'Personal Expense Tracker Web App',
    description:
      'A collaborative financial tracking web application built with Team Group-1. Features transaction logging, income/expense summaries, and clean financial reporting.',
    tags: ['Vue.js', 'Bootstrap', 'Figma'],
    githubUrl: 'https://github.com/Karona24',
    liveUrl: 'https://kaksen-ten.vercel.app/landing/homelanding'
  },
 {
    id: 3,
    icon: 'compass',
    year: '2025',
    title: 'NK.Computer-shope',
    subtitle: 'E-Commerce & Tech Retail Storefront',
    description:
      'Responsive online computer store showcasing laptops, PC components, and accessories with intuitive product browsing, detailed specs, and a modern retail interface.',
    tags: ['HTML5 / CSS3', 'JavaScript', 'UI/UX'],
    githubUrl: 'https://github.com/Karona24',
    liveUrl: 'https://computer-shop-website-nu.vercel.app/'
  }
]);
</script>

<style scoped>
.resume-section {
  background: #06121f;
  min-height: 100vh;
  color: white;
  font-family: sans-serif;
}

/* SECTION TITLE */
.section-title {
  font-weight: 700;
  margin-bottom: 50px;
  position: relative;
}

.section-title::after {
  content: "";
  width: 60px;
  height: 4px;
  background: #00bfff;
  position: absolute;
  left: 0;
  bottom: -15px;
  border-radius: 20px;
}

/* TIMELINE STYLING */
.timeline {
  border-left: 2px solid rgba(0, 191, 255, 0.4);
  position: relative;
  padding-left: 24px;
}

.timeline-item {
  position: relative;
  margin-bottom: 45px;
}

.circle {
  width: 16px;
  height: 16px;
  border: 2px solid #00bfff;
  border-radius: 50%;
  background: #06121f;
  position: absolute;
  left: -33px;
  top: 6px;
  z-index: 2;
}

.timeline-item h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 12px;
}

.timeline-item h5 {
  color: #cfcfcf;
  margin: 15px 0;
  font-style: italic;
}

.timeline-item p,
.timeline-item li {
  color: #d7d7d7;
  line-height: 1.8;
  font-size: 15px;
}

.timeline-item ul {
  padding-left: 20px;
}

/* YEAR BADGE */
.year {
  background: rgba(0, 191, 255, 0.1);
  color: #00bfff;
  padding: 6px 14px;
  border-radius: 10px;
  display: inline-block;
  font-weight: 600;
  font-size: 14px;
}

/* PROGRESS BAR */
.progress {
  height: 10px;
  background: #1c2b38;
  border-radius: 50px;
  overflow: hidden;
}

.progress-bar {
  width: 0;
  height: 100%;
  background: linear-gradient(90deg, #00bfff, #00e1ff);
  border-radius: 50px;
}

.progress-animation {
  animation: fillBar 2s ease forwards;
}

@keyframes fillBar {
  from {
    width: 0;
  }

  to {
    width: var(--progress-width);
  }
}

/* RESPONSIVE (MOBILE & TABLET FIX) */
@media (max-width: 768px) {
  .container {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }

  .timeline {
    padding-left: 20px;
    margin-left: 12px;
  }

  .circle {
    width: 14px;
    height: 14px;
    left: -28px;
    top: 5px;
  }

  .section-title {
    font-size: 24px;
    margin-bottom: 35px;
  }

  .timeline-item h3 {
    font-size: 18px;
  }

  .timeline-item h5 {
    font-size: 14px;
  }

  .timeline-item p,
  .timeline-item li {
    font-size: 14px;
  }
}

@media (max-width: 400px) {
  .timeline {
    margin-left: 8px;
    padding-left: 18px;
  }

  .circle {
    left: -26px;
  }
}

.section-header {
  margin-bottom: 36px;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #f8fafc;
  display: inline-block;
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 12px;
}

.section-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 56px;
  height: 3.5px;
  background-color: #00b4d8;
  border-radius: 2px;
}

.section-subtitle {
  color: #94a3b8;
  font-size: 0.95rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.project-card {
  background-color: #0b1623;
  border: 1px solid #17273b;
  border-radius: 14px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: #00b4d8;
  box-shadow: 0 12px 30px rgba(0, 180, 216, 0.08);
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.icon-box {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background-color: rgba(0, 180, 216, 0.12);
  border: 1px solid rgba(0, 180, 216, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00b4d8;
}

.year-badge {
  background-color: rgba(0, 180, 216, 0.12);
  color: #00b4d8;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 4px 14px;
  border-radius: 999px;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 4px;
}

.project-subtitle {
  font-size: 0.85rem;
  font-style: italic;
  color: #00b4d8;
  margin-bottom: 16px;
}

.project-description {
  font-size: 0.9rem;
  color: #94a3b8;
  margin-bottom: 24px;
  flex-grow: 1;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.tech-tag {
  background-color: #111f30;
  border: 1px solid #17273b;
  color: #cbd5e1;
  font-size: 0.78rem;
  font-weight: 500;
  padding: 5px 12px;
  border-radius: 6px;
}

.card-footer {
  border-top: 1px solid #17273b;
  padding-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.88rem;
  font-weight: 500;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.footer-link:hover {
  opacity: 0.8;
}

.link-source {
  color: #f8fafc;
}

.link-preview {
  color: #00b4d8;
}
</style>