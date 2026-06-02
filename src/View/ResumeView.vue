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

/* TIMELINE */
.timeline {
    border-left: 1px solid rgba(0, 191, 255, 0.3);
    padding-left: 30px;
}

.timeline-item {
    position: relative;
    margin-bottom: 60px;
}

.circle {
    width: 16px;
    height: 16px;
    border: 2px solid #00bfff;
    border-radius: 50%;
    background: #06121f;
    position: absolute;
    left: -39px;
    top: 10px;
}

.timeline-item h3 {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 15px;
}

.timeline-item h5 {
    color: #cfcfcf;
    margin: 20px 0;
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

/* YEAR */
.year {
    background: rgba(0, 191, 255, 0.1);
    color: #00bfff;
    padding: 10px 18px;
    border-radius: 10px;
    display: inline-block;
    font-weight: 600;
}

/* RESPONSIVE */
@media (max-width: 992px) {
    .timeline-item h3 {
        font-size: 15px;
    }
}

@media (max-width: 768px) {

    .timeline-item h3 {
        font-size: 15px;
    }

    .timeline-item p,
    .timeline-item li {
        font-size: 15px;
    }

    .timeline {
        padding-left: 20px;
    }

    .circle {
        left: -29px;
    }
}

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
</style>
<template>
    <main>
        <NavBar />
        <div class="container">
            <div data-aos="zoom-out">
                <h1 class="text-center mb-4 mt-5 text-light">Resume</h1>
                <p class="text-center">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur
                    velit.
                    Sed ut perspiciatis
                </p>
                <p class="text-center">unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
                    totam
                    rem aperiam
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

                                <div class="timeline-item">
                                    <div class="circle"></div>

                                    <h3>Master of Computer Science</h3>

                                    <span class="year">2019 - 2021</span>

                                    <h5>Stanford University, California</h5>

                                    <p>
                                        Studied advanced software engineering, artificial intelligence,
                                        and modern web technologies.
                                    </p>
                                </div>

                                <div class="timeline-item">
                                    <div class="circle"></div>

                                    <h3>Bachelor of Computer Science</h3>

                                    <span class="year">2015 - 2019</span>

                                    <h5>Massachusetts Institute of Technology</h5>

                                    <p>
                                        Focused on frontend development, backend systems, and UI/UX design.
                                    </p>
                                </div>

                            </div>
                        </div>

                        <!-- SKILLS -->
                        <div>
                            <h1 class="section-title">Professional Skills</h1>

                            <div class="skill-box">

                                <div v-for="(skill, index) in skills" :key="index" class="mb-4" data-aos="fade-up"
                                    :data-aos-delay="index * 100">
                                    <div class="d-flex justify-content-between mb-2">
                                        <span>{{ skill.name }}</span>
                                        <span>{{ skill.percent }}%</span>
                                    </div>

                                    <div class="progress">
                                        <div class="progress-bar progress-animation"
                                            :style="{ '--progress-width': skill.percent + '%' }"></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <!-- RIGHT SIDE -->
                    <div class="col-lg-6" data-aos="fade-up" data-aos-anchor-placement="top-bottom">

                        <h1 class="section-title">Professional Experience</h1>

                        <div class="timeline">

                            <div class="timeline-item">
                                <div class="circle"></div>

                                <h3>Senior Software Engineer</h3>

                                <span class="year">2021 - Present</span>

                                <h5>Google, Mountain View, CA</h5>

                                <ul>
                                    <li>Developed scalable web applications using Vue and Laravel.</li>
                                    <li>Led a team of developers for enterprise projects.</li>
                                    <li>Improved application performance and UI experience.</li>
                                </ul>
                            </div>

                            <div class="timeline-item">
                                <div class="circle"></div>

                                <h3>Software Engineer</h3>

                                <span class="year">2019 - 2021</span>

                                <h5>Microsoft, Redmond, WA</h5>

                                <ul>
                                    <li>Created modern responsive interfaces for clients.</li>
                                    <li>Managed multiple software projects simultaneously.</li>
                                    <li>Collaborated with UI/UX teams for better design systems.</li>
                                </ul>
                            </div>

                            <div class="timeline-item">
                                <div class="circle"></div>

                                <h3>Junior Developer</h3>

                                <span class="year">2017 - 2019</span>

                                <h5>Startup Company</h5>

                                <ul>
                                    <li>Built reusable frontend components.</li>
                                    <li>Integrated REST APIs into Vue applications.</li>
                                    <li>Fixed bugs and optimized website performance.</li>
                                </ul>
                            </div>

                        </div>

                    </div>

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

const skills = ref([
    {
        name: 'Frontend Development',
        percent: 95
    },
    {
        name: 'Backend Development',
        percent: 85
    },
    {
        name: 'UI/UX Design',
        percent: 90
    },
    {
        name: 'Project Management',
        percent: 80
    }
])
</script>