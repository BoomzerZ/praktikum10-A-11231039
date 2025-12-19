export const UNLOCK_KEY = 'edv_unlocked_monsters'
export const KILLKEY = 'edv_kill_counts'

export function getUnlocked() {
  try {
    return JSON.parse(localStorage.getItem(UNLOCK_KEY) || '[]')
  } catch {
    return []
  }
}

export function unlockMonster(id) {
  const unlocked = getUnlocked()
  if (!unlocked.includes(id)) {
    unlocked.push(id)
    localStorage.setItem(UNLOCK_KEY, JSON.stringify(unlocked))
  }
}

export function isUnlocked(id) {
  return getUnlocked().includes(id)
}

export function getKillCounts() {
  try {
    return JSON.parse(localStorage.getItem(KILLKEY) || '{}')
  } catch {
    return {}
  }
}

export function incrementKillCount(id) {
  const counts = getKillCounts()
  counts[id] = (counts[id] || 0) + 1
  localStorage.setItem(KILLKEY, JSON.stringify(counts))
}

export function getKillCount(id) {
  return getKillCounts()[id] || 0
}
