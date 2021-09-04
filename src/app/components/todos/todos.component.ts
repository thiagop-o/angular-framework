import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Todos } from '@app/models/todos';
import { PaginatorConfigService } from '@app/services/PaginatorConfig.service';
import { TodosService } from '@app/services/todos.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public todos: Todos[] = [];
  public todosFiltrados: Todos[] = []
  public _filtroTodos: string = '';
  pageLow: number = 1;
  pageHigh: number = 10
  length = 200;
  pageSize = 10;
  

  @ViewChild(MatPaginator, { static: true })paginator!: MatPaginator;


  public  filtroPosts(){
    this.todosFiltrados = [...this.todos.filter(todo => todo.title.toLocaleLowerCase().includes(this._filtroTodos))]
  }

  constructor(
    private todosService: TodosService,
    private spinner: NgxSpinnerService,
    private paginatorConfig : PaginatorConfigService
  ) { }

  ngOnInit() {
    this.getTodos();
    this.paginatorConfig.paginatorConfig(this.paginator);
  }

  public getTodos(): void {
    this.todosService.getTodos(this.pageLow).subscribe(
      (todos: Todos[]) => {
        this.spinner.show();
        this.todos = todos
        this.todosFiltrados = [...this.todos];
      },
      (error: any) => {
        this.spinner.hide() 
        console.error(error)}
    ).add(() => this.spinner.hide())

  }

  public getPaginatorData(event: PageEvent): void{
    this.pageLow = event.pageIndex + 1
    this.getTodos()
  }
}
