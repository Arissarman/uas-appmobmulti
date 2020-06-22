import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceProvider {
  API_KEY = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=a6597c47a1364a02a3e3e6a957f0f2ba';
  
  
  constructor(public httpClient: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }


  getNews(){
    return this.httpClient.get(this.API_KEY);
  }
}
