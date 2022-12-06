import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CpItem } from './cp-item';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cpItems = [
      { id: 1,
        name: 'Catalogues',
        routerLink: 'catalogues', security: [
        visibility:{ 
          groups: [], users: []
        },
        read: { 
          groups: [], users: []
        },
        write: { 
          groups: [], users: []
        },
        modify: { 
          groups: [], users: []
        }
       },
    ];
    return {cpItems};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: CpItem[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}