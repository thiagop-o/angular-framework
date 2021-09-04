import { Posts } from '@app/models/posts';

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { PostsService } from '@app/services/posts.service';
import { PaginatorConfigService } from '@app/services/PaginatorConfig.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postsID!: number;
  public posts: Posts[] = [];
  public postsFiltrados: Posts[] = []
  public _filtroPosts: string = '';
  pageLow: number = 1;
  pageHigh: number = 10
  length = 100;
  pageSize = 10;
  

  @ViewChild(MatPaginator, { static: true })paginator!: MatPaginator;


  public  filtroPosts(){
    this.postsFiltrados = [...this.posts.filter(post => post.title.toLocaleLowerCase().includes(this._filtroPosts))]
  }



  constructor(private postService: PostsService,
    private spinner: NgxSpinnerService,
    private paginatorConfig : PaginatorConfigService) { }

  ngOnInit() {
    
    this.getPosts();
    this.paginatorConfig.paginatorConfig(this.paginator);
    

  }



  public getPosts(): void {
    this.postService.getPosts(this.pageLow).subscribe(
      (posts: Posts[]) => {
        this.spinner.show();
        this.posts = posts
        this.postsFiltrados = [...this.posts];
      },
      (error: any) => {
        this.spinner.hide() 
        console.error(error)}
    ).add(() => this.spinner.hide())

  }

  public getPaginatorData(event: PageEvent): void{
    this.pageLow = event.pageIndex + 1
    this.getPosts()
  }

}
