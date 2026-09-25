<style scoped>
.fancy {
    background-color: transparent;
    border: 2px solid rgba(255, 255, 255, 0.278);
    border-radius: 0;
    box-sizing: border-box;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-weight: 700;
    letter-spacing: 0.05em;
    margin: 0;
    outline: none;
    overflow: visible;
    padding: 1.25em 2em;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-transform: none;
    transition: all 0.3s ease-in-out;
    user-select: none;
    font-size: 13px;
}

.fancy::before {
    content: " ";
    width: 1.5625rem;
    height: 2px;
    background: white;
    top: 50%;
    left: 1.5em;
    position: absolute;
    transform: translateY(-50%);
    transform-origin: center;
    transition: background 0.3s linear, width 0.3s linear;
}

.fancy .text {
    font-size: 1.125em;
    line-height: 1.33333em;
    padding-left: 2em;
    display: block;
    text-align: left;
    transition: all 0.3s ease-in-out;
    text-transform: uppercase;
    text-decoration: none;
    color: white;
}

.fancy .top-key {
    height: 2px;
    width: 1.5625rem;
    top: -2px;
    left: 0.625rem;
    position: absolute;
    background: white;
    transition: width 0.5s ease-out, left 0.3s ease-out;
}

.fancy .bottom-key-1 {
    height: 2px;
    width: 1.5625rem;
    right: 1.875rem;
    bottom: -2px;
    position: absolute;
    background: white;
    transition: width 0.5s ease-out, right 0.3s ease-out;
}

.fancy .bottom-key-2 {
    height: 2px;
    width: 0.625rem;
    right: 0.625rem;
    bottom: -2px;
    position: absolute;
    background: white;
    transition: width 0.5s ease-out, right 0.3s ease-out;
}

.fancy:hover {
    color: white;
    background: #0000003b;
}

.fancy:hover::before {
    width: 0.9375rem;
    background: white;
}

.fancy:hover .text {
    color: white;
    padding-left: 1.5em;
}

.fancy:hover .top-key {
    left: -2px;
    width: 0px;
}

.fancy:hover .bottom-key-1,
.fancy:hover .bottom-key-2 {
    right: 0;
    width: 0;
}

/* From Uiverse.io by Nawsome */
.continue-application {
    --color: #fff;
    --background: #404660;
    --background-hover: #3A4059;
    --background-left: #2B3044;
    --folder: #F3E9CB;
    --folder-inner: #BEB393;
    --paper: #FFFFFF;
    --paper-lines: #BBC1E1;
    --paper-behind: #E1E6F9;
    --pencil-cap: #fff;
    --pencil-top: #275EFE;
    --pencil-middle: #fff;
    --pencil-bottom: #5C86FF;
    --shadow: rgba(13, 15, 25, .2);
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 500;
    line-height: 19px;
    -webkit-tap-highlight-color: transparent;
    padding: 17px 29px 17px 69px;
    transition: background 0.3s;
    color: var(--color);
    background: var(--bg, var(--background));
}

.continue-application>div {
    top: 0;
    left: 0;
    bottom: 0;
    width: 53px;
    position: absolute;
    overflow: hidden;
    border-radius: 5px 0 0 5px;
    background: var(--background-left);
}

.continue-application>div .folder {
    width: 23px;
    height: 27px;
    position: absolute;
    left: 15px;
    top: 13px;
}

.continue-application>div .folder .top {
    left: 0;
    top: 0;
    z-index: 2;
    position: absolute;
    transform: translateX(var(--fx, 0));
    transition: transform 0.4s ease var(--fd, 0.3s);
}

.continue-application>div .folder .top svg {
    width: 24px;
    height: 27px;
    display: block;
    fill: var(--folder);
    transform-origin: 0 50%;
    transition: transform 0.3s ease var(--fds, 0.45s);
    transform: perspective(120px) rotateY(var(--fr, 0deg));
}

.continue-application>div .folder:before,
.continue-application>div .folder:after,
.continue-application>div .folder .paper {
    content: "";
    position: absolute;
    left: var(--l, 0);
    top: var(--t, 0);
    width: var(--w, 100%);
    height: var(--h, 100%);
    border-radius: 1px;
    background: var(--b, var(--folder-inner));
}

