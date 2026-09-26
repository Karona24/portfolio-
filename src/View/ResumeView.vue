<template>
    <main>
        <NavBar />
        <br>
        <div class="container">
            <div data-aos="zoom-out">
                <h1 class="text-center mb-4 mt-5 text-light">Resume</h1>
                <p class="text-center">
                    Highlighting my journey as a developer, key academic achievements, and practical expertise built through real-world projects.
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
                                <div 
                                    v-for="(item, index) in educationList" 
                                    :key="index" 
                                    class="timeline-item"
                                >
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
                                <div 
                                    v-for="(skill, index) in skills" 
                                    :key="index" 
                                    class="mb-4" 
                                    data-aos="fade-up"
                                    :data-aos-delay="index * 100"
                                >
                                    <div class="d-flex justify-content-between mb-2">
                                        <span>{{ skill.name }}</span>
                                        <span>{{ skill.percent }}%</span>
                                    </div>

                                    <div class="progress">
                                        <div 
                                            class="progress-bar progress-animation"
                                            :style="{ '--progress-width': skill.percent + '%' }"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- RIGHT SIDE -->
                    <div class="col-lg-6" data-aos="fade-up" data-aos-anchor-placement="top-bottom">

                        <h1 class="section-title">Professional Experience</h1>

                        <div class="timeline">
                            <div class="d-flex align-items-center mb-4">
                                <hr class="flex-grow-1">
                                <span class="mx-3 text-uppercase fw-bold text-info">Front-end</span>
                                <hr class="flex-grow-1">
                            </div>

                            <div 
                                v-for="(exp, index) in experienceList" 
                                :key="index" 
                                class="timeline-item"
                            >
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
            <!-- <div data-aos="zoom-out">
                <h1 class="text-center mb-4 mt-5 text-light">My Certifycate</h1>
                <p class="text-center">
                    I have done verious programming courses increase my programming skills and I'm sharing few to them
                </p>
            </div>
            Certifycate
            <section>
                <div class="row">
                    <div class="col-4">
                        <div class="card border-0 bg-transparent">
                            <img src="https://media.gettyimages.com/id/1813512682/vector/certificate-diploma-template.jpg?s=612x612&w=gi&k=20&c=sqk_pABwv9CYB4UwaAu3fQdRoILYurBzGok05Fj1JRk="
                                alt="">
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card border-0 bg-transparent">
                            <img src="https://i.ytimg.com/vi/EoOaHe62If8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBIi7SoTJdpr21bgic9xmW4Eo3_iA"
                                alt="">
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card border-0 bg-transparent">
                            <img src="https://cdn-useast1.kapwing.com/static/templates/classic-blue-and-gold-award-certificate-template-ivAS3Aaco5IVb3Da-full.jpg"
                                alt="">
                        </div>
                    </div>
                </div>
            </section> -->
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
        percent: 65
    },
    {
        name: 'Frontend Development',
        percent: 60
    },
    {
        name: 'Security',
        percent: 50
    },
    {
        name: 'UI/UX Design',
        percent: 40
    }
])

// 3. EXPERIENCE DATA
const experienceList = ref([
    {
        title: 'Vue.js',
        date: '6 / 24 / 2026 - Present',
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
</style>