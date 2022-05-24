import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _rangerCount = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Ranger._rangerCount += 1;
    this._energyType = 'stamina';
  }
  
  public get name(): string {
    return this.name;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Ranger._rangerCount;
  }
}

export default Ranger;