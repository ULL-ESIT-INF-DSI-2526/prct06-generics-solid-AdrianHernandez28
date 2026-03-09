import { describe, test, expect, beforeEach } from 'vitest';
import { Song } from '../../src/ejercicio-PE102/classes/Song';

describe('Podcast', () => {
  let s: Song;

  beforeEach(() => {
    s = new Song('dsi-song', 'YO', 'RAP', 'DSI', 100);    
  });

  describe('Getters de la clase Song', () => {
    test('title', () => {
      expect(s.title).toBe('dsi-song');
    });

    test('artist', () => {
      expect(s.artist).toBe('YO');
    });

    test('gender', () => {
      expect(s.gender).toBe('RAP');
    });

    test('album', () => {
      expect(s.album).toBe('DSI');
    });

  });

  describe('data(): string', () => {
    test('Devuelve texto correcto', () => {
      expect(s.data()).toBe('Title: dsi-song, Artist: YO');
    });
  });

  describe('duration(): number', () => {
    test('Devuelve duración correcta', () => {
      expect(s.duration()).toBe(100);
    });
  });
});