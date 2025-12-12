<template>
  <section class="profile-setting bg-white p-6 rounded shadow">
    <h2 class="text-lg font-semibold mb-4">Profile Settings</h2>

    <form @submit.prevent="onSave" class="space-y-4">
      <div>
        <label class="block text-sm text-gray-600 mb-1">Display name</label>
        <input v-model="form.username" type="text" class="w-full px-3 py-2 border rounded" />
        <p v-if="errors.username" class="text-xs text-red-600 mt-1">{{ errors.username }}</p>
      </div>

      <div>
        <label class="block text-sm text-gray-600 mb-1">Email</label>
        <input v-model="form.email" type="email" class="w-full px-3 py-2 border rounded" />
        <p v-if="errors.email" class="text-xs text-red-600 mt-1">{{ errors.email }}</p>
      </div>

      <div>
        <label class="block text-sm text-gray-600 mb-1">Bio</label>
        <textarea v-model="form.bio" rows="3" class="w-full px-3 py-2 border rounded"></textarea>
      </div>

      <div>
        <label class="block text-sm text-gray-600 mb-1">Avatar URL</label>
        <input v-model="form.avatar" type="text" class="w-full px-3 py-2 border rounded" />
      </div>

      <!-- optional password change -->
      <div>
        <label class="block text-sm text-gray-600 mb-1">New password (optional)</label>
        <input v-model="form.password" type="password" class="w-full px-3 py-2 border rounded" />
      </div>

      <div class="flex items-center gap-2">
        <button type="submit" :disabled="loading" class="px-3 py-2 bg-blue-600 text-white rounded">
          <span v-if="loading">Saving...</span>
          <span v-else>Save</span>
        </button>
        <button type="button" @click="onCancel" class="px-3 py-2 border rounded">Cancel</button>
        <div v-if="msg" class="text-sm text-green-600 ml-3">{{ msg }}</div>
      </div>
    </form>
  </section>
</template>

<script setup>
import { reactive, ref, watch, toRaw } from 'vue'
import { useAuth } from '../../stores/useAuth' // sesuaikan path jika beda

const emit = defineEmits(['saved','cancelled','error'])

const { user, isLoggedIn, updateUser } = useAuth ? useAuth() : { user: ref(null), isLoggedIn: ref(false), updateUser: null }

// initialize form from user store (fallback to props approach if needed)
const form = reactive({
  username: user?.value?.username ?? '',
  email: user?.value?.email ?? '',
  bio: user?.value?.bio ?? '',
  avatar: user?.value?.avatar ?? '',
  password: ''
})

const loading = ref(false)
const msg = ref('')
const errors = reactive({ username: '', email: '' })

// Keep form in sync if user changes elsewhere:
if (user) {
  watch(user, (u) => {
    form.username = u?.username ?? ''
    form.email = u?.email ?? ''
    form.bio = u?.bio ?? ''
    form.avatar = u?.avatar ?? ''
  }, { immediate: true })
}

function validate() {
  errors.username = ''
  errors.email = ''
  if (!form.username || form.username.trim().length < 2) {
    errors.username = 'Display name minimal 2 karakter.'
  }
  if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = 'Masukkan email valid.'
  }
  return !errors.username && !errors.email
}

async function onSave() {
  if (!validate()) return
  loading.value = true
  msg.value = ''
  try {
    const payload = {
      username: form.username.trim(),
      email: form.email.trim(),
      bio: form.bio,
      avatar: form.avatar,
      // only include password if provided
      ...(form.password ? { password: form.password } : {})
    }

    // Prefer store function if tersedia
    if (updateUser && typeof updateUser === 'function') {
      // expected that updateUser returns updated user or throws on error
      const updated = await updateUser(payload)
      // notify parent
      emit('saved', updated ?? toRaw(payload))
    } else {
      // fallback: emit raw payload so parent can handle update (API call)
      emit('saved', toRaw(payload))
    }

    msg.value = 'Saved'
    form.password = ''
  } catch (err) {
    console.error('Profile update error', err)
    emit('error', err)
  } finally {
    loading.value = false
  }
}

function onCancel() {
  // reset form to store values
  if (user?.value) {
    form.username = user.value.username ?? ''
    form.email = user.value.email ?? ''
    form.bio = user.value.bio ?? ''
    form.avatar = user.value.avatar ?? ''
  }
  form.password = ''
  emit('cancelled')
}
</script>

<style scoped>
/* sesuaikan styling projectmu */
</style>
