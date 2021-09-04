import { AlbumsService } from '@app/services/albums.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Albums } from '@app/models/albums';
import { NgxSpinnerService } from 'ngx-spinner';
import { PaginatorConfigService } from '@app/services/PaginatorConfig.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  postsID!: number;
  public albums: Albums[] = [];
  public albumsFiltrados: Albums[] = []
  public _filtroAlbums: string = '';
  pageLow: number = 1;
  pageHigh: number = 10
  length = 100;
  pageSize = 10;
  

  @ViewChild(MatPaginator, { static: true })paginator!: MatPaginator;


  public  filtroPosts(){
    this.albumsFiltrados = [...this.albums.filter(album => album.title.toLocaleLowerCase().includes(this._filtroAlbums))]
  }

  constructor(
    private albumsService: AlbumsService,
    private spinner: NgxSpinnerService,
    private paginatorConfig : PaginatorConfigService
  ) { }

  ngOnInit() {
    this.getAlbums();
    this.paginatorConfig.paginatorConfig(this.paginator);
  }

  public getAlbums(): void {
    this.albumsService.getAlbums(this.pageLow).subscribe(
      (albums: Albums[]) => {
        this.spinner.show();
        this.albums = albums
        this.albumsFiltrados = [...this.albums];
      },
      (error: any) => {
        this.spinner.hide() 
        console.error(error)}
    ).add(() => this.spinner.hide())

  }

  public getPaginatorData(event: PageEvent): void{
    this.pageLow = event.pageIndex + 1
    this.getAlbums()
  }
}