.continue-application>div .folder:before {
    box-shadow: 0 1.5px 3px var(--shadow), 0 2.5px 5px var(--shadow), 0 3.5px 7px var(--shadow);
    transform: translateX(var(--fx, 0));
    transition: transform 0.4s ease var(--fd, 0.3s);
}

.continue-application>div .folder:after,
.continue-application>div .folder .paper {
    --l: 1px;
    --t: 1px;
    --w: 21px;
    --h: 25px;
    --b: var(--paper-behind);
}

.continue-application>div .folder:after {
    transform: translate(var(--pbx, 0), var(--pby, 0));
    transition: transform 0.4s ease var(--pbd, 0s);
}

.continue-application>div .folder .paper {
    z-index: 1;
    --b: var(--paper);
}

.continue-application>div .folder .paper:before,
.continue-application>div .folder .paper:after {
    content: "";
    width: var(--wp, 14px);
    height: 2px;
    border-radius: 1px;
    transform: scaleY(0.5);
    left: 3px;
    top: var(--tp, 3px);
    position: absolute;
    background: var(--paper-lines);
    box-shadow: 0 12px 0 0 var(--paper-lines), 0 24px 0 0 var(--paper-lines);
}

.continue-application>div .folder .paper:after {
    --tp: 6px;
    --wp: 10px;
}

.continue-application>div .pencil {
    height: 2px;
    width: 3px;
    border-radius: 1px 1px 0 0;
    top: 8px;
    left: 105%;
    position: absolute;
    z-index: 3;
    transform-origin: 50% 19px;
    background: var(--pencil-cap);
    transform: translateX(var(--pex, 0)) rotate(35deg);
    transition: transform 0.4s ease var(--pbd, 0s);
}

.continue-application>div .pencil:before,
.continue-application>div .pencil:after {
    content: "";
    position: absolute;
    display: block;
    background: var(--b, linear-gradient(var(--pencil-top) 55%, var(--pencil-middle) 55.1%, var(--pencil-middle) 60%, var(--pencil-bottom) 60.1%));
    width: var(--w, 5px);
    height: var(--h, 20px);
    border-radius: var(--br, 2px 2px 0 0);
    top: var(--t, 2px);
    left: var(--l, -1px);
}

.continue-application>div .pencil:before {
    -webkit-clip-path: polygon(0 5%, 5px 5%, 5px 17px, 50% 20px, 0 17px);
    clip-path: polygon(0 5%, 5px 5%, 5px 17px, 50% 20px, 0 17px);
}

.continue-application>div .pencil:after {
    --b: none;
    --w: 3px;
    --h: 6px;
    --br: 0 2px 1px 0;
    --t: 3px;
    --l: 3px;
    border-top: 1px solid var(--pencil-top);
    border-right: 1px solid var(--pencil-top);
}

.continue-application:before,
.continue-application:after {
    content: "";
    position: absolute;
    width: 10px;
    height: 2px;
    border-radius: 1px;
    background: var(--color);
    transform-origin: 9px 1px;
    transform: translateX(var(--cx, 0)) scale(0.5) rotate(var(--r, -45deg));
    top: 26px;
    right: 16px;
    transition: transform 0.3s;
}

.continue-application:after {
    --r: 45deg;
}

.continue-application:hover {
    --cx: 2px;
    --bg: var(--background-hover);
    --fx: -40px;
    --fr: -60deg;
    --fd: .15s;
    --fds: 0s;
    --pbx: 3px;
    --pby: -3px;
    --pbd: .15s;
    --pex: -24px;
}


.pic {
    max-width: 450px;
    height: 480px;
    margin-left: 100px;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.bg-edit {
    background-color: #040a324a;
}

.card-edit {
    transition: 0.3s;
    cursor: pointer;
}

.card-edit:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px #00000033;
}

.skill-card {
    padding: 20px;
    background: #071926;
    border: 1px solid #ffffff0d;
    border-radius: 6px;
    color: white;
    transition: 0.3s;
}

.skill-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px #0000004d;
}

.skill-card h2 {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: bold;
}

.skill-card p {
    color: #8b949e;
    line-height: 1.7;
    margin-bottom: 10px;
    font-size: 18px;
}

.percent {
    text-align: right;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
}

