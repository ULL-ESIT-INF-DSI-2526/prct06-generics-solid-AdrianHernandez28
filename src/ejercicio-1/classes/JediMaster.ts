import { JediMasterAttributes } from "../interfaces/IJediMasterAttributes";
import { Affiliation } from "./BasicGalacticCollection";

export type JediPower = 'youngling' | 'padawan' | 'jedi knight' | 'jedi master';

export class JediMaster implements JediMasterAttributes {
  constructor(public name: string,
              public powerLevel: JediPower,
              public affiliation: Affiliation,
              public birthyear: number,
              public originPlanet: string) {}
}