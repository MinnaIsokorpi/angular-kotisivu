/**
 * Tämä palvelu esittää valepalvelimen tietokannan sisällön.
 * Tämä data haetaan http-protokollan välityksellä frontend-sovellukseen.
 * Tämä poistetaan sitten kun frontsovellus on valmis ja voidaan alkaa
 * käyttämään oikeaa palvelinta.
 */

import { Injectable } from '@angular/core';
import { HobbiesData, MeData, StudiesData } from './dataClasses';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const medatas: MeData[] = [
      { id: 1, info: 'Opintovapaalla' },
      {
        id: 2,
        info: 'Istuu ikkunalla ja koodaa javaa (terveiset Jyväskylään Vesalle)',
      },
      { id: 3, info: 'On talvi' },
    ];

    const hobbies: HobbiesData[] = [
      { id: 1, info: 'Ratsastus' },
      { id: 2, info: 'Uinti' },
      { id: 3, info: 'Kävely tai lenkkeily' },
      { id: 4, info: 'Pelaaminen (Sims4, Cities: Skylines yms)' },
      { id: 5, info: 'Lumilautailu kun sää sallii' },
      { id: 6, info: 'Seinäkiipeily' },
    ];

    const studies: StudiesData[] = [
      { id: 1, info: 'Basics of Web' },
      { id: 1, info: 'Ohjelmistokehityksen työvälineet' },
      { id: 1, info: 'Ohjelmoinnin perusteet' },
      { id: 1, info: 'Relaatiotietokannat' },
      { id: 1, info: 'AWS-palvelut' },
      { id: 1, info: 'Tietorakenteet ja algoritmit' },
      { id: 1, info: 'Frontend-sovelluskehitys' },
      { id: 1, info: 'Mobiilikehitys web-tekniikoilla' },
      { id: 1, info: 'NoSQL-tietokannat' },
      { id: 1, info: 'NodeJS-sovelluskehitys' },
      { id: 1, info: 'Lopputyö' },
      {
        id: 2,
        info: 'Git-versiohallinta ja Gitlab -projektien hallintaympäristö',
      },
      { id: 2, info: 'Linux käyttö ja hallinta' },
      { id: 2, info: 'Ohjelmoinnin perusteet' },
      { id: 2, info: 'Tietoverkot' },
      { id: 2, info: 'Kyberturvallisuus' },
      { id: 2, info: 'Auditointi, penetraatiotestaus ja Red Team -toiminta' },
      { id: 2, info: 'Hyökkäykset ja puolustusmenetelmät' },
    ];

    return { medatas, hobbies, studies };
  }

  constructor() {}
}
