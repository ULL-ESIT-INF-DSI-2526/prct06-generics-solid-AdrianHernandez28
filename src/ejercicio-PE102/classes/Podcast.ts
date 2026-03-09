import { Reproducible } from "../interfaces/IReproducible";
import { Chapter } from "./Chapter";

export class Podcast implements Reproducible<Chapter> {
  #name: string;

  #numOfEpisode: number;
  /** Temática del podcast */
  #theme: string;
  /** Nombre del presentador/a */
  #presentator: string;
  /** Fecha de inicio del programa */
  #iniDate: Date;
  /** Fecha de fin del programa */
  #finDate: Date;


  constructor(_name: string, _numOfEpisode: number, _theme: string, _presentator: string, _iniDate: Date, _finDate: Date) {
    this.#name = _name;
    this.#numOfEpisode = _numOfEpisode;
    this.#theme = _theme;
    this.#presentator = _presentator;
    this.#iniDate = _iniDate;
    this.#finDate = _finDate;
  }

  get name(): string {
    return this.#name;
  }

  get numOfEpisode(): number {
    return this.#numOfEpisode;
  }

  get theme(): string {
    return this.#theme;
  }

  get presentator(): string {
    return this.#presentator;
  }

  get iniDate(): Date {
    return this.#iniDate
  } 

  get finDate(): Date {
    return this.#finDate
  } 
  
  /**
   * Retorna un objeto con los datos nombre del programa y el número de episodio
   * @returns Retorna un Objeto Chapter
   */
  data(): Chapter {
    return new Chapter(this.name, this.numOfEpisode);
  }

  /**
   * Método que retorna la duración de un podcast en segundos
   * @returns Retorna el resultado de la reste entre la fecha de finalización y de inicio
   */
  duration(): number {
    return this.finDate.getSeconds() - this.iniDate.getSeconds();
  }
}