.progress {
    width: 100%;
    height: 10px;
    background: #0d2a3d;
    border-radius: 20px;
    overflow: hidden;
}

.progress-bar {
    height: 100%;
    background: #12a8f5;
    border-radius: 20px;
}

.about-title {
    line-height: 1.4;
}

.pic {
    width: 100%;
    max-width: 400px;
    margin: auto;
}

.pic img {
    width: 100%;
    border-radius: 15px;
    object-fit: cover;
}

.button-group {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

/* Tablet */
@media (max-width: 992px) {

    .about-title {
        font-size: 2rem;
    }

    .pic {
        max-width: 320px;
    }
}

/* Mobile */
@media (max-width: 768px) {

    .about-title {
        font-size: 1.8rem;
        text-align: center;
    }

    .card {
        text-align: center;
    }

    .button-group {
        justify-content: center;
    }

    .button-group .btn {
        width: 100%;
    }

    .pic {
        max-width: 250px;
    }
}

/* ===========================
   ABOUT
=========================== */

.about-desc {
    max-width: 700px;
    margin: auto;
    color: #9ca3af;
    line-height: 1.8;
}

.about-title {
    line-height: 1.4;
    font-size: 3rem;
}

.about-subtitle {
    line-height: 1.8;
    color: #d1d5db;
}

.about-text {
    color: #9ca3af;
    line-height: 1.8;
}

/* ===========================
   IMAGE
=========================== */

.pic {
    width: 100%;
    max-width: 420px;
}

.pic img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 191, 255, 0.15);
}

/* ===========================
   BUTTONS
=========================== */

.button-group {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}

/* ===========================
   TABLET
=========================== */

@media (max-width: 991px) {

    .about-title {
        font-size: 2.2rem;
        text-align: center;
    }

    .about-subtitle,
    .about-text,
    .card p {
        text-align: center;
    }

    .button-group {
        justify-content: center;
    }

    .pic {
        max-width: 320px;
    }
}

/* ===========================
   MOBILE
=========================== */

@media (max-width: 768px) {

    .about-title {
        font-size: 1.8rem;
    }

    .about-subtitle {
        font-size: 1rem;
    }

    .about-text {
        font-size: 0.95rem;
    }

    .button-group {
        flex-direction: column;
        width: 100%;
    }

    .button-group .fancy,
    .button-group .continue-application {
        width: 100%;
        max-width: 320px;
    }

    .pic {
        max-width: 260px;
    }
}

/* ===========================
   SMALL MOBILE
=========================== */

