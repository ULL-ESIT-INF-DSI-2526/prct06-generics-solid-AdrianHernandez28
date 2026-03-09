import { Reproducible } from "../interfaces/IReproducible";
import { Podcast } from "./Podcast";
import { Song } from "./Song";

/** Tipo de dato para poder seleccionar en el filtro */
export type Element = 'song' | 'podcast';

/**
 * Función que dice si el objeto es de tipo Song
 * @param myObj - Objeto a inspeccionar
 * @returns True si es de tipo Song, en otro caso false.
 */
export function isSong(myObj: unknown): myObj is Song {
  return typeof myObj === "object" && myObj !== null && "title" in myObj;
}

/**
 * Función que dice si el objeto es de tipo Podcast
 * @param myObj - Objeto a inspeccionar
 * @returns True si es de tipo Podcast, en otro caso false.
 */
export function isPodcast(myObj: unknown): myObj is Song {
  return typeof myObj === "object" && myObj !== null && "theme" in myObj;
}

/**
 * Clase que representa un historial de canciones y podcasts
 */
export class History<T extends Song | Podcast> {
  constructor(private collection: T[]) {}

  /**
   * Método que añade un elemento al final del historial.
   * @param element - Elemento a introducir en la colección
   */
  add(element: T): void {
    this.collection.push(element);
  }

  /**
   * Método que elimina un elemento del historial por su índice.
   * @param index - Índice del elemento a eliminar
   */
  remove(index: number): void {
    this.collection.splice(index, 1);
  }

  /**
   * Método que retorna el elemento situado en un índice dado.
   * @param index - Índice del elemento a devolver
   * @returns Retorna el elemento seleccionado
   */
  get(index: number): T {
    return this.collection[index];
  }

  /**
   * Método que retorna el número de elementos del historial.
   * @returns Retorna la longitud de la colección
   */
  size(): number {
    return this.collection.length;
  }

  /**
   * Método que filtra entre canciones y podcast
   * @param key - Clave que se introduce para saber que filtrar
   * @returns Lista de Podcast o de canciones
   */
  filter(key: Element): T[] {
    if (key === 'song') {
      return this.filterSongs();
    }
    return this.filterPodcast();
  }

  /**
   * Método que filtra solo canciones
   * @returns Lista de canciones
   */
  private filterSongs(): T[] {
    return this.collection.filter(item => {
      if (isSong(item)) {
        return item;
      }
    });
  }

  /**
   * Método que filtra solo Podcast
   * @returns Lista de Podcast
   */
  private filterPodcast(): T[] {
    return this.collection.filter(item => {
      if (isPodcast(item)) {
        return item;
      }
    });
  }

  /**
   * Método  que retorna la suma de las duraciones de todos los elementos del historial.
   * @returns Retorna un número entero
   */
  duration(): number {
    let result: number = 0;
    this.collection.forEach(item => {
      result += item.duration();
    });
    return result;
  }
}