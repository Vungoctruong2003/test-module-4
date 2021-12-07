import { Component, OnInit } from '@angular/core';
import {BooksService} from "../../service/books.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: any[] = [];
  constructor(private bookService:BooksService) { }

  ngOnInit(): void {
    this.getAllBook()
  }
  getAllBook() {
    (this.bookService.getAll().subscribe(res => {
      console.log(this.books = res)
    }))
  }

}
