import { take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '@app/models/posts';


@Injectable(
  //{  providedIn: 'root'}
  )
export class PostsService {
  baseUrl = environment.apiURL + 'posts?_page=';

constructor(private http: HttpClient) { }
  public getPosts(page: number): Observable<Posts[]>{
    return this.http.get<Posts[]>(this.baseUrl + page).pipe(take(1))
  }

}
