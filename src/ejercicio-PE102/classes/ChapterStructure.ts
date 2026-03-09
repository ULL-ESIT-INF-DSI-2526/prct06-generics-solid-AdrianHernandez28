/**
 * Clase que representa un episodio de el podcast
 */
export class ChapterStructure {
  /** Nombre del programa */
  #name: string;
  /** Número de episodio del podcast */
  #numOfEpisode: number;

  constructor(_name: string, _numOfEpisode: number) {
    this.#name = _name;
    this.#numOfEpisode = _numOfEpisode;
  }

  get name(): string {
    return this.#name;
  }

  get numOfEpisode(): number {
    return this.#numOfEpisode;
  }
}