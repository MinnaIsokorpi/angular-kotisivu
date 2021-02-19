import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MeData } from './dataClasses';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDataService {
  createDb() {
    const myDatas: MeData[] = [
      { id: 1, info: 'Opintovapaalla' },
      {
        id: 2,
        info: 'Istuu ikkunalla ja koodaa javaa (terveiset Jyväskylään Vesalle)',
      },
      { id: 3, info: 'On talvi' },
    ];

    //TODO: hobbies ja studies kans

    return myDatas;
  }

  constructor() {}
}
