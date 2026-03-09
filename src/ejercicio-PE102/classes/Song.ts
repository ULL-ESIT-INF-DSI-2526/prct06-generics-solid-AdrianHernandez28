import { Reproducible } from "../interfaces/IReproducible";

export class Song implements Reproducible<string> {
  /** Título de la canción */
  #title: string;
  /** Artista de la canción */
  #artist: string;
  /** Género musical de la canción */
  #gender: string;
  /** Álmbum al que pertenece la canción */
  #album: string;
  /** Duración de la canción en segundos */
  #duration: number;

  constructor(_title: string, _artist: string, _gender: string, _album: string, _durat: number) {
    this.#title = _title;
    this.#artist = _artist;
    this.#gender = _gender;
    this.#album = _album;
    this.#duration = _durat;
  }

  get title(): string {
    return this.#title;
  }

  get artist(): string {
    return this.#artist;
  }

  get gender(): string {
    return this.#gender;
  }

  get album(): string {
    return this.#album;
  }
  /**
   * Método que retorna la información de una canción
   * @returns Devuelve un string que contiene el título y el artista
   */
  data(): string {
    return `Title: ${this.title}, Artist: ${this.artist}`;
  }

  /**
   * Método que retorna la duración de la canción en segundos
   * @returns Devuelve un number
   */
  duration(): number {
    return this.#duration;
  }
}