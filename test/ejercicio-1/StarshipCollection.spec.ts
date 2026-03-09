import { describe, test, expect, beforeEach } from 'vitest';
import { StarshipCollection } from '../../src/ejercicio-1/classes/StarshipCollection';
import { Starship } from '../../src/ejercicio-1/classes/Starship'

describe('StarshipCollection', () => {
  let collection: StarshipCollection;
  let xWing: Starship;
  let falcon: Starship;
  let destroyer: Starship;

  beforeEach(() => {
    xWing = new Starship('X-Wing', 'Starfighter', 1, 'Republica', 0, 'Fresia');
    falcon = new Starship('Millennium Falcon', 'Freighter', 4, 'Independiente', 60, 'Corellia');
    destroyer = new Starship('Star Destroyer', 'Star Destroyer', 37000, 'Imperio', 19, 'Kuat');
    
    collection = new StarshipCollection([xWing, falcon, destroyer]);
  });

  describe('Métodos Base', () => {
    test('añade una nueva nave a la colección', () => {
      const tieFighter = new Starship('TIE Fighter', 'Starfighter', 1, 'Imperio', 0, 'Lothal');
      collection.add(tieFighter);
      expect(collection.collection.length).toBe(4);
      expect(collection.collection).toContain(tieFighter);
    });

    test('elimina una nave existente de la colección', () => {
      collection.erase(falcon);
      expect(collection.collection.length).toBe(2);
      expect(collection.collection).not.toContain(falcon);
    });

    test('busca una nave por su nombre exacto', () => {
      const results = collection.searchByName('X-Wing');
      expect(results.length).toBe(1);
      expect(results[0].name).toBe('X-Wing');
    });
  });

  describe('Métodos Específicos', () => {
    test('filtra naves por afiliación', () => {
      const results = collection.searchByAffiliation('Imperio');
      expect(results.length).toBe(1);
      expect(results[0].name).toBe('Star Destroyer');
    });

    test('filtra naves por planeta de origen', () => {
      const results = collection.searchByOriginPlanet('Corellia');
      expect(results.length).toBe(1);
      expect(results[0].name).toBe('Millennium Falcon');
    });

    test('filtra naves por clase (PowerOrClass)', () => {
      const results = collection.searchByPowerOrClass('Starfighter');
      expect(results.length).toBe(1);
      expect(results[0].name).toBe('X-Wing');
    });

    test('filtra naves por año de construcción', () => {
      const results = collection.searchByYear(60);
      expect(results.length).toBe(1);
      expect(results[0].name).toBe('Millennium Falcon');
    });
  });
});