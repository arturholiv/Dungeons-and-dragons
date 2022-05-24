import Race from './Race';

class Halfling extends Race {
  private static _halflingCount = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._halflingCount += 1;
    this._maxLifePoints = 60;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Halfling._halflingCount;
  }
}

export default Halfling;