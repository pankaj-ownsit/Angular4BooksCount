import { Component, Output, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BooksListService } from '../books-list.service';



@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
// putting service in app.module.ts, for reusability
export class BooksListComponent {
  booksList: any[];
  bookCount: number;
  @Output('noOfBooks') noOfBooks: EventEmitter<any> = new EventEmitter();
  // @Output() noOfBooks: EventEmitter<any> = new EventEmitter();

  constructor(bookListService: BooksListService) {
    this.booksList = bookListService.getBooksList();
  }

 selectedBook(book: any) {
  book.selected = !book.selected;
  this.bookCount = this.booksList.filter(book => book.selected === true).length;
  // console.log('Count of Books: ', this.bookCount);
  // emitting the no. of selected books, later i will subscribe this eventemitter in books-parent component
  this.noOfBooks.emit(this.bookCount);
 }
}
