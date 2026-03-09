/**
 * Interfaz que establece el contrato que deberán cumplir todos los 
 * elementos que puedan formar parte de un historial de reproducción. 
 */
export interface Reproducible<T> {
  /** Permite acceder a la información del elemento */
  data(): T;
  /** Retorna la duración en segundos */
  duration(): number;
}