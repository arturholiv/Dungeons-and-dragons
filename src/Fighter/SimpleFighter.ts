export default interface SimpleFighter {
  lifePoints: number,
  strength: number,
  attack(enemy: SimpleFighter): void
  receiveDamage(attackPoits: number): void
}