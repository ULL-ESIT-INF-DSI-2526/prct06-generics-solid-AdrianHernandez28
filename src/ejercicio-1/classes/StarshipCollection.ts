import { Affiliation, BasicGalacticCollection } from "./BasicGalacticCollection";
import { Starship } from "./Starship";

export class StarshipCollection extends BasicGalacticCollection<Starship> {
  constructor(public collection: Starship[]) {
    super(collection);
  }

  searchByAffiliation(affiliation: Affiliation): Starship[] {
    return this.collection.filter(s => s.affiliation === affiliation);
  }

  searchByOriginPlanet(planet: string): Starship[] {
    return this.collection.filter(s => s.originPlanet === planet);
  }

  searchByPowerOrClass(powerOrClass: string): Starship[] {
    return this.collection.filter(s => s.shipClass === powerOrClass);
  }

  searchByYear(year: number): Starship[] {
    return this.collection.filter(s => s.builtYear === year);
  }
}