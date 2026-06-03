<template>
    <NavBar />

    <section class="hero-section">
        <div class="container-lg">
            <div class="row align-items-center min-vh-100">

                <!-- TEXT CONTENT -->
                <div class="col-lg-6 col-md-6 col-12 order-2 order-md-1" data-aos="fade-right">
                    <div class="card bg-transparent" data-aos="fade-right">
                    <div class="hero-content" > 
                        <h1 class="hero-title">
                            Hello, I'm
                            <span class="edit-color">Noeun</span>
                            <br />
                            <span class="edit-color">Karona</span>
                        </h1>

                        <p class="hero-description">
                            <div class="h4 d-flex align-items-center gap-2 col-sm-center">
                            <span>Creative :</span>
                            <span class="hero-subtitle edit-color">
                                Full Stack Developer
                            </span>
                            </div>
                            Passionate about building modern web applications and creating
                            clean, responsive, and user-friendly digital experiences.
                            I enjoy learning new technologies and transforming ideas into
                            real-world solutions.
                        </p>

                        <div class="hero-buttons d-flex gap-4">
                            <a class="fancy" href="#">
                                <span class="top-key"></span>
                                <span class="text">View My Work</span>
                                <span class="bottom-key-1"></span>
                                <span class="bottom-key-2"></span>
                            </a>
                            <!-- From Uiverse.io by Nawsome -->
                            <button class="continue-application">
                                <div>
                                    <div class="pencil"></div>
                                    <div class="folder">
                                        <div class="top">
                                            <svg viewBox="0 0 24 27">
                                                <path
                                                    d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div class="paper"></div>
                                    </div>
                                </div>
                                Continue Application
                            </button>
                        </div>
                    </div>
                    </div>
                </div>

                <!-- IMAGE -->
                <div class="col-lg-6 col-md-6 col-12 order-1 order-md-2">
                    <div class="card bg-transparent" data-aos="fade-left">
                    <div class="image-wrapper">
                        <div class="pic">
                            <img src="../image/photo_2026-05-10_15-08-40.jpg" alt="Noeun Karona" />
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <FooterView />
</template>

<script setup>
import NavBar from '@/components/component/NavBar.vue'
import FooterView from '@/components/component/FooterView.vue'
</script>

<style scoped>
.hero-buttons {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}

/* Tablet */
@media (max-width: 991px) {
    .hero-buttons {
        justify-content: center;
    }
}

/* Mobile */
@media (max-width: 768px) {

    .hero-buttons {
        flex-direction: column;
        width: 100%;
    }

    .hero-buttons .fancy,
    .hero-buttons .continue-application {
        width: 100%;
        max-width: 320px;
    }
}
@media (max-width: 768px) {
    .hero-buttons {
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
}
.hero-section {
    background: #06121f;
    color: white;
    overflow: hidden;
}

.hero-content {
    padding-right: 20px;
}

.hero-title {
    font-size: 40px;
    font-weight: 700;
    line-height: 1.2;
}

.hero-subtitle {
    margin-top: 20px;
    margin-bottom: 20px;
    color: #00bfff;
    font-weight: 500;
}

.hero-description {
    color: #c9c9c9;
    line-height: 1.9;
    font-size: 16px;
    max-width: 550px;
}

/* IMAGE */
.image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.pic {
    width: 100%;
    max-width: 420px;
    height: 520px;
}

.pic img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0, 191, 255, 0.15);
}

/* ========================= */
/* TABLET */
/* ========================= */
@media (max-width: 991px) {
    .hero-title {
        font-size: 3.2rem;
    }

    .pic {
        max-width: 340px;
        height: 430px;
    }
}

