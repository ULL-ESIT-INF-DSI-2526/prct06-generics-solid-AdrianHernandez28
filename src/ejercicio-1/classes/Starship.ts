import { StarshipAttributes } from "../interfaces/IStarshipAttrinutes";
import { Affiliation } from "./BasicGalacticCollection";

export type StarshipClass = 'Starfighter' | 'Freighter' | 'Corvette' | 'Cruiser' | 'Star Destroyer' | 'Dreadnought';

export class Starship implements StarshipAttributes {
  constructor(public name: string,
              public shipClass: StarshipClass,
              public crewCapacity: number,
              public affiliation: Affiliation,
              public builtYear: number,
              public originPlanet: string) {}
}