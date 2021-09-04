import { Todos } from '@app/models/todos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable()
export class TodosService {
    baseUrl = environment.apiURL + 'todos?_page=';

    constructor(private http: HttpClient) { }
    
    public getTodos(page: number): Observable<Todos[]>{
      return this.http.get<Todos[]>(this.baseUrl + page).pipe(take(1))
    }

}
