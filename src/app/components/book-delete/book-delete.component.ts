import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {BooksService} from "../../service/books.service";

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  book?: any;
  id?: any
  constructor(private bookService:BooksService, private router: Router,private route:ActivatedRoute) { }

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
  deleteCustomer() {
    this.bookService.delete(this.id).subscribe(res => {
      this.router.navigate([''])
    })
  }
}
