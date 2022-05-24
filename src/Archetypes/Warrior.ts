import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static _warriorCount = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Warrior._warriorCount += 1;
    this._energyType = 'stamina';
  }
  
  public get name(): string {
    return this.name;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Warrior._warriorCount;
  }
}

export default Warrior;