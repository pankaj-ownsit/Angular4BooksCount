import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksListService } from './books-list.service';
import { BooksParentComponent } from './books-parent/books-parent.component';



@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BooksParentComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BooksListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