/* ========================= */
/* MOBILE */
/* ========================= */
@media (max-width: 767px) {

    .hero-section {
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .hero-content {
        text-align: center;
        padding-right: 0;
    }

    .hero-title {
        font-size: 2.5rem;
        margin-top: 30px;
    }

    .hero-subtitle {
        font-size: 1.2rem;
    }

    .hero-description {
        font-size: 15px;
        max-width: 100%;
    }

    .hero-buttons {
        justify-content: center;
    }

    .pic {
        max-width: 280px;
        height: 340px;
    }


}

/* ========================= */
/* SMALL MOBILE */
/* ========================= */
@media (max-width: 480px) {

    .hero-title {
        font-size: 2rem;
    }

    .hero-subtitle {
        font-size: 1rem;
    }

    .pic {
        max-width: 240px;
        height: 300px;
    }
}

/* ----Button---- */

/* From Uiverse.io by cssbuttons-io */
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

.continue-application > div {
  top: 0;
  left: 0;
  bottom: 0;
  width: 53px;
  position: absolute;
  overflow: hidden;
  border-radius: 5px 0 0 5px;
  background: var(--background-left);
}

.continue-application > div .folder {
  width: 23px;
  height: 27px;
  position: absolute;
  left: 15px;
  top: 13px;
}

.continue-application > div .folder .top {
  left: 0;
  top: 0;
  z-index: 2;
  position: absolute;
  transform: translateX(var(--fx, 0));
  transition: transform 0.4s ease var(--fd, 0.3s);
}

.continue-application > div .folder .top svg {
  width: 24px;
  height: 27px;
  display: block;
  fill: var(--folder);
  transform-origin: 0 50%;
  transition: transform 0.3s ease var(--fds, 0.45s);
  transform: perspective(120px) rotateY(var(--fr, 0deg));
}

.continue-application > div .folder:before, .continue-application > div .folder:after,
.continue-application > div .folder .paper {
  content: "";
  position: absolute;
  left: var(--l, 0);
  top: var(--t, 0);
  width: var(--w, 100%);
  height: var(--h, 100%);
  border-radius: 1px;
  background: var(--b, var(--folder-inner));
}

.continue-application > div .folder:before {
  box-shadow: 0 1.5px 3px var(--shadow), 0 2.5px 5px var(--shadow), 0 3.5px 7px var(--shadow);
  transform: translateX(var(--fx, 0));
  transition: transform 0.4s ease var(--fd, 0.3s);
}

.continue-application > div .folder:after,
.continue-application > div .folder .paper {
  --l: 1px;
  --t: 1px;
  --w: 21px;
  --h: 25px;
  --b: var(--paper-behind);
}

.continue-application > div .folder:after {
  transform: translate(var(--pbx, 0), var(--pby, 0));
  transition: transform 0.4s ease var(--pbd, 0s);
}

.continue-application > div .folder .paper {
  z-index: 1;
  --b: var(--paper);
}

.continue-application > div .folder .paper:before, .continue-application > div .folder .paper:after {
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

.continue-application > div .folder .paper:after {
  --tp: 6px;
  --wp: 10px;
}

.continue-application > div .pencil {
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

.continue-application > div .pencil:before, .continue-application > div .pencil:after {
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

.continue-application > div .pencil:before {
  -webkit-clip-path: polygon(0 5%, 5px 5%, 5px 17px, 50% 20px, 0 17px);
  clip-path: polygon(0 5%, 5px 5%, 5px 17px, 50% 20px, 0 17px);
}

.continue-application > div .pencil:after {
  --b: none;
  --w: 3px;
  --h: 6px;
  --br: 0 2px 1px 0;
  --t: 3px;
  --l: 3px;
  border-top: 1px solid var(--pencil-top);
  border-right: 1px solid var(--pencil-top);
}

.continue-application:before, .continue-application:after {
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
/* animation title */
.hero-subtitle {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    color: #00d4ff;
    border-right: 2px solid #00d4ff;

    animation:
        typing 3s steps(20) infinite alternate,
        blink .7s infinite;
}

@keyframes typing {
    from {
        width: 0;
    }

    to {
        width: 20ch;
    }
}

@keyframes blink {
    50% {
        border-color: transparent;
    }
}
.h4{
    display:flex;
    align-items:center;
    gap:10px;
}
.edit-color{
    color: #00bfff !important;
}
</style>