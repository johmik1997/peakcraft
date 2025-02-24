<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const showMobileNav = ref(false);
const isMobile = ref(false);

const toggleMobileNav = () => {
  showMobileNav.value = !showMobileNav.value;
};

const updateScreenSize = () => {
  isMobile.value = window.innerWidth <= 768;
  if (!isMobile.value) showMobileNav.value = false; // Close mobile menu when switching to desktop
};

// Ensure isMobile updates correctly on mount
onMounted(() => {
  updateScreenSize();
  window.addEventListener("resize", updateScreenSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateScreenSize);
});
</script>

<template>
  <header class="bg-black bg-opacity-10  px-7 py-4 md:px-28 md:py-6 backdrop-blur-3xl fixed w-full z-40">
    <nav class="flex justify-between items-center">
      <div>
        <a href="#">
          <img src="../assets/logo.webp" class="h-[60px] md:h-12 w-auto" alt="Logo for PeakXraft" />
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div v-if="!isMobile" class="hidden md:flex space-x-8 text-white uppercase font-medium">
        <ul class="flex space-x-8">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Project</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Domain</a></li>
        </ul>
        <div>
          <button class="md:px-10 md:py-2 md:border-white md:border-[1px] md:rounded cursor-pointer">Join us</button>
        </div>
      </div>

      <!-- Mobile Menu Icon -->
      <div v-if="isMobile" class="cursor-pointer text-white text-2xl" @click="toggleMobileNav">
        <FontAwesomeIcon :icon="showMobileNav ? faTimes : faBars" />
      </div>

      <!-- Mobile Navigation -->
      <transition name="mobile-nav" class="bg-#122c62">
        <ul
          v-if="showMobileNav"
          class="absolute top-16 px-6 right-4 w-52 py-10 text-xl text-white font-alata bg-indigo-900 bg-opacity-90 rounded-md flex flex-col space-y-5 shadow-lg">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Project</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Domain</a></li>
          <li class="px-1 py-2 cursor-pointer">
            <a href="#">Join Us</a>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<style scoped>
/* Mobile Navigation Animation */
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: opacity 0.3s ease-in-out, transform 0.3s;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
