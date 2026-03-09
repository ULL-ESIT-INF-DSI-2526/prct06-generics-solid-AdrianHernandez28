import { describe, test, expect, beforeEach } from 'vitest';
import { Podcast } from '../../src/ejercicio-PE102/classes/Podcast';
import { ChapterStructure } from '../../src/ejercicio-PE102/classes/ChapterStructure';

describe('Podcast', () => {
  let pd: Podcast;

  beforeEach(() => {
    pd = new Podcast('PODCAST', 1, 'humor', 'JAVI', new Date('10-9-2025'), new Date('11-9-2025'));    
  });

  describe('Getters del Podcast', () => {
    test('name', () => {
      expect(pd.name).toBe('PODCAST');
    });

    test('numOfEpisode', () => {
      expect(pd.numOfEpisode).toBe(1);
    });

    test('theme', () => {
      expect(pd.theme).toBe('humor');
    });

    test('presentator', () => {
      expect(pd.presentator).toBe('JAVI');
    });

    test('iniDate', () => {
      expect(pd.iniDate.getFullYear()).toBe(2025);
    });

    test('finDate', () => {
      expect(pd.finDate.getFullYear()).toBe(2025);
    });
  });

  describe('data(): Chapter', () => {
    test('Devuelve objeto Chapter', () => {
      const chapter = pd.data();
      expect(chapter.name).toBe('PODCAST');
    });
  });

  describe('duration(): number', () => {
    test('Devuelve un number', () => {
      const duration_ = pd.duration();
      expect(duration_).toBeTypeOf('number');
    });
  });
});