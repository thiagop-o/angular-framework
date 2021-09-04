import { MatPaginator } from '@angular/material/paginator';
import { Injectable } from '@angular/core';

@Injectable()
export class PaginatorConfigService {

constructor() { }
  public paginatorConfig (paginator: MatPaginator){
    paginator._intl.itemsPerPageLabel = 'Itens por Página'
  }
}
