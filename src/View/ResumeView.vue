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

/* certificate */
.card {
    height: 300px;
}

img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
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

                                    <h3>RUPP</h3>

                                    <span class="year">2024 - 2028</span>

                                    <h5>Royal University of Phnom Penh</h5>

                                    <ul>
                                        <li>---------</li>
                                    </ul>
                                </div>

                                <div class="timeline-item">
                                    <div class="circle"></div>

                                    <h3>ANT Technology</h3>

                                    <span class="year">2025 - 2026</span>

                                    <h5>Abstract of New Technology</h5>

                                    <ul>
                                        <li>Certificate of Completion : Java Script / Vue.js</li>
                                        <li>Transcript : HTML + HTML5 + CSS</li>
                                        <li>I was study Figmar : UX/UI</li>
                                    </ul>
                                </div>

                                <div class="timeline-item">
                                    <div class="circle"></div>

                                    <h3>ETEC Center</h3>

                                    <span class="year">2024 - 2025</span>

                                    <h5>Engineer of Technology and Electronic Center</h5>

                                    <p>I was study Basic of Infomation Technology. </p>
                                    <ul>
                                        <li>Certificate of Completion : Word, Excel, Power Point</li>
                                        <li>Certificate of Completion : Basic Computer / Network</li>
                                        <li>Certificate of Completion : Basic / C++ / Algorithm</li>
                                    </ul>
                                </div>

                                <div class="timeline-item">
                                    <div class="circle"></div>

                                    <h3>Hight School</h3>

                                    <span class="year">2022 - 2024</span>

                                    <h5>Samdech Techo Hun Sen Suong High School</h5>
                                    <ul>
                                        <li>Bachelor's Degree : D ( Social Science Class )</li>
                                    </ul>
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
                            <div class="d-flex align-items-center">
                                <hr class="flex-grow-1">
                                <span class="mx-3">front-end</span>
                                <hr class="flex-grow-1">
                            </div>
                            <div class="timeline-item">
                                <div class="circle"></div>

                                <h3>Vue.js</h3>

                                <span class="year">6 / 24 / 2026 - </span>

                                <h5>personal expense tracke (Team Group-1)</h5>

                                <ul>
                                    <li>Built reusable frontend components.</li>
                                    <li>Integrated REST APIs into vue applications.</li>
                                    <li>Fixed bugs and optimized website performance.</li>
                                    <li>User page I was make (Transaction-form / Report-form).</li>
                                    <li>Admin page I was make (User).</li>
                                    <li>I also participated in doing the UI for this website.</li>
                                </ul>
                            </div>

                            <div class="timeline-item">
                                <div class="circle"></div>

                                <h3>Java Script</h3>

                                <span class="year">3 / 2 / 2026</span>

                                <h5>Mini-Project (Team Group-4)</h5>

                                <ul>
                                    <li>Built reusable frontend components.</li>
                                    <li>Integrated REST APIs into Js applications.</li>
                                    <li>Fixed bugs and optimized website performance.</li>
                                </ul>
                            </div>

                            <div class="timeline-item">
                                <div class="circle"></div>

                                <h3>HTML + HTML5 + CSS</h3>

                                <span class="year">7 / 2 / 2025</span>

                                <h5>NK.Computer-shope</h5>

                                <ul>
                                    <li>Built reusable frontend components.</li>
                                    <li>Fixed bugs and optimized website performance.</li>
                                </ul>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
            <div data-aos="zoom-out">
                <h1 class="text-center mb-4 mt-5 text-light">My Certifycate</h1>
                <p class="text-center">
                    I have done verious programming courses increase my programming skills and I'm sharing few to them
                </p>
            </div>
            <!-- Certifycate -->
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