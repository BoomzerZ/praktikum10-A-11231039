import { ref, computed } from 'vue'

const user = ref(null) // null = belum login

export function useAuth() {
  // login palsu (hanya demo, tanpa backend)
  const login = (username, password) => {
    if (!username || !password) {
      throw new Error('Username dan password wajib diisi')
    }

    user.value = { username }

    // simpan ke localStorage biar tidak hilang saat refresh
    localStorage.setItem('edventure-user', JSON.stringify(user.value))
  }

  const signup = (username, password) => {
    // demo: anggap Sign Up selalu berhasil
    if (!username || !password) {
      throw new Error('Username dan password wajib diisi')
    }

    user.value = { username }
    localStorage.setItem('edventure-user', JSON.stringify(user.value))
  }

  const logout = () => {
    user.value = null
    localStorage.removeItem('edventure-user')
  }

  const isLoggedIn = computed(() => !!user.value)

  // init dari localStorage kalau ada
  if (!user.value) {
    const saved = localStorage.getItem('edventure-user')
    if (saved) {
      user.value = JSON.parse(saved)
    }
  }

  return { user, isLoggedIn, login, signup, logout }
}
