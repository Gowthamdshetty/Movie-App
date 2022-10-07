import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject } from './movie/Search';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  response: any;

  constructor(private client: HttpClient) { }

  searchMoviesByTitle(name: string){
    const url = 'http://www.omdbapi.com/?apikey=bf8476db&s='+name;
    const obj = this.client.get(url);
    obj.subscribe((response) => {
      this.response = response;
      console.log('callback function response = ' + this.response);
    });
  }

}
