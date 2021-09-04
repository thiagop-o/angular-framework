import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Albums } from '@app/models/albums';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable()
export class AlbumsService {
  baseUrl = environment.apiURL + 'albums?_page=';

  constructor(private http: HttpClient) { }
  
  public getAlbums(page: number): Observable<Albums[]>{
    return this.http.get<Albums[]>(this.baseUrl + page).pipe(take(1))
  }
}
