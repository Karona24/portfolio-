<template>
  <nav class="navbar navbar-expand-lg sticky-top navbar-custom">
    <div class="container">

      <!-- LOGO -->
      <a class="navbar-brand text-white fw-bold" href="">
        N.Karona
      </a>

      <!-- TOGGLER -->
      <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- MENU -->
      <div class="collapse navbar-collapse" id="navbarNav">

        <!-- LEFT MENU -->
        <ul class="navbar-nav mx-auto fs-5">

          <li class="nav-item">
            <RouterLink class="nav-link nav-hover" :to="{ name: 'home' }">
              Home
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link nav-hover" :to="{ name: 'about' }">
              About
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link nav-hover" :to="{ name: 'resum' }">
              Resume
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link nav-hover" :to="{ name: 'contact' }">
              Contact
            </RouterLink>
          </li>

        </ul>

        <!-- RIGHT ICON -->
        <ul class="navbar-nav social-icons">

          <li class="nav-item">
            <a class="nav-link text-light" target="_blank" rel="noopener noreferrer" href="https://github.com/Karona24">
              <i class="bi bi-github"></i>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-light" target="_blank" rel="noopener noreferrer"
              href="https://www.instagram.com/benerybon?igsh=MWU2MDg3dnM4YWZoeQ==">
              <i class="bi bi-instagram"></i>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-light" target="_blank" rel="noopener noreferrer"
              href="https://www.facebook.com/share/1Ehe26Bnu3/">
              <i class="bi bi-facebook"></i>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-light" target="_blank" rel="noopener noreferrer" href="https://t.me/noeunkarona">
              <i class="bi bi-telegram"></i>
            </a>
          </li>

        </ul>

      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-custom {
  background: #06121f;
  padding: 10px 0;
}

/* NAV LINKS */
.nav-hover {
  color: white !important;
  position: relative;
  transition: 0.3s;
  margin-right: 20px;
}

.nav-hover::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 2px;
  background: #00bfff;
  transition: 0.4s;
}

.nav-hover:hover {
  color: #00bfff !important;
}

.nav-hover:hover::after {
  width: 100%;
}

/* ACTIVE */
.router-link-active {
  color: #00bfff !important;
}

.router-link-active::after {
  width: 100%;
}

/* SOCIAL ICON */
.social-icons .nav-link {
  font-size: 22px;
  transition: 0.3s;
}

.social-icons .nav-link:hover {
  color: #00bfff !important;
  transform: translateY(-2px);
}

/* MOBILE */
@media (max-width: 991px) {
  .navbar-nav {
    text-align: center;
  }

  .nav-hover {
    margin-right: 0;
    padding: 12px 0;
  }

  .social-icons {
    flex-direction: row;
    justify-content: center;
    margin-top: 15px;
    gap: 12px;
  }
}
</style>