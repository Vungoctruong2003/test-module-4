import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookListComponent} from "./components/book-list/book-list.component";
import {BookDetailComponent} from "./components/book-detail/book-detail.component";
import {BookAddComponent} from "./components/book-add/book-add.component";
import {BookEditComponent} from "./components/book-edit/book-edit.component";
import {BookDeleteComponent} from "./components/book-delete/book-delete.component";

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },{
    path: 'detail/:id',
    component: BookDetailComponent
  }, {
    path: 'add',
    component: BookAddComponent
  }, {
    path: 'edit/:id',
    component: BookEditComponent
  },{
    path: 'delete/:id',
    component: BookDeleteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
