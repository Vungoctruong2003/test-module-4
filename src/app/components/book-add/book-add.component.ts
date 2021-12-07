import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {BooksService} from "../../service/books.service";

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  formAdd?: any;

  constructor(private booksService: BooksService,
              private fb: FormBuilder, private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.formAdd = this.fb.group({
      title: [''],
      author: [''],
      description: ['']
    })
  }

  create() {
    const book = this.formAdd.value;
    this.booksService.create(book).subscribe(res => {
      this.router.navigate([''])
    })
  }
}
