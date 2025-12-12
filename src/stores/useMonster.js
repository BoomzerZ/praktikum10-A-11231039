import { ref } from 'vue'

const STORAGE_KEY = 'edventure-monsters'

// daftar default semua monster yang "ada" di game
const defaultMonsters = [
  {
    id: 'goblin',
    name: 'Goblin',
    health: 100,
    attack: 5,
    defense: 0,
    // ganti path sprite sesuai asset-mu
    sprite: '/src/assets/monsters/goblin.png',
    lore:
      'Goblin adalah monster level rendah yang sering berkeliaran di gerbang dungeon. ' +
      'Mereka lemah sendirian, tapi berbahaya jika bergerombol.',
    unlocked: false,
    killCount: 0,
  },
  {
    id: 'orc',
    name: 'Orc',
    health: 150,
    attack: 10,
    defense: 5,
    sprite: '/src/assets/monsters/orc.png',
    lore:
      'Orc adalah prajurit garis depan dengan fisik kuat dan serangan brutal. ' +
      'Hanya petarung berpengalaman yang bisa menjatuhkannya sendirian.',
    unlocked: false,
    killCount: 0,
  },
  {
    id: 'ekdina',
    name: 'Ekdina',
    health: 200,
    attack: 15,
    defense: 10,
    sprite: '/src/assets/monsters/ekdina.png',
    lore:
      'Ekdina adalah makhluk mistis penjaga lorong kristal. ' +
      'Tubuhnya diselimuti energi magis yang menyerap sebagian serangan.',
    unlocked: false,
    killCount: 0,
  },
  {
    id: 'naga',
    name: 'Naga',
    health: 250,
    attack: 25,
    defense: 20,
    sprite: '/src/assets/monsters/naga.png',
    lore:
      'Naga adalah penguasa langit dan api. ' +
      'Setiap kali muncul, desa-desa di sekitarnya biasanya lenyap dalam semalam.',
    unlocked: false,
    killCount: 0,
  },
  {
    id: 'demonlord',
    name: 'Demonlord',
    health: 300,
    attack: 30,
    defense: 25,
    sprite: '/src/assets/monsters/demonlord.png',
    lore:
      'Demonlord adalah bos terakhir dari dungeon terdalam. ' +
      'Konon hanya sedikit petarung yang pernah melihatnya dan masih hidup.',
    unlocked: false,
    killCount: 0,
  },
]

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return [...defaultMonsters]

    const parsed = JSON.parse(raw)
    // jaga-jaga kalau struktur berubah
    return defaultMonsters.map(def => {
      const saved = parsed.find(m => m.id === def.id)
      return saved ? { ...def, ...saved } : def
    })
  } catch {
    return [...defaultMonsters]
  }
}

const monsters = ref(loadFromStorage())

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(monsters.value))
}

export function useMonsters() {
  function unlockAndCount(monsterId) {
    const m = monsters.value.find(m => m.id === monsterId)
    if (!m) return

    m.unlocked = true
    m.killCount = (m.killCount || 0) + 1
    save()
  }

  function resetAll() {
    monsters.value = loadFromStorage()
    save()
  }

  return {
    monsters,
    unlockAndCount,
    resetAll,
  }
}
