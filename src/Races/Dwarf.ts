import Race from './Race';

class Dwarf extends Race {
  private static _dwarfCount = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._dwarfCount += 1;
    this._maxLifePoints = 80;
  }
    
  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Dwarf._dwarfCount;
  }
}

export default Dwarf;