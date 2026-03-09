import { Affiliation, BasicGalacticCollection } from "./BasicGalacticCollection";
import { JediMaster } from "./JediMaster";

export class JediMasterCollection extends BasicGalacticCollection<JediMaster> {
  constructor(public collection: JediMaster[]) {
    super(collection);
  }

  searchByAffiliation(affiliation: Affiliation): JediMaster[] {
    return this.collection.filter(jm => jm.affiliation === affiliation);
  }

  searchByOriginPlanet(planet: string): JediMaster[] {
    return this.collection.filter(jm => jm.originPlanet === planet);
  }

  searchByPowerOrClass(powerOrClass: string): JediMaster[] {
    return this.collection.filter(jm => jm.powerLevel === powerOrClass);
  }

  searchByYear(year: number): JediMaster[] {
    return this.collection.filter(jm => jm.birthyear === year);
  }
}