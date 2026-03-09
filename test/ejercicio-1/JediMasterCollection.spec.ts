import { describe, test, expect, beforeEach } from 'vitest';
import { JediMasterCollection } from '../../src/ejercicio-1/classes/JediMasterCollection';
import { JediMaster } from '../../src/ejercicio-1/classes/JediMaster';

describe('JediMasterCollection', () => {
  let collection: JediMasterCollection;
  let yoda: JediMaster;
  let anakin: JediMaster;
  let ahsoka: JediMaster;

  beforeEach(() => {
    yoda = new JediMaster('Yoda', 'jedi master', 'Republica', 896, 'Desconocido');
    anakin = new JediMaster('Anakin Skywalker', 'jedi knight', 'Republica', 41, 'Tatooine');
    ahsoka = new JediMaster('Ahsoka Tano', 'padawan', 'Independiente', 36, 'Shili');
    
    collection = new JediMasterCollection([yoda, anakin, ahsoka]);
  });

  describe('Métodos Base', () => {
    test('añade un nuevo Jedi a la colección', () => {
      const obiWan = new JediMaster('Obi-Wan Kenobi', 'jedi master', 'Republica', 57, 'Stewjon');
      collection.add(obiWan);
      expect(collection.collection.length).toBe(4);
      expect(collection.collection).toContain(obiWan);
    });

    test('elimina un Jedi existente de la colección', () => {
      collection.erase(anakin);
      expect(collection.collection.length).toBe(2);
      expect(collection.collection).not.toContain(anakin);
    });

    test('no altera la colección si se intenta borrar un Jedi que no existe', () => {
      const luke = new JediMaster('Luke', 'jedi knight', 'Independiente', 19, 'Tatooine');
      collection.erase(luke);
      expect(collection.collection.length).toBe(3);
    });

    test('busca un Jedi por su nombre exacto', () => {
      const results = collection.searchByName('Yoda');
      expect(results.length).toBe(1);
      expect(results[0].name).toBe('Yoda');
    });
  });

  describe('Métodos Específicos', () => {
    test('filtra Jedis por afiliación', () => {
      const results = collection.searchByAffiliation('Republica');
      expect(results.length).toBe(2);
      expect(results.map(j => j.name)).toEqual(['Yoda', 'Anakin Skywalker']);
    });

    test('filtra Jedis por planeta de origen', () => {
      const results = collection.searchByOriginPlanet('Tatooine');
      expect(results.length).toBe(1);
      expect(results[0].name).toBe('Anakin Skywalker');
    });

    test('filtra Jedis por nivel de poder (PowerOrClass)', () => {
      const results = collection.searchByPowerOrClass('padawan');
      expect(results.length).toBe(1);
      expect(results[0].name).toBe('Ahsoka Tano');
    });

    test('filtra Jedis por año de nacimiento', () => {
      const results = collection.searchByYear(896);
      expect(results.length).toBe(1);
      expect(results[0].name).toBe('Yoda');
    });
  });
});