export function getRandomNumberBetween (min: number, max: number): number {
  if (min === max || min > max) {
    return 0;
  }

  return Math.floor(Math.random() * (max - min) + min);
}
