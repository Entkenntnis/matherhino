export function percentToGrade(p: number) {
  if (p >= 90) return 1
  if (p >= 75) return 2
  if (p >= 65) return 3
  if (p >= 50) return 4
  if (p >= 30) return 5
  return 6
}
