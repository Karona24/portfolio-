<template>
  <main>
    <NavBar />
    <div class="container">
      <div data-aos="zoom-out">
        <h1 class="text-center mb-4 mt-5 text-light">Contact</h1>
        <p class="text-center">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit.
          Sed ut perspiciatis
        </p>
        <p class="text-center">unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam
          rem aperiam
        </p>
      </div>
      <section class="contact-section">
        <div class="container-fluid">
          <div class="row g-4">

            <!-- LEFT SIDE -->
            <div class="col-lg-5">
              <div class="contact-card" data-aos="zoom-out">

                <h1 class="title">Contact Info</h1>

                <p class="desc">
                  Praesent sapien massa, convallis a pellentesque nec,
                  egestas non nisi. Vestibulum ante ipsum primis.
                </p>

                <!-- LOCATION -->
                <div class="info-item">
                  <div class="icon">
                    <i class="bi bi-geo-alt"></i>
                  </div>

                  <div>
                    <h3>Our Location</h3>
                    <p>608 Street</p>
                    <p>Khan Toulkok, Sangkat Berngkok ll, Phnom penh</p>
                  </div>
                </div>

                <!-- PHONE -->
                <div class="info-item">
                  <div class="icon">
                    <i class="bi bi-telephone"></i>
                  </div>

                  <div>
                    <h3>Phone Number</h3>
                    <p>+855 96 630 5719</p>
                    <p>Not Null</p>
                  </div>
                </div>

                <!-- EMAIL -->
                <div class="info-item">
                  <div class="icon">
                    <i class="bi bi-envelope"></i>
                  </div>

                  <div>
                    <h3>Email Address</h3>
                    <p>noeunkarona354@gmail.com</p>
                    <p>Not Null</p>
                  </div>
                </div>


              </div>
            </div>

            <!-- RIGHT SIDE -->
            <div class="col-lg-7">
              <div class="contact-card" data-aos="zoom-out">

                <h1 class="title">Get In Touch</h1>

                <p class="desc">
                  Praesent sapien massa, convallis a pellentesque nec,
                  egestas non nisi. Vestibulum ante ipsum primis.
                </p>

                <form>
                  <div class="row g-4">

                    <div class="col-md-6">
                      <input type="text" class="form-control custom-input" placeholder="Your Name" />
                    </div>

                    <div class="col-md-6">
                      <input type="email" class="form-control custom-input" placeholder="Your Email" />
                    </div>

                    <div class="col-12">
                      <input type="text" class="form-control custom-input" placeholder="Subject" />
                    </div>

                    <div class="col-12">
                      <textarea rows="8" class="form-control custom-input" placeholder="Message"></textarea>
                    </div>

                    <div class="col-12 text-center">
                      <button class="send-btn">
                        Send Message
                      </button>
                    </div>

                  </div>
                </form>

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
</script>
<style scoped>
.contact-section {
  background: #07131d;
  min-height: 90vh;
  padding: 40px 20px;
  font-family: sans-serif;
}

.contact-card {
  background: #0b1823;
  border-radius: 24px;
  padding: 50px;
  height: 100%;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
}

.title {
  color: white;
  font-size: 45px;
  font-weight: 200;
  margin-bottom: 20px;
}

.desc {
  color: #b8b8b8;
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 60px;
  max-width: 700px;
}

/* INFO */
.info-item {
  display: flex;
  gap: 30px;
  margin-bottom: 70px;
}

.icon {
  color: white;
  font-size: 30px;
  min-width: 40px;
}

.info-item h3 {
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
}

.info-item p {
  color: #b8b8b8;
  font-size: 18px;
  margin-bottom: 6px;
}

/* FORM */
.custom-input {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.08);
  height: 70px;
  color: white;
  border-radius: 14px;
  padding: 20px;
  font-size: 20px;
}

.custom-input:focus {
  background: transparent;
  color: white;
  box-shadow: none;
  border-color: #1f8fff;
}

textarea.custom-input {
  height: auto;
  resize: none;
}

.custom-input::placeholder {
  color: #8b8b8b;
}

.send-btn {
  background: transparent;
  border: none;
  color: white;
  font-size: 26px;
  margin-top: 20px;
  transition: 0.3s;
}

.send-btn:hover {
  color: #1f8fff;
}

/* RESPONSIVE */
@media (max-width: 992px) {
  .contact-card {
    padding: 30px;
  }

  .title {
    font-size: 40px;
  }

  .desc {
    font-size: 16px;
  }

  .info-item {
    gap: 20px;
    margin-bottom: 50px;
  }

  .info-item h3 {
    font-size: 22px;
  }

  .custom-input {
    height: 60px;
    font-size: 17px;
  }
}
</style>