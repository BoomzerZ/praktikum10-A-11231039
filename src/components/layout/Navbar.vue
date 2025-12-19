<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../../stores/useAuth'

// --- store auth (shared ke semua komponen) ---
const { user, isLoggedIn, logout } = useAuth()

// --- state navbar ---
const scrolled = ref(false)
const dropdownOpen = ref(false)
const mobileOpen = ref(false)

const router = useRouter()

// inisial huruf di icon profil
const initial = computed(() =>
  user.value?.username?.charAt(0)?.toUpperCase() || '?'
)

// scroll shadow
function handleScroll() {
  scrolled.value = window.scrollY > 6
}

// buka / tutup dropdown (klik icon)
function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value
}

// logout + redirect ke login
function handleLogout() {
  logout()
  dropdownOpen.value = false
  router.push('/login')
}

// tutup dropdown & menu mobile kalau klik di luar nav
function handleClickOutside(e) {
  const nav = document.querySelector('nav')
  if (nav && !nav.contains(e.target)) {
    dropdownOpen.value = false
    mobileOpen.value = false
  }
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <nav
    :class="[
      'fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-200',
      scrolled ? 'shadow-lg' : ''
    ]"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- LOGO -->
        <router-link to="/" class="flex items-center gap-3">
          <img
            src="/src/assets/LogoEdventure.png"
            alt="EdVenture"
            class="h-10 w-auto"
          />
        </router-link>

        <!-- DESKTOP NAV -->
        <div class="hidden md:flex items-center gap-6">
          <router-link to="/" class="hover:text-indigo-500">Home</router-link>
          <router-link to="/game" class="hover:text-indigo-500">Game</router-link>
          <router-link to="/leaderboard" class="hover:text-indigo-500">
            Leaderboard
          </router-link>
          <router-link to="/gallery" class="hover:text-indigo-500">
            Gallery
          </router-link>
          <router-link to="/about" class="hover:text-indigo-500">
            About
          </router-link>
          <!--router-link to="/COTS" class="hover:text-indigo-500">COTS</router-link-->

          <!-- ICON PROFIL -->
          <div class="relative">
            <button
              type="button"
              @click.stop="toggleDropdown"
              class="flex items-center justify-center w-10 h-10 rounded-full border-2 border-indigo-300 bg-gray-100 hover:border-indigo-500 transition"
            >
              <span class="text-indigo-700 font-bold">
                {{ initial }}
              </span>
            </button>

            <!-- DROPDOWN -->
            <transition name="fade">
              <div
                v-if="dropdownOpen"
                class="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2 border"
              >
                <!-- BELUM LOGIN -->
                <template v-if="!isLoggedIn">
                  <router-link
                    to="/login"
                    class="block px-3 py-2 rounded hover:bg-gray-100 text-sm"
                    @click="dropdownOpen = false"
                  >
                    Log In
                  </router-link>

                  <router-link
                    to="/signup"
                    class="block px-3 py-2 rounded hover:bg-gray-100 text-sm"
                    @click="dropdownOpen = false"
                  >
                    Sign Up
                  </router-link>
                </template>

                <!-- SUDAH LOGIN -->
                <template v-else>
                  <div class="px-3 py-2 text-xs text-gray-500">
                    Masuk sebagai
                    <span class="font-semibold text-gray-800">
                      {{ user?.username }}
                    </span>
                  </div>

                  <router-link
                    to="/profile"
                    class="block px-3 py-2 rounded hover:bg-gray-100 text-sm"
                    @click="dropdownOpen = false"
                  >
                    Profile
                  </router-link>

                  <button
                    type="button"
                    @click="handleLogout"
                    class="w-full text-left px-3 py-2 rounded hover:bg-red-100 text-sm text-red-600"
                  >
                    Logout
                  </button>
                </template>
              </div>
            </transition>
          </div>
        </div>

        <!-- MOBILE: hamburger -->
        <button
          type="button"
          class="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100"
          @click.stop="mobileOpen = !mobileOpen"
        >
          <span class="sr-only">Open main menu</span>
          <span v-if="!mobileOpen">☰</span>
          <span v-else>✕</span>
        </button>
      </div>
    </div>

    <!-- MOBILE MENU -->
    <div
      v-if="mobileOpen"
      class="md:hidden border-t border-gray-200 bg-white"
    >
      <div class="space-y-1 px-4 py-3">
        <router-link
          to="/"
          class="block py-1 hover:text-indigo-500"
          @click="mobileOpen = false"
        >Home</router-link>

        <router-link
          to="/game"
          class="block py-1 hover:text-indigo-500"
          @click="mobileOpen = false"
        >Game</router-link>

        <router-link
          to="/leaderboard"
          class="block py-1 hover:text-indigo-500"
          @click="mobileOpen = false"
        >Leaderboard</router-link>

        <router-link
          to="/gallery"
          class="block py-1 hover:text-indigo-500"
          @click="mobileOpen = false"
        >Gallery</router-link>

        <router-link
          to="/about"
          class="block py-1 hover:text-indigo-500"
          @click="mobileOpen = false"
        >About</router-link>

        <hr class="my-2" />

        <!-- mobile auth -->
        <template v-if="!isLoggedIn">
          <router-link
            to="/login"
            class="block py-1 hover:text-indigo-500"
            @click="mobileOpen = false"
          >Log In</router-link>
          <router-link
            to="/signup"
            class="block py-1 hover:text-indigo-500"
            @click="mobileOpen = false"
          >Sign Up</router-link>
        </template>
        <template v-else>
          <router-link
            to="/profile"
            class="block py-1 hover:text-indigo-500"
            @click="mobileOpen = false"
          >Profile</router-link>
          <button
            type="button"
            class="block w-full text-left py-1 text-red-600 hover:text-red-700"
            @click="() => { mobileOpen = false; handleLogout() }"
          >
            Logout
          </button>
        </template>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(4px);
}
</style>
