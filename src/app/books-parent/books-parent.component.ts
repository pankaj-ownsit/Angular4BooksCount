import { Component, Input, Output, EventEmitter, Directive} from '@angular/core';
import { BooksListComponent } from '../books-list/books-list.component';


@Component({
  selector: 'books-parent',
  templateUrl: './books-parent.component.html',
  styleUrls: ['./books-parent.component.css']
})

export class BooksParentComponent {

  countSelectedBooks = 0;
  pushBookCount(bookCount) {
    console.log('I have Reached in Parent Controller - ParentBooks: ', bookCount);
    this.countSelectedBooks = bookCount;
    }

}


