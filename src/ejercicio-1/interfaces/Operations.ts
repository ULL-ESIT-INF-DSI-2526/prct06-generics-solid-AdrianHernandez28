export interface AddEntity<T> {
  add(entity: T): void;
}

export interface EraseEntity<T> {
  erase(entity: T): void;
}