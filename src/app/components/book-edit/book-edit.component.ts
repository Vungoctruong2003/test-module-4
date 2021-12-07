import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {BooksService} from "../../service/books.service";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  formEdit?: any;
  id?: any;
  constructor(private bookService: BooksService,
              private fb: FormBuilder, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.formEdit = this.fb.group({
      title: [''],
      author: [''],
      description: ['']
    })
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );
    this.bookService.detail(this.id).subscribe(res => {
      let data = res;
      this.formEdit?.patchValue({
        title: data?.title,
        author: data?.author,
        description: data?.description,
      })
    });
  }
  edit() {
    const book = this.formEdit.value;
    const id = this.id
    this.bookService.update(book, id).subscribe(res => {
      this.router.navigate([''])
    })
  }

}
