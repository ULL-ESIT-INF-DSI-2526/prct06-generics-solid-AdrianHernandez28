import { GalacticRegistry } from "../interfaces/IGalacticRegistry";
import { HasName } from "../interfaces/IHasName";

export type Affiliation = 'Republica' | 'Imperio' | 'Sith' | 'Independiente';

export abstract class BasicGalacticCollection<T extends HasName > implements GalacticRegistry<T> {
  constructor(public collection: T[]) {}

  searchByName(name: string): T[] {
    return this.collection.filter(e => e.name === name);
  }

  add(entity: T): void {
    this.collection.push(entity);
  }

  erase(entity: T): void {
    const position = this.collection.indexOf(entity);
    if (position !== -1) {
      this.collection.splice(position, 1);
    }
  }

  abstract searchByAffiliation(affiliation: Affiliation): T[];

  abstract searchByOriginPlanet(planet: string): T[];

  abstract searchByPowerOrClass(powerOrClass: string): T[];

  abstract searchByYear(year: number): T[];

}