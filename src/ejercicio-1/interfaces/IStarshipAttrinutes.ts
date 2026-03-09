import { Affiliation } from "../classes/BasicGalacticCollection";
import { StarshipClass } from "../classes/Starship";

export interface StarshipAttributes {
  name: string;
  shipClass: StarshipClass;
  crewCapacity: number;
  affiliation: Affiliation;
  builtYear: number;
  originPlanet: string;
}