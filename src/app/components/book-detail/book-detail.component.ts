import { Component, OnInit } from '@angular/core';
import {BooksService} from "../../service/books.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book?: any;
  id?: any
  constructor(private bookService:BooksService,private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          console.log(this.id)
        }
      );
    this.detail()
  }
  detail() {
    (this.bookService.detail(this.id).subscribe(res => {
      console.log(res)
      console.log(this.book = res)
    }))
  }
}
