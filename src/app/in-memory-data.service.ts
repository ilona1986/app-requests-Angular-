import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    let Items = [
      {id: 1, name: 'Windstorm'},
      {id: 2, name: 'Bombasto'},
      {id: 3, name: 'Magneta'},
      {id: 4, name: 'Tornado'},
      {id: 5, name: 'Kindstorm'},
      {id: 6, name: 'Tombasto'},
      {id: 7, name: 'Ragneta'},
      {id: 8, name: 'Dornado'},
      {id: 9, name: 'Findstorm'},
      {id: 10, name: 'Dombasto'},
      {id: 11, name: 'Tagneta'},
      {id: 12, name: 'Mornado'},
      {id: 13, name: 'Pindstorm'},
      {id: 14, name: 'Nombasto'},
      {id: 15, name: 'Pagneta'},
      {id: 16, name: 'Lornado'}
    ];
    return {Items};
  }
}


