import { Affiliation } from "../classes/BasicGalacticCollection";
import { JediPower } from "../classes/JediMaster";

export interface JediMasterAttributes {
  name: string;
  powerLevel: JediPower;
  affiliation: Affiliation;
  birthyear: number;
  originPlanet: string;
}