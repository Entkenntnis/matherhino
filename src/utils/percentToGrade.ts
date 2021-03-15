export function percentToGrade(p: number) {
  if (p >= 90) return 1
  if (p >= 80) return 2
  if (p >= 70) return 3
  if (p >= 60) return 4
  if (p >= 30) return 5
  return 6
}
