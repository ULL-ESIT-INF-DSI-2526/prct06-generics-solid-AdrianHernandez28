import { SearchByAffiliation, SearchByName, SearchByOriginPlanet, SearchByYear, PowerLevelQueryable } from "./Searches";
import { AddEntity, EraseEntity } from './Operations'

export interface GalacticRegistry<T> extends SearchByAffiliation<T>, 
                                             SearchByName<T>,
                                             SearchByOriginPlanet<T>,
                                             SearchByYear<T>,
                                             PowerLevelQueryable<T>,
                                             AddEntity<T>,
                                             EraseEntity<T>
{
  collection: T[];
}