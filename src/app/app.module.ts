import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppComponent } from './app.component';
import { NavComponent } from './shareds/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AlbumsComponent } from './components/albums/albums.component';
import { PostsComponent } from './components/posts/posts.component';
import { TodosComponent } from './components/todos/todos.component';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PostsService } from './services/posts.service';
import { PaginatorConfigService } from './services/PaginatorConfig.service';
import {MatIconModule} from '@angular/material/icon';
import { TodosService } from './services/todos.service';
import { AlbumsService } from './services/albums.service';
import { NamePipe } from './utils/name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AlbumsComponent,
    PostsComponent,
    TodosComponent,
    NamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    FlexLayoutModule,
    NgxSpinnerModule,
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule,
    MatPaginatorModule,
    MatIconModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [PostsService, PaginatorConfigService, TodosService, AlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