@media (max-width: 576px) {

    .about-title {
        font-size: 1.5rem;
    }

    .about-desc {
        font-size: 0.9rem;
    }

    .pic {
        max-width: 220px;
    }
}
</style>
<template>
    <NavBar />
    <div class="container-lg mt-6 mb-5">
        <!-- ABOUT SECTION -->
        <div class="container-lg py-5">

            <!-- TITLE -->
            <div class="mb-5 text-center" data-aos="zoom-out">
                <h1 class="mb-4 mt-5 text-light">About</h1>

                <p class="about-desc">
                    I am a passionate Full-Stack Web Developer with a strong foundation in Vue.js and Express. I enjoy
                    creating clean, responsive, and user-friendly web applications that solve real-world problems.
                    Constantly learning and adapting to new technologies, I am driven to deliver efficient and scalable
                    solutions.
                </p>
            </div>

            <!-- CONTENT -->
            <div class="row align-items-center g-5 mb-5">

                <!-- TEXT -->
                <div class="col-lg-7 col-md-12 col-12 order-2 order-lg-1" data-aos="fade-right">

                    <div class="card border-0 bg-transparent">

                        <p class="text-info fw-semibold">
                            Hello there
                        </p>

                        <h1 class="fw-light text-light about-title">
                            Hi, I'm Karona. A calm-minded creative developer crafting serene digital experiences.
                        </h1>

                        <h5 class="fw-light mt-3 about-subtitle">
                            I am a developer who focuses on building clean, efficient, and user-centric web
                            applications. Specializing in modern technologies like Vue.js and Express, I combine
                            thoughtful design with solid code structure to deliver smooth digital experiences.
                        </h5>

                        <p class="mt-3 about-text">
                            Beyond coding, I enjoy problem-solving and exploring new technologies to refine my craft.
                            Whether it's crafting intuitive user interfaces or building reliable backend services, I
                            strive to make every project meaningful and well-structured.
                        </p>

                    </div>

                    <!-- BUTTONS -->
                    <div class="mt-4 button-group">

                        <a class="fancy" href="#">
                            <span class="top-key"></span>
                            <span class="text">View My Work</span>
                            <span class="bottom-key-1"></span>
                            <span class="bottom-key-2"></span>
                        </a>

                        <button class="continue-application" @click="$router.push({ name: 'contact' })">
                            <div>
                                <div class="pencil"></div>

                                <div class="folder">
                                    <div class="top">
                                        <svg viewBox="0 0 24 27">
                                            <path
                                                d="M1,0 L23,0 C23.5522847,0 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 0,26.5522847 0,26 L0,1 C0,0.44771525 0.44771525,0 1,0 Z">
                                            </path>
                                        </svg>
                                    </div>

                                    <div class="paper"></div>
                                </div>
                            </div>

                            Get In Touch
                        </button>

                    </div>

                </div>

                <!-- IMAGE -->
                <div class="col-lg-5 col-md-12 col-12 text-center order-1 order-lg-2">
                    <div class="card bg-transparent" data-aos="fade-left">
                        <div class="pic mx-auto">
                            <img src="../image/photo_2026-09-24_20-43-41.jpg" alt="Profile">
                        </div>
                    </div>


                </div>

            </div>

        </div>
        <h1 class="text-center text-light">Software Skills</h1>
        <hr class="mt-5 mb-4">
        <div class="row">
            <div class="col-lg-3 col-md-6 col-12 mt-4" v-for="(skill, index) in skills" :key="index">
                <div class="skill-card h-100" data-aos="zoom-in">
                    <div class="icon-box mb-4">
                        <i :class="skill.icon"></i>
                    </div>
                    <h2>{{ skill.title }}</h2>
                    <p>{{ skill.description }}</p>
                    <div class="percent">
                        {{ skill.percent }}%
                    </div>
                    <div class="progress">
                        <div class="progress-bar" :style="{ width: skill.percent + '%' }"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sec mt-5 mb-5">
            <h1 class="text-center text-light">Preference</h1>
            <hr class="mt-5 mb-4">
            <div class="row mt-5 g-4" data-aos="flip-down">
                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="card border-0 bg-transparent text-center p-4 h-100">
                        <i class="bi bi-book-half icon"></i>
                        <h5 class="mt-3 text-light">Reading</h5>
                        <p class="text-secondary">
                            I enjoy reading books and learning new knowledge every day.
                        </p>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="card border-0 bg-transparent text-center p-4 h-100">
                        <i class="bi bi-film icon"></i>
                        <h5 class="mt-3 text-light">Movies</h5>
                        <p class="text-secondary">
                            Watching movies helps me relax and explore different stories.
                        </p>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="card border-0 bg-transparent text-center p-4 h-100">
                        <i class="bi bi-music-note-beamed icon"></i>
                        <h5 class="mt-3 text-light">Music</h5>
                        <p class="text-secondary">
                            Music keeps me motivated and improves my mood while working.
                        </p>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="card border-0 bg-transparent text-center p-4 h-100">
                        <i class="bi bi-dribbble icon"></i>
                        <h5 class="mt-3 text-light">Sports</h5>
                        <p class="text-secondary">
                            I love playing sports and staying active for a healthy lifestyle.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FooterView />
</template>
<script setup>
import NavBar from '@/components/component/NavBar.vue';
import FooterView from '@/components/component/FooterView.vue';
const skills = [
    {
        title: "Vue JS",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        percent: 60,
    },
    {
        title: "JavaScript",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        percent: 50,
    },
    {
        title: "Express JS",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        percent: 65,
    },
    {
        title: "MySQL",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        percent: 55,
    },
    {
        title: "GitHup",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        percent: 50,
    },
    {
        title: "Postman",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        percent: 65,
    },
    {
        title: "Linux Security",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        percent: 40,
    },
    {
        title: "HTML",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        percent: 70,
    },
    {
        title: "CSS",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        percent: 65,
    }, 
    {
        title: "Bootstrap",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        percent: 50,
    },
    {
        title: "Figma",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        percent: 50,
    },
]
</script>