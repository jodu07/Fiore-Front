import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../interfaces/news.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private api='https://newsapi.org/v2/top-headlines?country=';

  constructor(private http: HttpClient) { }

    getNews():Observable<News>{

      const url = 'https://newsapi.org/v2/top-headlines?country=co&category=sports&apiKey=7b15c6b975ff4cb181e64ddb01cccc40'

      return this.http.get<News>(url);

    }




}


