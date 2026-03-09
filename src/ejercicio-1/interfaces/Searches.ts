import { Affiliation } from "../classes/BasicGalacticCollection";

export interface SearchByOriginPlanet<T> {
  searchByOriginPlanet(planet: string): T[];
}

export interface SearchByAffiliation<T> {
  searchByAffiliation(affiliation: Affiliation): T[];
}

export interface SearchByName<T> {
  searchByName(name: string): T[];
}

export interface PowerLevelQueryable<T> {
  searchByPowerOrClass(level: string): T[];
}

export interface SearchByYear<T> {
  searchByYear(year: number): T[];
}