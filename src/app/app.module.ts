import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import {HttpClientModule} from "@angular/common/http";
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookAddComponent } from './components/book-add/book-add.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { BookDeleteComponent } from './components/book-delete/book-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent,
    BookAddComponent,
    BookEditComponent,
    BookDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
