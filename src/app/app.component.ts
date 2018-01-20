import { Component } from '@angular/core';
import { BooksListComponent } from './books-list/books-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
   title = 'Book List';
  //  countSelectedBooks: number = 0;
  //  pushBookCount(bookCount) {
  //   console.log('I have Reached in Parent Controller: ', bookCount);
  //   this.countSelectedBooks = bookCount;
  //   }
}
