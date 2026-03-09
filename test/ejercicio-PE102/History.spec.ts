import { describe, test, expect, beforeEach } from 'vitest';
import { History } from '../../src/ejercicio-PE102/classes/History';
import { Song } from '../../src/ejercicio-PE102/classes/Song';
import { Podcast } from '../../src/ejercicio-PE102/classes/Podcast';

describe('History', () => {
  let h: History<Song | Podcast>;
  let pd: Podcast;
  let s: Song;

  beforeEach(() => {
    pd = new Podcast('PODCAST', 1, 'humor', 'JAVI', new Date('10-9-2025'), new Date('11-9-2025'));    
    s = new Song('dsi-song', 'YO', 'RAP', 'DSI', 100); 
    h = new History<Song | Podcast>([pd, s]);   
  });

  describe('add', () => {
    test('Comprobar que se añade correctamente', () => {
      const new_s = new Song('LALALA', 'YO', 'RAP', 'DSI', 111); 
      h.add(new_s);
      expect(h.size()).toBe(3);
    });
  });

  describe('remove', () => {
    test('eliminamos en la primera posición y comprobamos que no está', () => {
      h.remove(0);
      expect(h.size()).toBe(1);
    });
  });

  describe('get', () => {
    test('Devuelve elemento de la primera posición', () => {
      expect(h.get(0)).toBe(pd);
    });
  });

  describe('filter', () => {
    test('Devuelve lista con solo Song', () => {
      const onlySongs = h.filter('song');
      expect(onlySongs.length).toBe(1);
    });

    test('Devuelve lista con solo Podcast', () => {
      h.add(new Podcast('PODCAST-2', 1, 'humor', 'JAVI', new Date('10-9-2025'), new Date('11-9-2025')))
      const onlyPodcast = h.filter('podcast');
      expect(onlyPodcast.length).toBe(2);
    });
  });

  describe('duration', () => {
    test('Devuelve duración correcta de todos los elementos de la lista', () => {
      const manualDuration = pd.duration() + s.duration();
      expect(h.duration()).toBe(manualDuration);
    });
  });
});