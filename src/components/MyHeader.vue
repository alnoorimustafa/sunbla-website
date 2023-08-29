<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="/logo.png" alt="Logo" width="40" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul class="navbar-nav">
            <router-link to="/" class="text-decoration-none">
              <li class="nav-item">
                <a class="nav-link">الصفحة الرئيسية</a>
              </li>
            </router-link>
            <router-link to="/about-us" class="text-decoration-none">
              <li class="nav-item">
                <a class="nav-link">قصتنا</a>
              </li>
            </router-link>
            <router-link to="/projects" class="text-decoration-none">
              <li class="nav-item">
                <a class="nav-link">برامجنا</a>
              </li>
            </router-link>
            <router-link to="/our-advantage" class="text-decoration-none">
              <li class="nav-item">
                <a class="nav-link">ميزتنا</a>
              </li>
            </router-link>
            <!-- Add more nav links here -->
          </ul>
          <router-link to="/contact-us" class="text-decoration-none">
            <div class="navbar-nav">
              <a class="nav-link">تواصل</a>
            </div>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>
