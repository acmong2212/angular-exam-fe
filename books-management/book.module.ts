import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import {RouterModule} from "@angular/router";
import {BookRoutingModule} from "./book-routing.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    BookCreateComponent,
    BookUpdateComponent,
    BookDeleteComponent,
    BookListComponent,
    BookDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BookRoutingModule,
    FormsModule
  ]
})
export class BookModule { }
